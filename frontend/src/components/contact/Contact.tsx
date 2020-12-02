import './contact.scss'
import React from 'react'
import MenuBar from '../shared/MenuBar'
import { Card, CardContent, TextField } from '@material-ui/core'

const Contact = () => {
    return (
        <div className="contact-page">
            <MenuBar page="contact" />
            <section className="header-section">
                <div className="content">
                    <div className="title-wrapper">
                        <span className="title">Get In Touch</span>
                        <span className="sub-title">Looking for more information? Fill out the form below and we’ll get back to you shortly.</span>
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
                            <span className="title">🏠 Address</span>
                            <span>The Marriage Bureau</span>
                            <span>Brickbarns Business Centre,</span>
                            <span>Egdon,</span>
                            <span>Worcester, Worcestershire</span>
                            <span>WR7 4QR</span>
                        </div>
                        <div className="address-wrapper">
                            <span className="title">☎️ Telephone</span>
                            <span>0800 368 8618</span>
                        </div>
                        <div className="address-wrapper">
                            <span className="title">📧 Email</span>
                            <a href='mailto:tmb@business.love'>tmb@business.love</a>
                        </div>


                    </div>
                    <div className="contact-form">
                        <Card>
                            <CardContent>
                                <TextField
                                    id="name"
                                    name="name"
                                    label="Your Name"
                                    // InputProps={validationObject[0].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                                    variant="outlined"
                                    required
                                // value={props.basicDetails.name}
                                // onChange={handleChange}
                                // error={!validationObject[0].isValid}
                                // helperText={validationObject[0].helperText}
                                />
                                <TextField
                                    id="email"
                                    name="email"
                                    label="Email"
                                    // InputProps={validationObject[0].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                                    variant="outlined"
                                    required
                                // value={props.basicDetails.name}
                                // onChange={handleChange}
                                // error={!validationObject[0].isValid}
                                // helperText={validationObject[0].helperText}
                                />
                                <TextField
                                    id="phone"
                                    name="phone"
                                    label="Telephone"
                                    // InputProps={validationObject[0].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                                    variant="outlined"
                                // value={props.basicDetails.name}
                                // onChange={handleChange}
                                // error={!validationObject[0].isValid}
                                // helperText={validationObject[0].helperText}
                                />
                                <TextField
                                    id="company"
                                    name="company"
                                    label="Company Name"
                                    // InputProps={validationObject[0].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                                    variant="outlined"
                                // value={props.basicDetails.name}
                                // onChange={handleChange}
                                // error={!validationObject[0].isValid}
                                // helperText={validationObject[0].helperText}
                                />
                                <TextField
                                    id="message"
                                    name="message"
                                    label="Message"
                                    // InputProps={validationObject[0].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                                    variant="outlined"
                                    multiline
                                    required
                                    rows={4}
                                // value={props.basicDetails.name}
                                // onChange={handleChange}
                                // error={!validationObject[0].isValid}
                                // helperText={validationObject[0].helperText}
                                />
                                <span className="small-print">
                                    By submitting this form you consent to us emailing you occasionally about our products and services.
                                    You can unsubscribe from emails at any time, and we will never pass your email onto third parties. <a href='#'>Privacy Policy</a>
                                </span>
                                <button className="love-button submit">Send</button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact