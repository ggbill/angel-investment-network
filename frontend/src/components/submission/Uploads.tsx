import './uploads.scss'
import React, { useState, useRef } from 'react'
import TextField from '@material-ui/core/TextField'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { FormControl, FormHelperText, InputLabel, ListItem, Select } from '@material-ui/core';
import { useHistory } from "react-router-dom";

interface InputProps {
    stepNumber: number,
    totalSteps: number,
    submissionDetails: App.SubmissionDetails,
    setSubmissionDetails: (submissionDetails: App.SubmissionDetails) => void,
    increaseStepNumber: () => void
    decreaseStepNumber: () => void
}

const Uploads = (props: InputProps) => {

    const [validationObject, setValidationObject] = useState<App.ValidationObject[]>([
        { name: "pitchDeckFile", isValid: true, helperText: "" },
        { name: "financialsFile", isValid: true, helperText: "" },
    ])

    const history = useHistory();
    const pitchDeckFile: any = useRef(null)
    const financialsFile: any = useRef(null)

    const handleChange = (event) => {
        const { name, value } = event.target
        props.setSubmissionDetails({ ...props.submissionDetails, [name]: value })
    }

    const handleBlur = (event) => {
        const { name, value } = event.target
        let tempValidationObject = [...validationObject]
        if (value) {
            tempValidationObject.forEach(element => {
                if (name === element.name) {
                    element.isValid = true
                    element.helperText = ""
                }
            });
        } else {
            console.log("blur no value")
            tempValidationObject.forEach(element => {
                if (name === element.name) {
                    element.isValid = false
                    element.helperText = "Please fill me in!"
                }
            });
        }
        setValidationObject(tempValidationObject)
        props.setSubmissionDetails({ ...props.submissionDetails, [name]: value })
    }

    const handleFoundedDateChange = (date) => {
        props.setSubmissionDetails({ ...props.submissionDetails, foundedDate: date })
    };

    const checkValuesComplete = (): boolean => {
        if (!props.submissionDetails.pitchDeckFile ||
            !props.submissionDetails.pitchDeckFile.name ||
            !props.submissionDetails.financialsFile ||
            !props.submissionDetails.financialsFile.name) {
            return (false)
        } else {
            return (true)
        }
    }

    const goToNextStep = () => {
        props.increaseStepNumber()
    }

    return (
        <section className="basic-details-section">
            <div className="title-wrapper">
                <span className="step-counter">(Step {props.stepNumber} / {props.totalSteps - 1}) </span>
                <span className="title">Uploads. 📤</span>
            </div>

            <div className="intro-text">
                <span>Upload your company documentation.</span>
            </div>


            <div className="input-wrapper">
                <div className="field-wrapper" onClick={() => pitchDeckFile.current.click()}>
                    <input
                        // accept=".pdf"
                        style={{ display: 'none' }}
                        type="file"
                        onChange={(event) => {
                            if (!event.target.files) return
                            // setReviewDetails({ ...reviewDetails, pitchDeckFile: event.target.files[0] })
                            props.setSubmissionDetails({ ...props.submissionDetails, pitchDeckFile: event.target.files[0] })
                        }}
                        ref={pitchDeckFile}
                    />

                    <TextField
                        label="Your Pitch Deck"
                        variant="outlined"
                        className="file-upload"
                        defaultValue="Select a File"
                        value={props.submissionDetails.pitchDeckFile ? props.submissionDetails.pitchDeckFile.name : "Select a File"}
                        disabled
                        required
                        fullWidth
                        error={!validationObject[0].isValid}
                        helperText={validationObject[0].helperText}
                    />
                </div>

                <div className="field-wrapper" onClick={() => financialsFile.current.click()}>
                    <input
                        // accept=".pdf"
                        style={{ display: 'none' }}
                        type="file"
                        onChange={(event) => {
                            if (!event.target.files) return
                            // setReviewDetails({ ...reviewDetails, pitchDeckFile: event.target.files[0] })
                            props.setSubmissionDetails({ ...props.submissionDetails, financialsFile: event.target.files[0] })
                        }}
                        ref={financialsFile}
                    />

                    <TextField
                        label="Your Financials"
                        variant="outlined"
                        className="file-upload"
                        defaultValue="Select a File"
                        value={props.submissionDetails.financialsFile ? props.submissionDetails.financialsFile.name : "Select a File"}
                        disabled
                        required
                        fullWidth
                        error={!validationObject[1].isValid}
                        helperText={validationObject[1].helperText}
                    />
                </div>
            </div>

            {/* <p>companyName: {props.submissionDetails.companyName}</p>
            <p>email: {props.submissionDetails.email}</p>
            <p>foundedDate: {String(props.submissionDetails.foundedDate)}</p>
            <p>post code: {props.submissionDetails.officePostCode}</p>
            <p>bus type: {props.submissionDetails.businessType}</p>
            <p>website: {props.submissionDetails.website}</p>
            <p>sector: {props.submissionDetails.sector}</p> */}

            <div className="button-wrapper">
                <button className="ain-button back" onClick={props.decreaseStepNumber}>Back</button>
                <button className="ain-button next" disabled={!checkValuesComplete()} onClick={goToNextStep}>Next</button>
                {/* <button className="ain-button next" disabled={!checkValuesComplete()} onClick={props.increaseStepNumber}>Next</button> */}
            </div>
        </section>
    )

}

export default Uploads