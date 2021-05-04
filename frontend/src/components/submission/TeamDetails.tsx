import './teamDetails.scss'
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { FormControl, FormHelperText, Input, InputAdornment, InputLabel, ListItem, MenuItem, OutlinedInput, Select } from '@material-ui/core';
import NumberFormat from 'react-number-format';
import { makeStyles } from '@material-ui/core/styles'

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

// NumberFormatCustom.propTypes = {
//     inputRef: PropTypes.func.isRequired,
//     name: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// };


const TeamDetails = (props: InputProps) => {

    const [validationObject, setValidationObject] = useState<App.ValidationObject[]>([
        { name: "foundersAverageSalary", isValid: true, helperText: "" },
        { name: "teamExperience", isValid: true, helperText: "" },
        { name: "isPreviousExits", isValid: true, helperText: "" },
        { name: "foundersCount", isValid: true, helperText: "" },
        { name: "employeesCount", isValid: true, helperText: "" },
        { name: "twelveMonthSalaryForecast", isValid: true, helperText: "" },
        { name: "twelveMonthHiresForecast", isValid: true, helperText: "" },
        { name: "keyPositionsToHire", isValid: true, helperText: "" }
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
        if (!props.submissionDetails.foundersAverageSalary ||
            !props.submissionDetails.teamExperience  ||
            !props.submissionDetails.isPreviousExits  || 
            !props.submissionDetails.foundersCount ||
            !props.submissionDetails.employeesCount ||
            !props.submissionDetails.twelveMonthHiresForecast  || 
            !props.submissionDetails.keyPositionsToHire ) {
            return (false)
        } else {
            return (true)
        }
    }

    return (
        <section className="team-details-section">
            <div className="title-wrapper">
                <span className="step-counter">(Step {props.stepNumber} / {props.totalSteps - 1}) </span>
                <span className="title">Team Details. 👨‍👩‍👦</span>
            </div>

            <div className="intro-text">
                <span>Your background, your time and hiring plan.</span>
            </div>


            <div className="input-wrapper">

                <FormControl variant="outlined" className="margin-right" required>
                    <InputLabel htmlFor="foundersAverageSalary">Founders Average Salary</InputLabel>
                    <OutlinedInput
                        id="foundersAverageSalary"
                        name="foundersAverageSalary"
                        value={props.submissionDetails.foundersAverageSalary}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!validationObject[0].isValid}
                        inputComponent={NumberFormatCustom}
                        labelWidth={185}
                    />
                    {validationObject[0].helperText && <FormHelperText style={{ "color": "red" }}>{validationObject[0].helperText}</FormHelperText>}
                </FormControl>

                <FormControl variant="outlined" className="" required>
                    <InputLabel id="team-experience-label">Team Experience</InputLabel>
                    <Select
                        labelId="team-experience-label"
                        id="teamExperience"
                        name="teamExperience"
                        value={props.submissionDetails.teamExperience}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!validationObject[1].isValid}
                        label="Team Experience"
                    >
                        <ListItem value="1-5 years">1-5 years</ListItem>
                        <ListItem value="5-10 years">5-10 years</ListItem>
                        <ListItem value="10-15 years">10-15 years</ListItem>
                        <ListItem value="15+ years">15+ years</ListItem>
                    </Select>
                    {validationObject[1].helperText && <FormHelperText style={{ "color": "red" }}>{validationObject[1].helperText}</FormHelperText>}
                </FormControl>
                <FormControl variant="outlined" className="margin-right" required>
                    <InputLabel id="previous-exits-label">Previous Exits</InputLabel>
                    <Select
                        labelId="previous-exits-label"
                        id="isPreviousExits"
                        name="isPreviousExits"
                        value={props.submissionDetails.isPreviousExits}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!validationObject[2].isValid}
                        label="Previous Exits"
                    >
                        <ListItem value="false">No</ListItem>
                        <ListItem value="true">Yes</ListItem>
                    </Select>
                    {validationObject[2].helperText && <FormHelperText style={{ "color": "red" }}>{validationObject[2].helperText}</FormHelperText>}
                </FormControl>
                <TextField
                    id="foundersCount"
                    name="foundersCount"
                    className=""
                    label="Number of Founders"
                    variant="outlined"
                    value={props.submissionDetails.foundersCount}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!validationObject[3].isValid}
                    helperText={validationObject[3].helperText}
                    type="number"
                    InputProps={{ inputProps: { min: 1 } }}
                    required
                />
                <TextField
                    id="employeesCount"
                    name="employeesCount"
                    className="margin-right"
                    label="Number of Employees Including Founders"
                    variant="outlined"
                    value={props.submissionDetails.employeesCount}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!validationObject[4].isValid}
                    helperText={!validationObject[4].isValid}
                    type="number"
                    InputProps={{ inputProps: { min: 1 } }}
                    required
                />
                <FormControl variant="outlined" className="" required>
                    <InputLabel htmlFor="twelveMonthSalaryForecast">Forecast Total Salary Spend in Next 12 Months</InputLabel>
                    <OutlinedInput
                        id="twelveMonthSalaryForecast"
                        name="twelveMonthSalaryForecast"
                        value={props.submissionDetails.twelveMonthSalaryForecast}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!validationObject[5].isValid}
                        inputComponent={NumberFormatCustom}
                        labelWidth={345}
                    />
                    {validationObject[5].helperText && <FormHelperText style={{ "color": "red" }}>{validationObject[5].helperText}</FormHelperText>}
                </FormControl>
                <TextField
                    id="twelveMonthHiresForecast"
                    name="twelveMonthHiresForecast"
                    className="margin-right"
                    label="Number of Future Hires in Next 12 Months"
                    variant="outlined"
                    value={props.submissionDetails.twelveMonthHiresForecast}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!validationObject[6].isValid}
                    helperText={!validationObject[6].isValid}
                    type="number"
                    InputProps={{ inputProps: { min: 0 } }}
                    required
                />
                <TextField
                    id="keyPositionsToHire"
                    name="keyPositionsToHire"
                    className=""
                    label="What Key Positions will you be Hiring"
                    variant="outlined"
                    value={props.submissionDetails.keyPositionsToHire}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!validationObject[7].isValid}
                    helperText={!validationObject[7].isValid}
                    required
                />
            </div>
            <div className="button-wrapper">
                <button className="ain-button back" onClick={props.decreaseStepNumber}>Back</button>
                <button className="ain-button next" disabled={!checkValuesComplete()} onClick={props.increaseStepNumber}>Next</button>
            </div>
        </section>
    )

}

export default TeamDetails