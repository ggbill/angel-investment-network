import './basicDetails.scss'
import React from 'react'
import TextField from '@material-ui/core/TextField'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { FormControl, InputLabel, ListItem, Select } from '@material-ui/core';

interface InputProps {
    stepNumber: number,
    totalSteps: number,
    submissionDetails: App.SubmissionDetails,
    setSubmissionDetails: (submissionDetails: App.SubmissionDetails) => void,
    increaseStepNumber: () => void
}

const BasicDetails = (props: InputProps) => {

    const handleChange = (event) => {
        const { name, value } = event.target
        props.setSubmissionDetails({ ...props.submissionDetails, [name]: value })
    }

    const handleFoundedDateChange = (date) => {
        props.setSubmissionDetails({ ...props.submissionDetails, foundedDate: date })
    };

    return (
        <section className="basic-details-section">
            <div className="title-wrapper">
                <span className="step-counter">(Step {props.stepNumber} / {props.totalSteps - 1}) </span>
                <span className="title">The basics. 💻</span>
            </div>

            <div className="intro-text">
            <span>Let's get to know the basics about you.</span>
            </div>


            <div className="input-wrapper">
                <TextField
                    id="companyName"
                    name="companyName"
                    className="margin-right"
                    label="Company Name"
                    // InputProps={validationObject[0].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                    variant="outlined"
                    value={props.submissionDetails.companyName}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    // error={!validationObject[0].isValid}
                    // error={true}
                    // helperText="messed something up"
                    required
                />
                <TextField
                    id="email"
                    name="email"
                    label="Email Address"
                    // InputProps={validationObject[1].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                    variant="outlined"
                    value={props.submissionDetails.email}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    // error={!validationObject[1].isValid}
                    // helperText="&nbsp;"
                />
                <>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <KeyboardDatePicker
                            // disableToolbar
                            name="foundedDate"
                            id="foundedDate"
                            variant="inline"
                            inputVariant="outlined"
                            format="DD/MM/yyyy"
                            className="margin-right"
                            label="When was your company founded"
                            value={props.submissionDetails.foundedDate}
                            onChange={handleFoundedDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            // helperText="&nbsp;"
                        />
                    </MuiPickersUtilsProvider>
                </>


                <TextField
                    id="officePostCode"
                    name="officePostCode"
                    className=""
                    label="Office Post Code"
                    // InputProps={validationObject[3].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                    variant="outlined"
                    value={props.submissionDetails.officePostCode}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    // error={!validationObject[3].isValid}
                    // helperText="&nbsp;"
                />
                <FormControl variant="outlined" className="margin-right">
                    <InputLabel id="business-type-label">Business Type</InputLabel>
                    <Select
                        labelId="business-type-label"
                        id="businessType"
                        name="businessType"
                        value={props.submissionDetails.businessType}
                        onChange={handleChange}
                        label="Business Type"

                    >
                        <ListItem value="">
                            <em>None</em>
                        </ListItem>
                        <ListItem value={"B2B"}>B2B</ListItem>
                        <ListItem value={"B2C"}>B2C</ListItem>
                        <ListItem value={"Both"}>Both</ListItem>
                    </Select>
                </FormControl>
                <TextField
                    id="website"
                    name="website"
                    // className="margin-right"
                    label="Company Website"
                    // InputProps={validationObject[3].isValid ? { classes: { notchedOutline: classes.validOutline } } : { classes: { notchedOutline: classes.errorOutline } }}
                    variant="outlined"
                    value={props.submissionDetails.website}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    // error={!validationObject[3].isValid}
                    // helperText="&nbsp;"
                />
                <FormControl variant="outlined" className="margin-right">
                    <InputLabel id="sector-label">Sector</InputLabel>
                    <Select
                        labelId="sector-label"
                        id="sector"
                        name="sector"
                        value={props.submissionDetails.sector}
                        onChange={handleChange}
                        label="Sector"

                    >
                        <ListItem value="0">
                            <em>None</em>
                        </ListItem>
                        <ListItem value="5">Agriculture</ListItem>
                        <ListItem value="12">Business Services</ListItem>
                        <ListItem value="1">Education &amp; Training</ListItem>
                        <ListItem value="15">Energy &amp; Natural Resources</ListItem>
                        <ListItem value="28">Entertainment &amp; Leisure</ListItem>
                        <ListItem value="21">Fashion &amp; Beauty</ListItem>
                        <ListItem value="13">Finance</ListItem>
                        <ListItem value="23">Food &amp; Beverage</ListItem>
                        <ListItem value="17">Hospitality, Restaurants &amp; Bars</ListItem>
                        <ListItem value="14">Manufacturing &amp; Engineering</ListItem>
                        <ListItem value="11">Media</ListItem>
                        <ListItem value="2">Medical &amp; Sciences</ListItem>
                        <ListItem value="29">Personal Services</ListItem>
                        <ListItem value="18">Products &amp; Inventions</ListItem>
                        <ListItem value="16">Property </ListItem>
                        <ListItem value="19">Retail</ListItem>
                        <ListItem value="20">Sales &amp; Marketing</ListItem>
                        <ListItem value="8">Software</ListItem>
                        <ListItem value="22">Technology</ListItem>
                        <ListItem value="4">Transportation</ListItem>
                    </Select>
                </FormControl>
            </div>
        </section>
    )

}

export default BasicDetails