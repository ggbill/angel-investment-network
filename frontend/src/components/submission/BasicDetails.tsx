import './basicDetails.scss'
import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

interface InputProps {
    stepNumber: number,
    totalSteps: number,
    submissionDetails: App.SubmissionDetails,
    setSubmissionDetails: (submissionDetails: App.SubmissionDetails) => void,
    increaseStepNumber: () => void
}

const BasicDetails = (props: InputProps) => {

    const handleChange = (event) => {
        const { name, value } = event.target
        props.setSubmissionDetails({ ...props.submissionDetails, [name]: value })
    }

    return (
        <section className="basic-details-section">
            <div className="title-wrapper">
                <span className="step-counter">(Step {props.stepNumber} / {props.totalSteps - 1}) </span>
                <span className="title">The basics.</span>
            </div>

            <div className="intro-text">
                <span>It's time to build your profile. We're going to ask you a few simple questions, after which we'll be able to book you in for a chat. The more you give, the more we've got.</span>
            </div>


            <div className="input-wrapper">
                <TextField
                    id="companyName"
                    name="companyName"
                    className="margin-right"
                    label="Company Name"
                    // InputProps={validationObject[0].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                    variant="outlined"
                    value={props.submissionDetails.companyName}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    // error={!validationObject[0].isValid}
                    // helperText={validationObject[0].helperText}
                />
                <TextField
                    id="email"
                    name="email"
                    label="Email Address"
                    // InputProps={validationObject[1].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                    variant="outlined"
                    value={props.submissionDetails.email}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    // error={!validationObject[1].isValid}
                    // helperText={validationObject[1].helperText}
                />
                {/* <TextField
                    id="email"
                    name="email"
                    className="margin-right"
                    label="Email Address"
                    InputProps={validationObject[3].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                    variant="outlined"
                    value={props.basicDetails.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!validationObject[3].isValid}
                    helperText={validationObject[3].helperText}
                />
                <TextField
                    id="telephone"
                    name="telephone"
                    label="Phone Number"
                    InputProps={validationObject[2].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                    variant="outlined"
                    value={props.basicDetails.telephone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!validationObject[2].isValid}
                    helperText={validationObject[2].helperText}
                /> */}
            </div>
            <div className="button-wrapper">
                {/* <button className={props.customerJourney === "buyer" ? "love-button buyer next" : "love-button seller next"} onClick={props.increaseStepNumber} disabled={!checkValuesComplete()}>Next</button> */}
            </div>
        </section>
    )

}

export default BasicDetails