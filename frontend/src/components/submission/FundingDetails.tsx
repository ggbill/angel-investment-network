import './fundingDetails.scss'
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

// NumberFormatCustom.propTypes = {
//     inputRef: PropTypes.func.isRequired,
//     name: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// };


const FundingDetails = (props: InputProps) => {

    const [validationObject, setValidationObject] = useState<App.ValidationObject[]>([
        { name: "preMoneyValuation", isValid: true, helperText: "" },
        { name: "taxBenefits", isValid: true, helperText: "" },
        { name: "amountRaising", isValid: true, helperText: "" },
        { name: "currentCommitments", isValid: true, helperText: "" },
        { name: "marketSize", isValid: true, helperText: "" },
        { name: "previousRoundRaise", isValid: true, helperText: "" },
        { name: "previousValuation", isValid: true, helperText: "" }
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
        if (!props.submissionDetails.preMoneyValuation ||
            !props.submissionDetails.taxBenefits  ||
            !props.submissionDetails.amountRaising  || 
            !props.submissionDetails.currentCommitments ||
            !props.submissionDetails.marketSize ||
            !props.submissionDetails.previousRoundRaise  || 
            !props.submissionDetails.previousValuation ) {
            return (false)
        } else {
            return (true)
        }
    }

    return (
        <section className="funding-details-section">
            <div className="title-wrapper">
                <span className="step-counter">(Step {props.stepNumber} / {props.totalSteps - 1}) </span>
                <span className="title">Funding Details. 💳</span>
            </div>

            <div className="intro-text">
                <span>Tell us a bit about your raise.</span>
            </div>


            <div className="input-wrapper">
                <FormControl variant="outlined" className="margin-right">
                    <InputLabel htmlFor="preMoneyValuation">Pre-Money Valuation</InputLabel>
                    <OutlinedInput
                        id="preMoneyValuation"
                        name="preMoneyValuation"
                        value={props.submissionDetails.preMoneyValuation}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!validationObject[0].isValid}
                        required
                        inputComponent={NumberFormatCustom}
                        labelWidth={155}
                    />
                    {validationObject[0].helperText && <FormHelperText style={{ "color": "red" }}>{validationObject[0].helperText}</FormHelperText>}
                </FormControl>
                <FormControl variant="outlined" className="">
                    <InputLabel id="tax-benefits-label">Tax Benefits</InputLabel>
                    <Select
                        labelId="tax-benefits-label"
                        id="taxBenefits"
                        name="taxBenefits"
                        value={props.submissionDetails.taxBenefits}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!validationObject[1].isValid}
                        required
                        label="Tax Benefits"
                    >
                        <ListItem value="EIS">EIS</ListItem>
                        <ListItem value="SEIS">SEIS</ListItem>
                        <ListItem value="both">Both</ListItem>
                        <ListItem value="neither">Neither</ListItem>
                    </Select>
                    {validationObject[1].helperText && <FormHelperText style={{ "color": "red" }}>{validationObject[1].helperText}</FormHelperText>}
                </FormControl>
                <FormControl variant="outlined" className="margin-right">
                    <InputLabel htmlFor="amountRaising">Amount Raising</InputLabel>
                    <OutlinedInput
                        id="amountRaising"
                        name="amountRaising"
                        value={props.submissionDetails.amountRaising}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!validationObject[2].isValid}
                        required
                        inputComponent={NumberFormatCustom}
                        labelWidth={115}
                    />
                    {validationObject[2].helperText && <FormHelperText style={{ "color": "red" }}>{validationObject[2].helperText}</FormHelperText>}
                </FormControl>
                <FormControl variant="outlined" className="">
                    <InputLabel htmlFor="currentCommitments">Current Commitments</InputLabel>
                    <OutlinedInput
                        id="currentCommitments"
                        name="currentCommitments"
                        value={props.submissionDetails.currentCommitments}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!validationObject[3].isValid}
                        required
                        inputComponent={NumberFormatCustom}
                        labelWidth={160}
                    />
                    {validationObject[3].helperText && <FormHelperText style={{ "color": "red" }}>{validationObject[3].helperText}</FormHelperText>}
                </FormControl>
                <FormControl variant="outlined" className="margin-right">
                    <InputLabel id="market-size-label">Market Size</InputLabel>
                    <Select
                        labelId="market-size-label"
                        id="marketSize"
                        name="marketSize"
                        value={props.submissionDetails.marketSize}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!validationObject[4].isValid}
                        required
                        label="Market Size"
                    >
                        <ListItem value="1">£1 - £10m</ListItem>
                        <ListItem value="2">£10 - £25m</ListItem>
                        <ListItem value="3">£25 - £50m</ListItem>
                        <ListItem value="4">£50m - £100m</ListItem>
                        <ListItem value="5">£100m - £250m</ListItem>
                        <ListItem value="6">£250m - £500m</ListItem>
                        <ListItem value="7">£500m - £1bn</ListItem>
                        <ListItem value="8">£1bn - £5bn</ListItem>
                        <ListItem value="9">£5bn+</ListItem>
                    </Select>
                    {validationObject[4].helperText && <FormHelperText style={{ "color": "red" }}>{validationObject[4].helperText}</FormHelperText>}
                </FormControl>

                <FormControl variant="outlined" className="">
                    <InputLabel htmlFor="previousRoundRaise">Funding raised in previous round</InputLabel>
                    <OutlinedInput
                        id="previousRoundRaise"
                        name="previousRoundRaise"
                        value={props.submissionDetails.previousRoundRaise}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!validationObject[5].isValid}
                        required
                        inputComponent={NumberFormatCustom}
                        labelWidth={240}
                    />
                    {validationObject[5].helperText && <FormHelperText style={{ "color": "red" }}>{validationObject[5].helperText}</FormHelperText>}
                </FormControl>
                <FormControl variant="outlined" className="margin-right">
                    <InputLabel htmlFor="previousValuation">Previous Valuation</InputLabel>
                    <OutlinedInput
                        id="previousValuation"
                        name="previousValuation"
                        value={props.submissionDetails.previousValuation}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!validationObject[6].isValid}
                        required
                        inputComponent={NumberFormatCustom}
                        labelWidth={140}
                    />
                    {validationObject[6].helperText && <FormHelperText style={{ "color": "red" }}>{validationObject[6].helperText}</FormHelperText>}
                </FormControl>
            </div>
            <div className="button-wrapper">
                <button className="ain-button back" onClick={props.decreaseStepNumber}>Back</button>
                <button className="ain-button next" disabled={!checkValuesComplete()} onClick={props.increaseStepNumber}>Next</button>
            </div>
        </section>
    )

}

export default FundingDetails