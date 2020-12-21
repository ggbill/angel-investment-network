import './forecastDetails.scss'
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

const ForecastDetails = (props: InputProps) => {


    const handleChange = (event) => {
        const { name, value } = event.target
        console.log(`name: ${name}`)
        console.log(`value: ${value}`)
        props.setSubmissionDetails({ ...props.submissionDetails, [name]: value })
    }

    const handleFinancialYearDateChange = (date) => {
        props.setSubmissionDetails({ ...props.submissionDetails, startOfFinancialYear: date })
    };

    return (
        <section className="forecast-details-section">
            <div className="title-wrapper">
                <span className="step-counter">(Step {props.stepNumber} / {props.totalSteps - 1}) </span>
                <span className="title">Forecast Details.</span>
            </div>

            <div className="intro-text">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </div>


            <div className="input-wrapper">
            <FormControl variant="outlined" className="margin-right">
                    <InputLabel id="stage-label">Stage</InputLabel>
                    <Select
                        labelId="stage-label"
                        id="stage"
                        name="stage"
                        value={props.submissionDetails.stage}
                        onChange={handleChange}
                        label="Stage"
                    >
                        <ListItem value="0">Pre-Startup/R&amp;D</ListItem>
                        <ListItem value="1">MVP/Finished Product</ListItem>
                        <ListItem value="2">Achieving Sales</ListItem>
                        <ListItem value="3">Breaking Even</ListItem>
                        <ListItem value="4">Profitable</ListItem>
                        <ListItem value="5">Other</ListItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className="">
                    <InputLabel htmlFor="cashRequiredToFinish">Money needed to finish product</InputLabel>
                    <OutlinedInput
                        id="cashRequiredToFinish"
                        name="cashRequiredToFinish"
                        value={props.submissionDetails.cashRequiredToFinish}
                        onChange={handleChange}
                        inputComponent={NumberFormatCustom}
                        labelWidth={230}
                    />
                </FormControl>
                <TextField
                    id="monthsUntilRevenue"
                    name="monthsUntilRevenue"
                    className="margin-right"
                    label="Months until revenue making"
                    // InputProps={validationObject[0].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                    variant="outlined"
                    value={props.submissionDetails.monthsUntilRevenue}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    // error={!validationObject[0].isValid}
                    // helperText="&nbsp;"
                    type="number"
                    InputProps={{ inputProps: { min: 0 } }}
                />

                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <KeyboardDatePicker
                        // disableToolbar
                        name="startOfFinancialYear"
                        id="startOfFinancialYear"
                        variant="inline"
                        inputVariant="outlined"
                        format="DD/MM/yyyy"
                        className=""
                        label="Start of financial year"
                        value={props.submissionDetails.startOfFinancialYear}
                        onChange={handleFinancialYearDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <FormControl variant="outlined" className="margin-right">
                    <InputLabel htmlFor="monthlyRevenue">Current monthly revenue</InputLabel>
                    <OutlinedInput
                        id="monthlyRevenue"
                        name="monthlyRevenue"
                        value={props.submissionDetails.monthlyRevenue}
                        onChange={handleChange}
                        inputComponent={NumberFormatCustom}
                        labelWidth={180}
                    />
                </FormControl>
                <FormControl variant="outlined" className="">
                    <InputLabel htmlFor="twelveMonthProjectedRevenue">Projected monthly revenue in 12 months</InputLabel>
                    <OutlinedInput
                        id="twelveMonthProjectedRevenue"
                        name="twelveMonthProjectedRevenue"
                        value={props.submissionDetails.twelveMonthProjectedRevenue}
                        onChange={handleChange}
                        inputComponent={NumberFormatCustom}
                        labelWidth={295}
                    />
                </FormControl>








                {/* <FormControl variant="outlined" className="">
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
                    <InputLabel id="previous-exits-label">Team Experience</InputLabel>
                    <Select
                        labelId="previous-exits-label"
                        id="isPreviousExits"
                        name="isPreviousExits"
                        value={props.submissionDetails.isPreviousExits}
                        onChange={handleChange}
                        label="Team Experience"
                    >
                        <ListItem value="false">No</ListItem>
                        <ListItem value="true">Yes</ListItem>
                    </Select>
                </FormControl>
                <TextField
                    id="foundersCount"
                    name="foundersCount"
                    className=""
                    label="Number of founders in the team"
                    // InputProps={validationObject[0].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                    variant="outlined"
                    value={props.submissionDetails.foundersCount}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    // error={!validationObject[0].isValid}
                    // helperText="&nbsp;"
                    type="number"
                    InputProps={{ inputProps: { min: 0 } }}
                />
                <TextField
                    id="employeesCount"
                    name="employeesCount"
                    className="margin-right"
                    label="Number of employees including founders"
                    // InputProps={validationObject[0].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                    variant="outlined"
                    value={props.submissionDetails.employeesCount}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    // error={!validationObject[0].isValid}
                    // helperText="&nbsp;"
                    type="number"
                    InputProps={{ inputProps: { min: 0 } }}
                />
                <FormControl variant="outlined" className="">
                    <InputLabel htmlFor="twelveMonthSalaryForecast">Forecast total salary spend in next 12 months</InputLabel>
                    <OutlinedInput
                        id="twelveMonthSalaryForecast"
                        name="twelveMonthSalaryForecast"
                        value={props.submissionDetails.twelveMonthSalaryForecast}
                        onChange={handleChange}
                        inputComponent={NumberFormatCustom}
                        labelWidth={330}
                    />
                </FormControl>
                
                <TextField
                    id="twelveMonthHiresForecast"
                    name="twelveMonthHiresForecast"
                    className="margin-right"
                    label="Number of future hires in next 12 months"
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
                    label="What key positions will you be hiring?"
                    // InputProps={validationObject[0].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                    variant="outlined"
                    value={props.submissionDetails.keyPositionsToHire}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    // error={!validationObject[0].isValid}
                    // helperText="&nbsp;"
                /> */}


            </div>
        </section>
    )

}

export default ForecastDetails