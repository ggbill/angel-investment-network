import './extrasDetails.scss'
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { CircularProgress, FormControl, FormHelperText, InputLabel, ListItem, Select } from '@material-ui/core';
import NotificationDialog from '../shared/NotificationDialog';

interface InputProps {
    stepNumber: number
    setStepNumber: (number: number) => void
    totalSteps: number
    submissionDetails: App.SubmissionDetails
    setSubmissionDetails: (submissionDetails: App.SubmissionDetails) => void
    increaseStepNumber: () => void
    decreaseStepNumber: () => void
    submitData: () => Promise<any>
    clearValues: () => void
}

const ExtrasDetails = (props: InputProps) => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isNotificationDialogOpen, setIsNotificationDialogOpen] = useState<boolean>(false)
    const [dialogType, setDialogType] = useState<string>("")
    const [dialogTitle, setDialogTitle] = useState<string>("")
    const [dialogBody, setDialogBody] = useState<string>("")

    const [validationObject, setValidationObject] = useState<App.ValidationObject[]>([
        { name: "isMovingOffice", isValid: true, helperText: "" },
        { name: "isLawyerInPlace", isValid: true, helperText: "" },
        { name: "isLookingForChairman", isValid: true, helperText: "" },
        { name: "isMissionDriven", isValid: true, helperText: "" },
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

    const handleErrorDialogOpen = (title: string, body: string) => {
        setDialogType("error")
        setIsNotificationDialogOpen(true)
        setDialogTitle(title)
        setDialogBody(body)
    };

    const handleSuccessDialogOpen = (title: string, body: string) => {
        setDialogType("success")
        setIsNotificationDialogOpen(true)
        setDialogTitle(title)
        setDialogBody(body)
    };

    const handleClose = () => {
        if (dialogType === "success"){
            props.setStepNumber(1)
            props.clearValues()
        }
        setIsNotificationDialogOpen(false)
    }

    const checkValuesComplete = (): boolean => {
        if (!props.submissionDetails.isMovingOffice ||
        !props.submissionDetails.isLawyerInPlace ||
        !props.submissionDetails.isLookingForChairman ||
        !props.submissionDetails.isMissionDriven 
        ) {
            return (false)
        } else {
            return (true)
        }
    }

    const submitData = () => {
        setIsLoading(true)
        props.submitData().then(result => {
            if(result.isSuccess){
                handleSuccessDialogOpen("Success", "Thank you for submitting your raise, we will review and come back to you as soon as possible.")
                setIsLoading(false)
            }else{
                handleErrorDialogOpen("Error", result.error)
                setIsLoading(false)
            }
        })   
    }

    return (
        <section className="extras-details-section">
            <div className="title-wrapper">
                <span className="step-counter">(Step {props.stepNumber} / {props.totalSteps - 1}) </span>
                <span className="title">Extras Details. 🎉</span>
            </div>

            <div className="intro-text">
                <span>Any additional extras we can help you with?</span>
            </div>

            <div className="input-wrapper">
                <FormControl variant="outlined" className="margin-right" required>
                    <InputLabel id="moving-office-label">Will you be moving office in the next 12 months?</InputLabel>
                    <Select
                        labelId="moving-office-label"
                        id="isMovingOffice"
                        name="isMovingOffice"
                        value={props.submissionDetails.isMovingOffice}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!validationObject[0].isValid}
                        label="Will you be moving office in the next 12 months?"
                    >
                        <ListItem value="false">No</ListItem>
                        <ListItem value="true">Yes</ListItem>
                    </Select>
                    {validationObject[0].helperText && <FormHelperText style={{ "color": "red" }}>{validationObject[0].helperText}</FormHelperText>}
                </FormControl>
                <FormControl variant="outlined" className="" required>
                    <InputLabel id="lawyer-label">Do you have a lawyer or termsheet in place?</InputLabel>
                    <Select
                        labelId="lawyer-label"
                        id="isLawyerInPlace"
                        name="isLawyerInPlace"
                        value={props.submissionDetails.isLawyerInPlace}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!validationObject[1].isValid}
                        label="Do you have a lawyer or termsheet in place?"
                    >
                        <ListItem value="false">No</ListItem>
                        <ListItem value="true">Yes</ListItem>
                    </Select>
                    {validationObject[1].helperText && <FormHelperText style={{ "color": "red" }}>{validationObject[1].helperText}</FormHelperText>}
                </FormControl>
                <FormControl variant="outlined" className="margin-right" required>
                    <InputLabel id="chairman-label">Are you looking for a chairman?</InputLabel>
                    <Select
                        labelId="chairman-label"
                        id="isLookingForChairman"
                        name="isLookingForChairman"
                        value={props.submissionDetails.isLookingForChairman}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!validationObject[2].isValid}
                        label="Are you looking for a chairman?"
                    >
                        <ListItem value="false">No</ListItem>
                        <ListItem value="true">Yes</ListItem>
                    </Select>
                    {validationObject[2].helperText && <FormHelperText style={{ "color": "red" }}>{validationObject[2].helperText}</FormHelperText>}
                </FormControl>
                <TextField
                    id="extraHelp"
                    name="extraHelp"
                    className=""
                    label="Is there anything outside of fundraising we can help you with?"
                    variant="outlined"
                    value={props.submissionDetails.extraHelp}
                    onChange={handleChange}
                />
                <FormControl variant="outlined" className="margin-right" required>
                    <InputLabel id="mission-label">Are you a mission driven company?</InputLabel>
                    <Select
                        labelId="mission-label"
                        id="isMissionDriven"
                        name="isMissionDriven"
                        value={props.submissionDetails.isMissionDriven}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={!validationObject[3].isValid}
                        label="Are you a mission driven company?"

                    >
                        <ListItem value="false">No</ListItem>
                        <ListItem value="true">Yes</ListItem>
                    </Select>
                    {validationObject[3].helperText && <FormHelperText style={{ "color": "red" }}>{validationObject[3].helperText}</FormHelperText>}
                </FormControl>
            </div>
            <div className="button-wrapper">
                <button className="ain-button back" onClick={props.decreaseStepNumber}>Back</button>
                <button className="ain-button next" disabled={isLoading || !checkValuesComplete()} onClick={submitData}>
                    {isLoading ? <CircularProgress /> : <span>Submit</span> }
                </button>
            </div>

            <NotificationDialog
                isDialogOpen={isNotificationDialogOpen}
                handleClose={handleClose}
                type={dialogType}
                title={dialogTitle}
                body={dialogBody}
            />
        </section>
    )

}

export default ExtrasDetails