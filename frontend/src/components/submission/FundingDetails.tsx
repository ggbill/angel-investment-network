import './fundingDetails.scss'
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


const FundingDetails = (props: InputProps) => {


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
        <section className="funding-details-section">
            <div className="title-wrapper">
                <span className="step-counter">(Step {props.stepNumber} / {props.totalSteps - 1}) </span>
                <span className="title">Funding Details.</span>
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
                <FormControl variant="outlined">
                    <InputLabel htmlFor="preMoneyValuation">Pre-Money Valuation</InputLabel>
                    <OutlinedInput
                        id="preMoneyValuation"
                        name="preMoneyValuation"
                        value={props.submissionDetails.preMoneyValuation}
                        onChange={handleChange}
                        inputComponent={NumberFormatCustom}
                        labelWidth={155}
                    />
                </FormControl>
                <FormControl variant="outlined" className="margin-right">
                    <InputLabel id="tax-benefits-label">Tax Benefits</InputLabel>
                    <Select
                        labelId="tax-benefits-label"
                        id="taxBenefits"
                        name="taxBenefits"
                        value={props.submissionDetails.taxBenefits}
                        onChange={handleChange}
                        label="Tax Benefits"
                    >
                        <ListItem value="EIS">EIS</ListItem>
                        <ListItem value="SEIS">SEIS</ListItem>
                        <ListItem value="both">Both</ListItem>
                        <ListItem value="neither">Neither</ListItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="amountRaising">Amount Raising</InputLabel>
                    <OutlinedInput
                        id="amountRaising"
                        name="amountRaising"
                        value={props.submissionDetails.amountRaising}
                        onChange={handleChange}
                        inputComponent={NumberFormatCustom}
                        labelWidth={115}
                    />
                </FormControl>
                <FormControl variant="outlined" className="margin-right">
                    <InputLabel htmlFor="currentCommitments">Current Commitments</InputLabel>
                    <OutlinedInput
                        id="currentCommitments"
                        name="currentCommitments"
                        value={props.submissionDetails.currentCommitments}
                        onChange={handleChange}
                        inputComponent={NumberFormatCustom}
                        labelWidth={160}
                    />
                </FormControl>
                <FormControl variant="outlined" >
                    <InputLabel id="market-size-label">Market Size</InputLabel>
                    <Select
                        labelId="market-size-label"
                        id="marketSize"
                        name="marketSize"
                        value={props.submissionDetails.marketSize}
                        onChange={handleChange}
                        label="Market Size"
                    >
                        <ListItem value="1">£1-£10m</ListItem>
                        <ListItem value="2">£10-£25m</ListItem>
                        <ListItem value="3">£25-£50m</ListItem>
                        <ListItem value="4">£50m-£100m</ListItem>
                        <ListItem value="5">£100m-£250m</ListItem>
                        <ListItem value="6">£250m-£500m</ListItem>
                        <ListItem value="7">£500m-£1bn</ListItem>
                        <ListItem value="8">£1bn-£5bn</ListItem>
                        <ListItem value="9">£5bn+</ListItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className="margin-right">
                    <InputLabel htmlFor="previousRoundRaise">Funding raised in previous round</InputLabel>
                    <OutlinedInput
                        id="previousRoundRaise"
                        name="previousRoundRaise"
                        value={props.submissionDetails.previousRoundRaise}
                        onChange={handleChange}
                        inputComponent={NumberFormatCustom}
                        labelWidth={240}
                    />
                </FormControl>
                <FormControl variant="outlined" >
                    <InputLabel htmlFor="previousValuation">Previous Valuation</InputLabel>
                    <OutlinedInput
                        id="previousValuation"
                        name="previousValuation"
                        value={props.submissionDetails.previousValuation}
                        onChange={handleChange}
                        inputComponent={NumberFormatCustom}
                        labelWidth={140}
                    />
                </FormControl>
            </div>
        </section>
    )

}

export default FundingDetails