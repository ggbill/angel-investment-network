import './extrasDetails.scss'
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { CircularProgress, FormControl, InputLabel, ListItem, Select } from '@material-ui/core';
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

    const handleChange = (event) => {
        const { name, value } = event.target
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

    const submitData = () => {
        setIsLoading(true)
        props.submitData().then(result => {
            if(result.isSuccess){
                handleSuccessDialogOpen("Success", "Your submission was successful.")
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
                        label="Will you be moving office in the next 12 months?"
                    >
                        <ListItem value="false">No</ListItem>
                        <ListItem value="true">Yes</ListItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className="" required>
                    <InputLabel id="lawyer-label">Do you have a lawyer or termsheet in place?</InputLabel>
                    <Select
                        labelId="lawyer-label"
                        id="isLawyerInPlace"
                        name="isLawyerInPlace"
                        value={props.submissionDetails.isLawyerInPlace}
                        onChange={handleChange}
                        label="Do you have a lawyer or termsheet in place?"
                    >
                        <ListItem value="false">No</ListItem>
                        <ListItem value="true">Yes</ListItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className="margin-right" required>
                    <InputLabel id="chairman-label">Are you looking for a chairman?</InputLabel>
                    <Select
                        labelId="chairman-label"
                        id="isLookingForChairman"
                        name="isLookingForChairman"
                        value={props.submissionDetails.isLookingForChairman}
                        onChange={handleChange}
                        label="Are you looking for a chairman?"
                    >
                        <ListItem value="false">No</ListItem>
                        <ListItem value="true">Yes</ListItem>
                    </Select>
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
                        label="Are you a mission driven company?"

                    >
                        <ListItem value="false">No</ListItem>
                        <ListItem value="true">Yes</ListItem>
                    </Select>
                </FormControl>
            </div>
            <div className="button-wrapper">
                <button className="ain-button back" onClick={props.decreaseStepNumber}>Back</button>
                <button className="ain-button next" disabled={isLoading} onClick={submitData}>
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