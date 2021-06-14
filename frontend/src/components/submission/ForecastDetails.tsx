import './forecastDetails.scss'
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { FormControl, FormHelperText, InputLabel, ListItem, OutlinedInput, Select } from '@material-ui/core';
import NumberFormat from 'react-number-format';
import HelpIcon from '@material-ui/icons/Help';
import Tooltip from '@material-ui/core/Tooltip';

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
        // console.log(`name: ${name}, value: ${value}`)

        // reset the validation of the variable disabled fields on stage change (so dont get stuck on "Please fill me in!")
        if (name === "stage") {
            let tempValidationObject = [...validationObject]
            tempValidationObject.forEach(element => {
                if (element.name === "cashRequiredToFinish" || element.name === "monthsUntilRevenue") {
                    element.isValid = true
                    element.helperText = ""
                }
            });
            setValidationObject(tempValidationObject)
            props.setSubmissionDetails({ ...props.submissionDetails, [name]: value })
        } else {
            props.setSubmissionDetails({ ...props.submissionDetails, [name]: value })
        }
    }

    const handleFinancialYearDateChange = (date) => {
        let tempValidationObject = [...validationObject]
        if (date) {
            tempValidationObject.forEach(element => {
                if (element.name === "startOfFinancialYear") {
                    if (!Date.parse(date)) {
                        element.isValid = false
                        element.helperText = "Invalid date."
                    } else {
                        element.isValid = true
                        element.helperText = ""
                    }
                }
            });
        } else {
            tempValidationObject.forEach(element => {
                if ("startOfFinancialYear" === element.name) {
                    element.isValid = false
                    element.helperText = "Please fill me in!"
                }
            });
        }
        setValidationObject(tempValidationObject)
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

    // const checkValuesComplete = (): boolean => {
    //     if (!props.submissionDetails.stage ||
    //         (!props.submissionDetails.cashRequiredToFinish && props.submissionDetails.stage !== "Achieving Sales" && props.submissionDetails.stage !== "Breaking Even" && props.submissionDetails.stage !== "Profitable" && props.submissionDetails.stage !== "Finished Product") ||
    //         (!props.submissionDetails.monthsUntilRevenue && props.submissionDetails.stage !== "Achieving Sales" && props.submissionDetails.stage !== "Breaking Even" && props.submissionDetails.stage !== "Profitable") ||
    //         !props.submissionDetails.startOfFinancialYear ||
    //         !props.submissionDetails.monthlyRevenue ||
    //         !props.submissionDetails.twelveMonthProjectedRevenue
    //     ) {
    //         return (false)
    //     } else {
    //         return (true)
    //     }
    // }

    const checkValuesComplete = (): boolean => {
        let isValuesValid = true
        let isAllValuesComplete = false
        validationObject.forEach(element => {
            if (!element.isValid) {
                isValuesValid = false
            }
        });

        if (
            !props.submissionDetails.stage ||
            (!props.submissionDetails.cashRequiredToFinish && props.submissionDetails.stage !== "Achieving Sales" && props.submissionDetails.stage !== "Breaking Even" && props.submissionDetails.stage !== "Profitable" && props.submissionDetails.stage !== "Finished Product") ||
            (!props.submissionDetails.monthsUntilRevenue && props.submissionDetails.stage !== "Achieving Sales" && props.submissionDetails.stage !== "Breaking Even" && props.submissionDetails.stage !== "Profitable") ||
            !props.submissionDetails.startOfFinancialYear ||
            !props.submissionDetails.monthlyRevenue ||
            !props.submissionDetails.twelveMonthProjectedRevenue
            ) {
            isAllValuesComplete = false
        } else {
            isAllValuesComplete = true
        }

        if (isAllValuesComplete && isValuesValid) {
            return true
        } else {
            return false
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
                <div className="form-control-wrapper">
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
                    <div className="help-icon-wrapper"></div>
                </div>

                <div className="form-control-wrapper">
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
                    <div className="help-icon-wrapper"></div>
                </div>
                <div className="form-control-wrapper">
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
                    <div className="help-icon-wrapper"></div>
                </div>

                <div className="form-control-wrapper">
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
                            // onBlur={handleBlur}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            error={!validationObject[3].isValid}
                            helperText={validationObject[3].helperText}
                            required
                            autoOk={true}
                        />
                    </MuiPickersUtilsProvider>
                    <div className="help-icon-wrapper">
                        <Tooltip title="Please put year as your first ever FY" enterDelay={200} leaveDelay={200}>
                            <HelpIcon className="help-icon" />
                        </Tooltip>
                    </div>
                </div>
                <div className="form-control-wrapper">
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
                    <div className="help-icon-wrapper"></div>
                </div>
                <div className="form-control-wrapper">
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
                    <div className="help-icon-wrapper"></div>
                </div>

            </div>
            <div className="button-wrapper">
                <button className="ain-button back" onClick={props.decreaseStepNumber}>Back</button>
                <button className="ain-button next" disabled={!checkValuesComplete()} onClick={props.increaseStepNumber}>Next</button>
            </div>
        </section>
    )

}

export default ForecastDetails