import './extrasDetails.scss'
import React from 'react'
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

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            isNumericString
            prefix="£"
        />
    );
}

const ExtrasDetails = (props: InputProps) => {


    const handleChange = (event) => {
        const { name, value } = event.target
        console.log(`name: ${name}`)
        console.log(`value: ${value}`)
        props.setSubmissionDetails({ ...props.submissionDetails, [name]: value })
    }

    // const handleFoundedDateChange = (date) => {
    //     props.setSubmissionDetails({ ...props.submissionDetails, foundedDate: date })
    // };

    return (
        <section className="extras-details-section">
            <div className="title-wrapper">
                <span className="step-counter">(Step {props.stepNumber} / {props.totalSteps - 1}) </span>
                <span className="title">Extras Details. 🍔🥓🧀🌶️</span>
            </div>

            <div className="intro-text">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
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
                        label="Will you be moving office in the next 12 months?"
                    >
                        <ListItem value="false">No</ListItem>
                        <ListItem value="true">Yes</ListItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className="">
                    <InputLabel id="lawyer-label">Do you have a lawyer or termsheet in place?</InputLabel>
                    <Select
                        labelId="lawyer-label"
                        id="isLawerInPlace"
                        name="isLawerInPlace"
                        value={props.submissionDetails.isLawerInPlace}
                        onChange={handleChange}
                        label="Do you have a lawyer or termsheet in place?"
                    >
                        <ListItem value="false">No</ListItem>
                        <ListItem value="true">Yes</ListItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className="margin-right">
                    <InputLabel id="chairman-label">Are you looking for a chairman?</InputLabel>
                    <Select
                        labelId="chairman-label"
                        id="isLookingForChairman"
                        name="isLookingForChairman"
                        value={props.submissionDetails.isLookingForChairman}
                        onChange={handleChange}
                        label="Are you looking for a chairman?"
                    >
                        <ListItem value="false">No</ListItem>
                        <ListItem value="true">Yes</ListItem>
                    </Select>
                </FormControl>
                <TextField
                    id="extraHelp"
                    name="extraHelp"
                    className=""
                    label="Is there anything outside of fundraising we can help you with?"
                    // InputProps={validationObject[0].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                    variant="outlined"
                    value={props.submissionDetails.extraHelp}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    // error={!validationObject[0].isValid}
                    // helperText="&nbsp;"
                />
                <FormControl variant="outlined" className="margin-right">
                    <InputLabel id="mission-label">Are you a mission driven company?</InputLabel>
                    <Select
                        labelId="mission-label"
                        id="isMissionDriven"
                        name="isMissionDriven"
                        value={props.submissionDetails.isMissionDriven}
                        onChange={handleChange}
                        label="Are you a mission driven company?"
                        
                    >
                        <ListItem value="false">No</ListItem>
                        <ListItem value="true">Yes</ListItem>
                    </Select>
                    <FormHelperText>i.e. a profit-driven company whose aim is to address a social and/or environmental challenge.</FormHelperText>
                </FormControl>
            </div>
        </section>
    )

}

export default ExtrasDetails