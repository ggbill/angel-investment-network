import './forecastDetails.scss'
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

    const [validationObject, setValidationObject] = useState<App.ValidationObject[]>([
        { name: "stage", isValid: true, helperText: "" },
        { name: "cashRequiredToFinish", isValid: true, helperText: "" },
        { name: "monthsUntilRevenue", isValid: true, helperText: "" },
        { name: "startOfFinancialYear", isValid: true, helperText: "" },
        { name: "monthlyRevenue", isValid: true, helperText: "" },
        { name: "twelveMonthProjectedRevenue", isValid: true, helperText: "" }
    ])

    const handleChange = (event) => {
        const { name, value } = event.target
        props.setSubmissionDetails({ ...props.submissionDetails, [name]: value })
    }

    const handleFinancialYearDateChange = (date) => {
        props.setSubmissionDetails({ ...props.submissionDetails, startOfFinancialYear: date })
    };

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
        if (!props.submissionDetails.stage ||
            (!props.submissionDetails.cashRequiredToFinish && props.submissionDetails.stage !== "1" && props.submissionDetails.stage !== "2" && props.submissionDetails.stage !== "3" && props.submissionDetails.stage !== "4") ||
            (!props.submissionDetails.monthsUntilRevenue && props.submissionDetails.stage !== "2" && props.submissionDetails.stage !== "3" && props.submissionDetails.stage !== "4") ||
            !props.submissionDetails.startOfFinancialYear ||
            !props.submissionDetails.monthlyRevenue ||
            !props.submissionDetails.twelveMonthProjectedRevenue
        ) {
            return (false)
        } else {
            return (true)
        }
    }

    return (
        <section className="forecast-details-section">
            <div className="title-wrapper">
                <span className="step-counter">(Step {props.stepNumber} / {props.totalSteps - 1}) </span>
                <span className="title">Forecast Details. 💸</span>
            </div>

            <div className="intro-text">
                <span>Financial growth over the next few years.</span>
            </div>


            <div className="input-wrapper">
                <FormControl variant="outlined" className="margin-right" required>
                    <InputLabel id="stage-label">Stage</InputLabel>
                    <Select
                        labelId="stage-label"
                        id="stage"
                        name="stage"
                        value={props.submissionDetails.stage}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!validationObject[0].isValid}
                        label="Stage"
                    >
                        <ListItem value="Pre-Startup/MVP">Pre-Startup/MVP</ListItem>
                        <ListItem value="Finished Product">Finished Product</ListItem>
                        <ListItem value="Achieving Sales">Achieving Sales</ListItem>
                        <ListItem value="Breaking Even">Breaking Even</ListItem>
                        <ListItem value="Profitable">Profitable</ListItem>
                        <ListItem value="Other">Other</ListItem>
                    </Select>
                    {validationObject[0].helperText && <FormHelperText style={{ "color": "red" }}>{validationObject[0].helperText}</FormHelperText>}
                </FormControl>
                <FormControl variant="outlined" required className="" disabled={
                    props.submissionDetails.stage === "Finished Product" ||
                    props.submissionDetails.stage === "Achieving Sales" ||
                    props.submissionDetails.stage === "Profitable" ||
                    props.submissionDetails.stage === "Breaking Even"
                }>
                    <InputLabel htmlFor="cashRequiredToFinish">Money needed to finish product</InputLabel>
                    <OutlinedInput
                        id="cashRequiredToFinish"
                        name="cashRequiredToFinish"
                        value={props.submissionDetails.cashRequiredToFinish}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!validationObject[1].isValid}   
                        inputComponent={NumberFormatCustom}
                        labelWidth={230}
                    />
                    {validationObject[1].helperText && <FormHelperText style={{ "color": "red" }}>{validationObject[1].helperText}</FormHelperText>}
                </FormControl>
                <TextField
                    id="monthsUntilRevenue"
                    name="monthsUntilRevenue"
                    className="margin-right"
                    label="Months until revenue making"
                    variant="outlined"
                    value={props.submissionDetails.monthsUntilRevenue}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!validationObject[2].isValid}
                    helperText={validationObject[2].helperText}
                    type="number"
                    InputProps={{ inputProps: { min: 0 } }}
                    required
                    disabled={
                        props.submissionDetails.stage === "Profitable" ||
                        props.submissionDetails.stage === "Achieving Sales" ||
                        props.submissionDetails.stage === "Breaking Even"
                    }
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
                        onBlur={handleBlur}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        error={!validationObject[3].isValid}
                        helperText={validationObject[3].helperText}
                        required
                    />
                </MuiPickersUtilsProvider>
                <FormControl variant="outlined" className="margin-right" required>
                    <InputLabel htmlFor="monthlyRevenue">Current monthly revenue</InputLabel>
                    <OutlinedInput
                        id="monthlyRevenue"
                        name="monthlyRevenue"
                        value={props.submissionDetails.monthlyRevenue}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        inputComponent={NumberFormatCustom}
                        labelWidth={180}
                        error={!validationObject[4].isValid}
                    />
                    {validationObject[4].helperText && <FormHelperText style={{ "color": "red" }}>{validationObject[4].helperText}</FormHelperText>}
                </FormControl>
                <FormControl variant="outlined" className="" required>
                    <InputLabel htmlFor="twelveMonthProjectedRevenue">Projected monthly revenue in 12 months</InputLabel>
                    <OutlinedInput
                        id="twelveMonthProjectedRevenue"
                        name="twelveMonthProjectedRevenue"
                        value={props.submissionDetails.twelveMonthProjectedRevenue}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!validationObject[5].isValid}
                        inputComponent={NumberFormatCustom}
                        labelWidth={295}
                    />
                    {validationObject[5].helperText && <FormHelperText style={{ "color": "red" }}>{validationObject[5].helperText}</FormHelperText>}
                </FormControl>
            </div>
            <div className="button-wrapper">
                <button className="ain-button back" onClick={props.decreaseStepNumber}>Back</button>
                <button className="ain-button next" disabled={!checkValuesComplete()} onClick={props.increaseStepNumber}>Next</button>
            </div>
        </section>
    )

}

export default ForecastDetails