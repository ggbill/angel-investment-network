import './basicDetailInputs.scss'
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

interface InputProps {
    currentStepNumber: number,
    totalSteps: number,
    basicDetails: BasicDetails,
    setBasicDetails: (basicDetails: BasicDetails) => void,
    increaseStepNumber: () => void,
    color: string,
    customerJourney: string
}

interface BasicDetails {
    name: string,
    companyName: string,
    telephone: string,
    email: string,
}

interface ValidationObject {
    name: string,
    isValid: boolean,
    helperText: string
}

const BasicDetailInputs = (props: InputProps) => {

    const [validationObject, setValidationObject] = useState<ValidationObject[]>([
        { name: "name", isValid: true, helperText: "" },
        { name: "companyName", isValid: true, helperText: "" },
        { name: "telephone", isValid: true, helperText: "" },
        { name: "email", isValid: true, helperText: "" },
    ])



    const useStyles = makeStyles((theme) => ({
        validOutline: {
            borderWidth: "1px",
            borderColor: `${props.color} !important`
        },
        errorOutline: {
            borderWidth: "1px",
            borderColor: `red !important`
        }
    }));

    const classes = useStyles();

    const handleChange = (event) => {

        const { name, value } = event.target

        if (value) {
            let tempValidationObject = [...validationObject]
            tempValidationObject.forEach(element => {
                if (name === element.name) {
                    element.isValid = true
                    element.helperText = ""
                }
            });
            setValidationObject(tempValidationObject)
        } else {
            let tempValidationObject = [...validationObject]
            tempValidationObject.forEach(element => {
                if (name === element.name) {
                    element.isValid = false
                    element.helperText = "Please fill this in!"
                }
            });
            setValidationObject(tempValidationObject)
        }

        props.setBasicDetails({ ...props.basicDetails, [name]: value })
    }

    const checkValuesComplete = (): boolean => {
        if (props.basicDetails.name === "" ||
        props.basicDetails.companyName === "" ||
        props.basicDetails.email === "" ||
        props.basicDetails.telephone === ""){
            return(false)
        }else{
            return(true)
        }
    }


    return (
        <section className="basic-details-section">
            <div className="title-wrapper">
                <span className="title">The basics.</span>
                <span className="step-counter">(Step {props.currentStepNumber} / {props.totalSteps - 1}) </span>
            </div>

            <div className="input-wrapper">
                <TextField
                    id="name"
                    name="name"
                    className="margin-right"
                    label="Your Name"
                    InputProps={validationObject[0].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                    variant="outlined"
                    value={props.basicDetails.name}
                    onChange={handleChange}
                    error={!validationObject[0].isValid}
                    helperText={validationObject[0].helperText}
                />
                <TextField
                    id="company-name"
                    name="companyName"
                    label="Your Company's Name"
                    InputProps={validationObject[1].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                    variant="outlined"
                    value={props.basicDetails.companyName}
                    onChange={handleChange}
                    error={!validationObject[1].isValid}
                    helperText={validationObject[1].helperText}
                />
                <TextField
                    id="telephone"
                    name="telephone"
                    className="margin-right"
                    label="Phone Number"
                    InputProps={validationObject[2].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                    variant="outlined"
                    value={props.basicDetails.telephone}
                    onChange={handleChange}
                    error={!validationObject[2].isValid}
                    helperText={validationObject[2].helperText}
                />
                <TextField
                    id="email"
                    name="email"
                    label="Email Address"
                    InputProps={validationObject[3].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                    variant="outlined"
                    value={props.basicDetails.email}
                    onChange={handleChange}
                    error={!validationObject[3].isValid}
                    helperText={validationObject[3].helperText}
                />
            </div>
            <div className="button-wrapper">
                <button className={props.customerJourney === "buyer" ? "love-button buyer next" : "love-button seller next"} onClick={props.increaseStepNumber} disabled={!checkValuesComplete()}>Next</button>
            </div>
        </section>



    )
}

export default BasicDetailInputs