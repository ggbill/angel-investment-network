import './submission.scss'
import React, { useState, useRef } from 'react'
import MenuBar from '../shared/MenuBar'
import BasicDetails from './BasicDetails'
import { ExitToAppTwoTone } from '@material-ui/icons'

const Submission = () => {

    const [submissionDetails, setSubmissionDetails] = useState<App.SubmissionDetails>({
        companyName: "",
        email: "",
        foundedDate: new Date,
        officePostCode: "",
        businessType: "",
        website: "",
        sector: ""
    })
    const [stepNumber, setStepNumber] = useState<number>(1)
    const totalSteps = 6

    const increaseStepNumber = () => {
        setStepNumber(stepNumber + 1)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const decreaseStepNumber = () => {
        setStepNumber(stepNumber - 1)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className="submission-page">
            <MenuBar />
            <div className="content">
                <section className="current-step-section">
                    {stepNumber === 1 &&
                        <BasicDetails
                            stepNumber={stepNumber}
                            setSubmissionDetails={setSubmissionDetails}
                            submissionDetails={ submissionDetails }
                            increaseStepNumber={increaseStepNumber}
                            totalSteps={totalSteps}
                        />
                    }
                    <div className="button-wrapper">
                        <button className="ain-button" onClick={decreaseStepNumber}>Back</button>
                        <button className="ain-button next" onClick={increaseStepNumber}>Next</button>
                    </div>
                </section>

            </div>

        </div>
    )
}


export default Submission