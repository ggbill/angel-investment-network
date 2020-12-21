import './extrasDetails.scss'
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { FormControl, FormHelperText, Input, InputAdornment, InputLabel, ListItem, MenuItem, OutlinedInput, Select } from '@material-ui/core';
import NumberFormat from 'react-number-format';

interface InputProps {
    stepNumber: number,
    totalSteps: number,
    submissionDetails: App.SubmissionDetails,
    setSubmissionDetails: (submissionDetails: App.SubmissionDetails) => void,
    increaseStepNumber: () => void
    decreaseStepNumber: () => void
}

const ExtrasDetails = (props: InputProps) => {

    const [validationObject, setValidationObject] = useState<App.ValidationObject[]>([
        { name: "isMovingOffice", isValid: true, helperText: "" },
        { name: "isLawerInPlace", isValid: true, helperText: "" },
        { name: "isLookingForChairman", isValid: true, helperText: "" },
        { name: "extraHelp", isValid: true, helperText: "" },
        { name: "isMissionDriven", isValid: true, helperText: "" }
    ])


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

    const checkValuesComplete = (): boolean => {
        if (!props.submissionDetails.isMovingOffice ||
            !props.submissionDetails.isLawerInPlace  ||
            !props.submissionDetails.isLookingForChairman  || 
            !props.submissionDetails.extraHelp  ||
            !props.submissionDetails.isMissionDriven 
            ) {
            return (false)
        } else {
            return (true)
        }
    }
    return (
        <section className="extras-details-section">
            <div className="title-wrapper">
                <span className="step-counter">(Step {props.stepNumber} / {props.totalSteps - 1}) </span>
                <span className="title">Extras Details. 🎉</span>
            </div>

            <div className="intro-text">
                <span>Any additional extras we can help you with?</span>
            </div>


            <div className="input-wrapper">
                <FormControl variant="outlined" className="margin-right">
                    <InputLabel id="moving-office-label">Will you be moving office in the next 12 months?</InputLabel>
                    <Select
                        labelId="moving-office-label"
                        id="isMovingOffice"
                        name="isMovingOffice"
                        value={props.submissionDetails.isMovingOffice}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!validationObject[0].isValid}
                        required
                        label="Will you be moving office in the next 12 months?"
                    >
                        <ListItem value="false">No</ListItem>
                        <ListItem value="true">Yes</ListItem>
                    </Select>
                    {validationObject[0].helperText && <FormHelperText style={{ "color": "red" }}>{validationObject[0].helperText}</FormHelperText>}
                </FormControl>
                <FormControl variant="outlined" className="">
                    <InputLabel id="lawyer-label">Do you have a lawyer or termsheet in place?</InputLabel>
                    <Select
                        labelId="lawyer-label"
                        id="isLawerInPlace"
                        name="isLawerInPlace"
                        value={props.submissionDetails.isLawerInPlace}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!validationObject[1].isValid}
                        required
                        label="Do you have a lawyer or termsheet in place?"
                    >
                        <ListItem value="false">No</ListItem>
                        <ListItem value="true">Yes</ListItem>
                    </Select>
                    {validationObject[1].helperText && <FormHelperText style={{ "color": "red" }}>{validationObject[1].helperText}</FormHelperText>}
                </FormControl>
                <FormControl variant="outlined" className="margin-right">
                    <InputLabel id="chairman-label">Are you looking for a chairman?</InputLabel>
                    <Select
                        labelId="chairman-label"
                        id="isLookingForChairman"
                        name="isLookingForChairman"
                        value={props.submissionDetails.isLookingForChairman}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!validationObject[2].isValid}
                        required
                        label="Are you looking for a chairman?"
                    >
                        <ListItem value="false">No</ListItem>
                        <ListItem value="true">Yes</ListItem>
                    </Select>
                    {validationObject[2].helperText && <FormHelperText style={{ "color": "red" }}>{validationObject[2].helperText}</FormHelperText>}
                </FormControl>
                <TextField
                    id="extraHelp"
                    name="extraHelp"
                    className=""
                    label="Is there anything outside of fundraising we can help you with?"
                    variant="outlined"
                    value={props.submissionDetails.extraHelp}
                    onChange={handleChange}
                    onBlur={handleBlur}
                        error={!validationObject[3].isValid}
                        helperText={validationObject[3].helperText}
                        required
                />
                <FormControl variant="outlined" className="margin-right">
                    <InputLabel id="mission-label">Are you a mission driven company?</InputLabel>
                    <Select
                        labelId="mission-label"
                        id="isMissionDriven"
                        name="isMissionDriven"
                        value={props.submissionDetails.isMissionDriven}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!validationObject[4].isValid}
                        required
                        label="Are you a mission driven company?"
                        
                    >
                        <ListItem value="false">No</ListItem>
                        <ListItem value="true">Yes</ListItem>
                    </Select>
                    {validationObject[4].helperText ? <FormHelperText style={{ "color": "red" }}>{validationObject[4].helperText}</FormHelperText>:
                    <FormHelperText>i.e. a profit-driven company whose aim is to address a social and/or environmental challenge.</FormHelperText>
                    }
                    
                </FormControl>
            </div>
            <div className="button-wrapper">
            <button className="ain-button back" onClick={props.decreaseStepNumber}>Back</button>
                    <button className="ain-button next" disabled={!checkValuesComplete()} onClick={props.increaseStepNumber}>Submit</button>
                </div>
        </section>
    )

}

export default ExtrasDetails