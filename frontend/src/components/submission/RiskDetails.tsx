import './riskDetails.scss'
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { FormControl, FormHelperText, InputLabel, OutlinedInput } from '@material-ui/core';
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

const RiskDetails = (props: InputProps) => {

    const [validationObject, setValidationObject] = useState<App.ValidationObject[]>([
        { name: "cashRemaining", isValid: true, helperText: "" },
        { name: "monthsOfCashLeft", isValid: true, helperText: "" },
        { name: "monthlyBurnRate", isValid: true, helperText: "" },
        { name: "companyDebt", isValid: true, helperText: "" }
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
        if (!props.submissionDetails.cashRemaining ||
            !props.submissionDetails.monthsOfCashLeft ||
            !props.submissionDetails.monthlyBurnRate ||
            !props.submissionDetails.companyDebt) {
            return (false)
        } else {
            return (true)
        }
    }

    return (
        <section className="risk-details-section">
            <div className="title-wrapper">
                <span className="step-counter">(Step {props.stepNumber} / {props.totalSteps - 1}) </span>
                <span className="title">Risk Details. 🧾</span>
            </div>

            <div className="intro-text">
                <span>Current financial risk of the company.</span>
            </div>


            <div className="input-wrapper">
                <FormControl variant="outlined" className="margin-right" required>
                    <InputLabel htmlFor="cashRemaining">Cash remaining in company account</InputLabel>
                    <OutlinedInput
                        id="cashRemaining"
                        name="cashRemaining"
                        value={props.submissionDetails.cashRemaining}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!validationObject[0].isValid}
                        inputComponent={NumberFormatCustom}
                        labelWidth={265}
                    />
                    {validationObject[0].helperText && <FormHelperText style={{ "color": "red" }}>{validationObject[0].helperText}</FormHelperText>}
                </FormControl>
                <TextField
                    id="monthsOfCashLeft"
                    name="monthsOfCashLeft"
                    type="number"
                    className=""
                    label="Months of cash left"
                    variant="outlined"
                    value={props.submissionDetails.monthsOfCashLeft}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!validationObject[1].isValid}
                    helperText={!validationObject[1].isValid}
                    InputProps={{ inputProps: { min: 0 } }}
                    required
                />

                <div className="form-control-wrapper">
                    <FormControl variant="outlined" className="margin-right" required>
                        <InputLabel htmlFor="monthlyBurnRate">Monthly Burn Rate</InputLabel>
                        <OutlinedInput
                            id="monthlyBurnRate"
                            name="monthlyBurnRate"
                            value={props.submissionDetails.monthlyBurnRate}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!validationObject[2].isValid}
                            inputComponent={NumberFormatCustom}
                            labelWidth={140}
                        />
                        {validationObject[2].helperText && <FormHelperText style={{ "color": "red" }}>{validationObject[2].helperText}</FormHelperText>}
                    </FormControl>
                    <Tooltip title="If you are not yet profitable, what is your average loss each month? If profitable, congrats! Put £0." enterDelay={200} leaveDelay={200}>
                        <HelpIcon className="help-icon" />
                    </Tooltip>
                </div>
                <FormControl variant="outlined" className="" required>
                    <InputLabel htmlFor="companyDebt">Company debt</InputLabel>
                    <OutlinedInput
                        id="companyDebt"
                        name="companyDebt"
                        value={props.submissionDetails.companyDebt}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!validationObject[3].isValid}
                        inputComponent={NumberFormatCustom}
                        labelWidth={110}
                    />
                    {validationObject[3].helperText && <FormHelperText style={{ "color": "red" }}>{validationObject[3].helperText}</FormHelperText>}
                </FormControl>
            </div>
            <div className="button-wrapper">
                <button className="ain-button back" onClick={props.decreaseStepNumber}>Back</button>
                <button className="ain-button next" disabled={!checkValuesComplete()} onClick={props.increaseStepNumber}>Next</button>
            </div>
        </section>
    )

}

export default RiskDetails