import './teamDetails.scss'
import React from 'react'
import TextField from '@material-ui/core/TextField'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { FormControl, Input, InputAdornment, InputLabel, ListItem, MenuItem, OutlinedInput, Select } from '@material-ui/core';
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

// NumberFormatCustom.propTypes = {
//     inputRef: PropTypes.func.isRequired,
//     name: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// };


const TeamDetails = (props: InputProps) => {


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
        <section className="team-details-section">
            <div className="title-wrapper">
                <span className="step-counter">(Step {props.stepNumber} / {props.totalSteps - 1}) </span>
                <span className="title">Team Details. 👨‍👩‍👦</span>
            </div>

            <div className="intro-text">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </div>


            <div className="input-wrapper">

                <FormControl variant="outlined" className="margin-right">
                    <InputLabel htmlFor="foundersAverageSalary">Founders Average Salary</InputLabel>
                    <OutlinedInput
                        id="foundersAverageSalary"
                        name="foundersAverageSalary"
                        value={props.submissionDetails.foundersAverageSalary}
                        onChange={handleChange}
                        inputComponent={NumberFormatCustom}
                        labelWidth={185}
                    />
                </FormControl>
                <FormControl variant="outlined" className="">
                    <InputLabel id="team-experience-label">Team Experience</InputLabel>
                    <Select
                        labelId="team-experience-label"
                        id="teamExperience"
                        name="teamExperience"
                        value={props.submissionDetails.teamExperience}
                        onChange={handleChange}
                        label="Team Experience"
                    >
                        <ListItem value="1">1-5 years</ListItem>
                        <ListItem value="2">5-10 years</ListItem>
                        <ListItem value="3">10-15 years</ListItem>
                        <ListItem value="4">15+ years</ListItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className="margin-right">
                    <InputLabel id="previous-exits-label">Previous Exits</InputLabel>
                    <Select
                        labelId="previous-exits-label"
                        id="isPreviousExits"
                        name="isPreviousExits"
                        value={props.submissionDetails.isPreviousExits}
                        onChange={handleChange}
                        label="Previous Exits"
                    >
                        <ListItem value="false">No</ListItem>
                        <ListItem value="true">Yes</ListItem>
                    </Select>
                </FormControl>
                <TextField
                    id="foundersCount"
                    name="foundersCount"
                    className=""
                    label="Number of Founders"
                    // InputProps={validationObject[0].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                    variant="outlined"
                    value={props.submissionDetails.foundersCount}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    // error={!validationObject[0].isValid}
                    // helperText="&nbsp;"
                    type="number"
                    InputProps={{ inputProps: { min: 1 } }}
                />
                <TextField
                    id="employeesCount"
                    name="employeesCount"
                    className="margin-right"
                    label="Number of Employees Including Founders"
                    // InputProps={validationObject[0].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                    variant="outlined"
                    value={props.submissionDetails.employeesCount}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    // error={!validationObject[0].isValid}
                    // helperText="&nbsp;"
                    type="number"
                    InputProps={{ inputProps: { min: 1 } }}
                />
                <FormControl variant="outlined" className="">
                    <InputLabel htmlFor="foundersAverageSalary">Forecase Total Salary Spend in Next 12 Months</InputLabel>
                    <OutlinedInput
                        id="twelveMonthSalaryForecast"
                        name="twelveMonthSalaryForecast"
                        value={props.submissionDetails.twelveMonthSalaryForecast}
                        onChange={handleChange}
                        inputComponent={NumberFormatCustom}
                        labelWidth={345}
                    />
                </FormControl>
                <TextField
                    id="twelveMonthHiresForecast"
                    name="twelveMonthHiresForecast"
                    className="margin-right"
                    label="Number of Future Hires in Next 12 Months"
                    // InputProps={validationObject[0].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                    variant="outlined"
                    value={props.submissionDetails.twelveMonthHiresForecast}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    // error={!validationObject[0].isValid}
                    // helperText="&nbsp;"
                    type="number"
                    InputProps={{ inputProps: { min: 0 } }}
                />
                <TextField
                    id="keyPositionsToHire"
                    name="keyPositionsToHire"
                    className=""
                    label="What Key Positions will you be Hiring"
                    // InputProps={validationObject[0].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                    variant="outlined"
                    value={props.submissionDetails.keyPositionsToHire}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    // error={!validationObject[0].isValid}
                    // helperText="&nbsp;"
                />
                
            </div>
        </section>
    )

}

export default TeamDetails