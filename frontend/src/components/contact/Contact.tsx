import './contact.scss'
import React, { useState, useEffect } from 'react'
import MenuBar from '../shared/MenuBar'
import { Card, CardContent, TextField } from '@material-ui/core'
import useFetch from "../../hooks/useFetch"
import ConfirmationDialog from '../shared/ConfimationDialog'
import { makeStyles } from '@material-ui/core/styles'
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from 'react'
import { headerSongList } from "./HeaderSongs";
import AutorenewIcon from '@material-ui/icons/Autorenew';
import CookieConsentPopup from '../shared/CookieConsentPopup'

interface ContactForm {
    name: string,
    email: string,
    phone: string,
    company: string,
    message: string
}

interface ValidationObject {
    name: string,
    isValid: boolean,
    helperText: string
}

const Contact = () => {

    const [contactForm, setContactForm] = useState<ContactForm>({ name: "", email: "", phone: "", company: "", message: "" })
    const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] = useState<boolean>(false)
    const [validationObject, setValidationObject] = useState<ValidationObject[]>([
        { name: "name", isValid: true, helperText: "" },
        { name: "email", isValid: true, helperText: "" },
        { name: "telephone", isValid: true, helperText: "" },
        { name: "company", isValid: true, helperText: "" },
        { name: "message", isValid: true, helperText: "" },
    ])
    const emailApi = useFetch("emails");
    const reRef = useRef<ReCAPTCHA>();
    const [headerSongNumber, setHeaderSongNumber] = useState<number>(0)

    const useStyles = makeStyles((theme) => ({
        validOutline: {
            borderWidth: "1px",
            borderColor: `#3f3b5b !important`
        },
        errorOutline: {
            borderWidth: "1px",
            borderColor: `red !important`
        }
    }));

    const classes = useStyles();

    const sendEmail = async () => {

        //reCAPTCHA stuff
        const token = await reRef.current.executeAsync()
        reRef.current.reset()


        emailApi.post({
            type: "CONTACT-FORM",
            name: contactForm.name,
            email: contactForm.email,
            phone: contactForm.phone,
            company: contactForm.company,
            message: contactForm.message,
            reCAPTCHAToken: token
        }).then(data => {
            console.log(data)
            setContactForm({ name: "", email: "", phone: "", company: "", message: "" })
            setIsConfirmationDialogOpen(true)
        }).catch((err: Error) => {
            console.log(err)
        })
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setContactForm({ ...contactForm, [name]: value });
    }

    const handleBlur = (event) => {
        const { name, value } = event.target

        if (value) {
            let tempValidationObject = [...validationObject]

            if (name === "email") {
                if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value)) {
                    tempValidationObject.forEach(element => {
                        if (name === element.name) {
                            element.isValid = true
                            element.helperText = ""
                        }
                    });
                } else {
                    tempValidationObject.forEach(element => {
                        if (name === element.name) {
                            element.isValid = false
                            element.helperText = "That don't look like any email address I've ever seen..."
                        }
                    });
                }
            } else {
                tempValidationObject.forEach(element => {
                    if (name === element.name) {
                        element.isValid = true
                        element.helperText = ""
                    }
                });
            }
            setValidationObject(tempValidationObject)
        } else {
            let tempValidationObject = [...validationObject]
            tempValidationObject.forEach(element => {
                if (name === element.name) {
                    element.isValid = false
                    element.helperText = "Please fill me in!"
                }
            });
            setValidationObject(tempValidationObject)
        }

        setContactForm({ ...contactForm, [name]: value });
    }

    const checkAllValuesComplete = (): boolean => {
        if (contactForm.name === "" ||
            contactForm.email === "" ||
            contactForm.message === "") {
            return (false)
        } else {
            return (true)
        }
    }

    const handleConfirmationDialogClose = () => {
        setIsConfirmationDialogOpen(false)
    };

    const randomlySelectHeaderSong = () => {
        let newNumber = Math.floor(Math.random() * headerSongList.length)

        if (newNumber == headerSongNumber){
            newNumber = newNumber + 1
        }
        setHeaderSongNumber(newNumber)
    }



    useEffect(() => {
        randomlySelectHeaderSong()
        // eslint-disable-next-line react-hooks/exhaustive-deps  
    }, []);


    return (
        <div className="contact-page">
            <MenuBar page="contact" />
            <section className="header-section">
                <div className="content">
                    <div className="title-wrapper">
                        <div className="song-title-wrapper">
                            {headerSongList[headerSongNumber] && <span className="title">{headerSongList[headerSongNumber].title}</span>}
                            <div className="refresh-icon" onClick={randomlySelectHeaderSong} title="Give me another one!"><AutorenewIcon /></div>
                        </div>
                        <span className="sub-title">
                            <span>🎸</span>
                            {headerSongList[headerSongNumber] && <a href={headerSongList[headerSongNumber].videoLink} target="_blank" rel="noreferrer">
                                Click me...
                            </a>}
                            <span>🎸</span>
                            <span className="small-print">(full disclosure headphones might be sensible.)</span>
                        </span>
                    </div>
                </div>
            </section>
            <section className="contact-section content">
                <div className="flex-wrapper">
                    <div className="contact-details">
                        <h2>How can we help?</h2>
                        <div className="intro-wrapper">
                            <span className="intro">If you have any questions or comments there are lots of ways to get in touch. Either fill out the simple contact form, otherwise our contact details are below!</span>
                        </div>
                        <div className="address-wrapper">
                            <span className="title"><span className="emoji">🏠</span>Address</span>
                            <span>The Marriage Bureau</span>
                            <span>Brickbarns Business Centre,</span>
                            <span>Egdon,</span>
                            <span>Worcester, Worcestershire</span>
                            <span>WR7 4QR</span>
                        </div>
                        <div className="address-wrapper">
                            <span className="title"><span className="emoji">☎️</span>Telephone</span>
                            <span>0800 368 8618</span>
                        </div>
                        <div className="address-wrapper">
                            <span className="title"><span className="emoji">📧</span>Email</span>
                            <a href='mailto:hello@themarriagebureau.co.uk'>hello@themarriagebureau.co.uk</a>
                        </div>
                    </div>
                    <div className="contact-form">
                        <Card>
                            <CardContent>
                                <TextField
                                    id="name"
                                    name="name"
                                    label="Your Name"
                                    InputProps={validationObject[0].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                                    variant="outlined"
                                    required
                                    value={contactForm.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={!validationObject[0].isValid}
                                    helperText={validationObject[0].helperText}
                                />
                                <TextField
                                    id="email"
                                    name="email"
                                    label="Email"
                                    InputProps={validationObject[1].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                                    variant="outlined"
                                    required
                                    value={contactForm.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={!validationObject[1].isValid}
                                    helperText={validationObject[1].helperText}
                                />
                                <TextField
                                    id="phone"
                                    name="phone"
                                    label="Telephone"
                                    InputProps={{ classes: { notchedOutline: classes.validOutline } }}
                                    variant="outlined"
                                    value={contactForm.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                // error={!validationObject[2].isValid}
                                // helperText={validationObject[2].helperText}
                                />
                                <TextField
                                    id="company"
                                    name="company"
                                    label="Company Name"
                                    InputProps={{ classes: { notchedOutline: classes.validOutline } }}
                                    variant="outlined"
                                    value={contactForm.company}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                // error={!validationObject[3].isValid}
                                // helperText={validationObject[3].helperText}
                                />
                                <TextField
                                    id="message"
                                    name="message"
                                    label="Message"
                                    InputProps={validationObject[4].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                                    variant="outlined"
                                    multiline
                                    required
                                    rows={4}
                                    value={contactForm.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={!validationObject[4].isValid}
                                    helperText={validationObject[4].helperText}
                                />
                                <div className="re-captcha-wrapper">
                                    <ReCAPTCHA
                                        ref={reRef}
                                        sitekey="6Lc26vcZAAAAAGC8FPT3kgtG6Tl-IlymOqGk7bY6"
                                        size="invisible"
                                    />
                                </div>



                                <span className="small-print">
                                    By submitting this form you consent to us emailing you occasionally about our products and services.
                                    You can unsubscribe from emails at any time, and we will never pass your email onto third parties. <a href='https://www.google.com'>Privacy Policy</a>
                                </span>
                                <button className="love-button submit" onClick={sendEmail} disabled={!checkAllValuesComplete()}>Send</button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            <ConfirmationDialog
                title="We've received your message (in a bottle or otherwise)."
                content="Thanks. We'll get back to you as soon as possible. Can't wait that long? Why not give us a ring instead?"
                handleClose={handleConfirmationDialogClose}
                isDialogOpen={isConfirmationDialogOpen}

            />
            <CookieConsentPopup />
        </div>
    )
}

export default Contact