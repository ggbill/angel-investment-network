import './basicDetails.scss'
import React, { useState, useRef } from 'react'
import TextField from '@material-ui/core/TextField'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { FormControl, FormHelperText, InputLabel, ListItem, Select } from '@material-ui/core';



interface InputProps {
    stepNumber: number,
    totalSteps: number,
    submissionDetails: App.SubmissionDetails,
    setSubmissionDetails: (submissionDetails: App.SubmissionDetails) => void,
    increaseStepNumber: () => void
}

const BasicDetails = (props: InputProps) => {

    const [validationObject, setValidationObject] = useState<App.ValidationObject[]>([
        { name: "companyName", isValid: true, helperText: "" },
        { name: "email", isValid: true, helperText: "" },
        { name: "foundedDate", isValid: true, helperText: "" },
        { name: "officePostCode", isValid: true, helperText: "" },
        { name: "businessType", isValid: true, helperText: "" },
        { name: "website", isValid: true, helperText: "" },
        { name: "sector", isValid: true, helperText: "" },
        // { name: "logoFile", isValid: true, helperText: "" },
    ])

    const logoFile: any = useRef(null)

    const handleChange = (event) => {
        const { name, value } = event.target
        props.setSubmissionDetails({ ...props.submissionDetails, [name]: value })
    }

    const handleBlur = (event) => {
        const { name, value } = event.target
        let tempValidationObject = [...validationObject]

        if (value) {
            tempValidationObject.forEach(element => {

                // if (name === element.name) {
                //     element.isValid = true
                //     element.helperText = ""
                // }

                if (name === element.name) {
                    if (name === "email") {
                        if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
                            element.isValid = true
                            element.helperText = ""
                        } else {
                            element.isValid = false
                            element.helperText = "Invalid email address."
                        }
                    } else {
                        element.isValid = true
                        element.helperText = ""
                    }
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

    const handleFoundedDateChange = (date) => {
        let tempValidationObject = [...validationObject]

        if (date) {
            tempValidationObject.forEach(element => {
                if (element.name === "foundedDate") {
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
                if ("foundedDate" === element.name) {
                    element.isValid = false
                    element.helperText = "Please fill me in!"
                }
            });
        }
        setValidationObject(tempValidationObject)
        props.setSubmissionDetails({ ...props.submissionDetails, foundedDate: date })
    };

    const checkValuesComplete = (): boolean => {
        let isValuesValid = true
        let isAllValuesComplete = false
        validationObject.forEach(element => {
            if (!element.isValid) {
                isValuesValid = false
            }
        });

        if (!props.submissionDetails.companyName ||
            !props.submissionDetails.email ||
            !props.submissionDetails.foundedDate ||
            !props.submissionDetails.officePostCode ||
            !props.submissionDetails.businessType ||
            !props.submissionDetails.website ||
            !props.submissionDetails.sector) {
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

    // const checkValuesComplete = (): boolean => {
    //     if (!props.submissionDetails.companyName ||
    //         !props.submissionDetails.email ||
    //         !props.submissionDetails.foundedDate ||
    //         !props.submissionDetails.officePostCode ||
    //         !props.submissionDetails.businessType ||
    //         !props.submissionDetails.website ||
    //         !props.submissionDetails.sector ||
    //         !props.submissionDetails.logoFile ||
    //         !props.submissionDetails.logoFile.name) {
    //         return (false)
    //     } else {
    //         return (true)
    //     }
    // }

    return (
        <section className="basic-details-section">
            <div className="title-wrapper">
                <span className="step-counter">(Step {props.stepNumber} / {props.totalSteps - 1}) </span>
                <span className="title">The basics. 💻</span>
                {/* <span className="title">Owner: {JSON.stringify(owner)}</span> */}
            </div>

            <div className="intro-text">
                <span>Let's get to know the basics about you.</span>
            </div>


            <div className="input-wrapper">
                <div className="form-control-wrapper">
                    <TextField
                        id="companyName"
                        name="companyName"
                        className="margin-right"
                        label="Company Name"
                        variant="outlined"
                        value={props.submissionDetails.companyName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!validationObject[0].isValid}
                        helperText={validationObject[0].helperText}
                        required
                    />
                    <div className="help-icon-wrapper"></div>
                </div>
                <div className="form-control-wrapper">
                    <TextField
                        id="email"
                        name="email"
                        label="Email Address"
                        variant="outlined"
                        value={props.submissionDetails.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!validationObject[1].isValid}
                        helperText={validationObject[1].helperText}
                        required
                    />
                    <div className="help-icon-wrapper"></div>
                </div>
                <div className="form-control-wrapper">
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
                            // onBlur={handleBlur}
                            required
                            autoOk={true}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            error={!validationObject[2].isValid}
                            helperText={validationObject[2].helperText}
                        />
                    </MuiPickersUtilsProvider>
                    <div className="help-icon-wrapper"></div>
                </div>

                <div className="form-control-wrapper">
                    <TextField
                        id="officePostCode"
                        name="officePostCode"
                        className=""
                        label="Office Post Code"
                        variant="outlined"
                        value={props.submissionDetails.officePostCode}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!validationObject[3].isValid}
                        helperText={validationObject[3].helperText}
                        required
                    />
                    <div className="help-icon-wrapper"></div>
                </div>
                <div className="form-control-wrapper">
                    <FormControl variant="outlined" className="margin-right" required>
                        <InputLabel id="business-type-label">Business Type</InputLabel>
                        <Select
                            labelId="business-type-label"
                            id="businessType"
                            name="businessType"
                            value={props.submissionDetails.businessType}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!validationObject[4].isValid}
                            label="Business Type *"
                        >
                            <ListItem value={"B2B"}>B2B</ListItem>
                            <ListItem value={"B2C"}>B2C</ListItem>
                            <ListItem value={"Both"}>Both</ListItem>
                        </Select>
                        {validationObject[4].helperText && <FormHelperText style={{ "color": "red" }}>{validationObject[4].helperText}</FormHelperText>}
                    </FormControl>
                    <div className="help-icon-wrapper"></div>
                </div>
                <div className="form-control-wrapper">
                    <TextField
                        id="website"
                        name="website"
                        className=""
                        label="Company Website"
                        variant="outlined"
                        value={props.submissionDetails.website}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!validationObject[5].isValid}
                        helperText={validationObject[5].helperText}
                        required
                    />
                    <div className="help-icon-wrapper"></div>
                </div>
                <div className="form-control-wrapper">
                    <FormControl variant="outlined" className="margin-right" required>
                        <InputLabel id="sector-label">Sector</InputLabel>
                        <Select
                            labelId="sector-label"
                            id="sector"
                            name="sector"
                            value={props.submissionDetails.sector}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!validationObject[6].isValid}
                            label="Sector *"
                        >
                            <ListItem value="Agriculture">Agriculture</ListItem>
                            <ListItem value="Business Services">Business Services</ListItem>
                            <ListItem value="Education &amp; Training">Education &amp; Training</ListItem>
                            <ListItem value="Energy &amp; Natural Resources">Energy &amp; Natural Resources</ListItem>
                            <ListItem value="Entertainment &amp; Leisure">Entertainment &amp; Leisure</ListItem>
                            <ListItem value="Fashion &amp; Beauty">Fashion &amp; Beauty</ListItem>
                            <ListItem value="Finance">Finance</ListItem>
                            <ListItem value="Food &amp; Beverage">Food &amp; Beverage</ListItem>
                            <ListItem value="Hospitality, Restaurants &amp; Bars">Hospitality, Restaurants &amp; Bars</ListItem>
                            <ListItem value="Manufacturing &amp; Engineering">Manufacturing &amp; Engineering</ListItem>
                            <ListItem value="Media">Media</ListItem>
                            <ListItem value="Medical &amp; Sciences">Medical &amp; Sciences</ListItem>
                            <ListItem value="Personal Services">Personal Services</ListItem>
                            <ListItem value="Products &amp; Inventions">Products &amp; Inventions</ListItem>
                            <ListItem value="Property">Property</ListItem>
                            <ListItem value="Retail">Retail</ListItem>
                            <ListItem value="Sales &amp; Marketing">Sales &amp; Marketing</ListItem>
                            <ListItem value="Software">Software</ListItem>
                            <ListItem value="Technology">Technology</ListItem>
                            <ListItem value="Transportation">Transportation</ListItem>
                        </Select>
                        {validationObject[6].helperText && <FormHelperText style={{ "color": "red" }}>{validationObject[6].helperText}</FormHelperText>}
                    </FormControl>
                    <div className="help-icon-wrapper"></div>
                </div>
                {/* <div className="form-control-wrapper"> */}
                <div className="field-wrapper form-control-wrapper" onClick={() => logoFile.current.click()}>
                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        type="file"
                        onChange={(event) => {
                            if (!event.target.files) return
                            // setReviewDetails({ ...reviewDetails, pitchDeckFile: event.target.files[0] })
                            props.setSubmissionDetails({ ...props.submissionDetails, logoFile: event.target.files[0] })
                        }}
                        ref={logoFile}
                    />

                    <TextField
                        label="Your Logo"
                        className={props.submissionDetails.logoFile && props.submissionDetails.logoFile.name ? "file-upload file-selected" : "file-upload"}
                        // className="file-upload"
                        variant="outlined"
                        defaultValue="Select a File"
                        value={props.submissionDetails.logoFile ? props.submissionDetails.logoFile.name : "Select a File"}
                        disabled
                        // required
                        fullWidth
                    // error={!validationObject[7].isValid}
                    // helperText={validationObject[7].helperText}
                    />
                    <div className="help-icon-wrapper"></div>
                </div>

                {/* </div> */}
            </div>

            {/* <p>companyName: {props.submissionDetails.companyName}</p>
            <p>email: {props.submissionDetails.email}</p>
            <p>foundedDate: {String(props.submissionDetails.foundedDate)}</p>
            <p>post code: {props.submissionDetails.officePostCode}</p>
            <p>bus type: {props.submissionDetails.businessType}</p>
            <p>website: {props.submissionDetails.website}</p>
            <p>sector: {props.submissionDetails.sector}</p> */}

            <div className="button-wrapper">
                <button className="ain-button next" disabled={!checkValuesComplete()} onClick={() => props.increaseStepNumber()}>Next</button>
            </div>
        </section>
    )

}

export default BasicDetails