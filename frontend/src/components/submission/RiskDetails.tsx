import './riskDetails.scss'
import React from 'react'
import TextField from '@material-ui/core/TextField'
import { FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
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

const RiskDetails = (props: InputProps) => {


    const handleChange = (event) => {
        const { name, value } = event.target
        console.log(`name: ${name}`)
        console.log(`value: ${value}`)
        props.setSubmissionDetails({ ...props.submissionDetails, [name]: value })
    }

    return (
        <section className="risk-details-section">
            <div className="title-wrapper">
                <span className="step-counter">(Step {props.stepNumber} / {props.totalSteps - 1}) </span>
                <span className="title">Risk Details.</span>
            </div>

            <div className="intro-text">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </div>


            <div className="input-wrapper">
                <FormControl variant="outlined" className="margin-right">
                    <InputLabel htmlFor="cashRemaining">Cash remaining in company account</InputLabel>
                    <OutlinedInput
                        id="cashRemaining"
                        name="cashRemaining"
                        value={props.submissionDetails.cashRemaining}
                        onChange={handleChange}
                        inputComponent={NumberFormatCustom}
                        labelWidth={265}
                    />
                </FormControl>
                <TextField
                    id="monthsOfCashLeft"
                    name="monthsOfCashLeft"
                    type="number"
                    className=""
                    label="Months of cash left"
                    // InputProps={validationObject[0].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                    variant="outlined"
                    value={props.submissionDetails.monthsOfCashLeft}
                    onChange={handleChange}
                    InputProps={{ inputProps: { min: 0 } }}
                    // onBlur={handleBlur}
                    // error={!validationObject[0].isValid}
                    // helperText="&nbsp;"
                />
                <FormControl variant="outlined" className="margin-right">
                    <InputLabel htmlFor="monthlyBurnRate">Monthly Burn Rate</InputLabel>
                    <OutlinedInput
                        id="monthlyBurnRate"
                        name="monthlyBurnRate"
                        value={props.submissionDetails.monthlyBurnRate}
                        onChange={handleChange}
                        inputComponent={NumberFormatCustom}
                        labelWidth={140}
                    />
                </FormControl>
                <FormControl variant="outlined" className="">
                    <InputLabel htmlFor="companyDebt">Company debt</InputLabel>
                    <OutlinedInput
                        id="companyDebt"
                        name="companyDebt"
                        value={props.submissionDetails.companyDebt}
                        onChange={handleChange}
                        inputComponent={NumberFormatCustom}
                        labelWidth={110}
                    />
                </FormControl>
            </div>
        </section>
    )

}

export default RiskDetails