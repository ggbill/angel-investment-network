import './submission.scss'
import React, { useState, useRef } from 'react'
import MenuBar from '../shared/MenuBar'
import BasicDetails from './BasicDetails'
import FundingDetails from './FundingDetails'
import TeamDetails from './TeamDetails'


const Submission = () => {

    const [submissionDetails, setSubmissionDetails] = useState<App.SubmissionDetails>({
        companyName: "",
        email: "",
        foundedDate: null,
        officePostCode: "",
        businessType: "",
        website: "",
        sector: "",
        stage: "",
        preMoneyValuation: null,
        taxBenefits: "",
        amountRaising: null,
        currentCommitments:null,
        marketSize: "",
        previousRoundRaise: null,
        previousValuation: null,
        foundersAverageSalary: null,
        teamExperience: "",
        isPreviousExits: false,
        foundersCount: null,
        employeesCount: null,
        twelveMonthSalaryForecast: null,
        twelveMonthHiresForecast: null,
        keyPositionsToHire: ""
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
                    {stepNumber === 2 &&
                        <FundingDetails
                            stepNumber={stepNumber}
                            setSubmissionDetails={setSubmissionDetails}
                            submissionDetails={ submissionDetails }
                            increaseStepNumber={increaseStepNumber}
                            decreaseStepNumber={decreaseStepNumber}
                            totalSteps={totalSteps}
                        />
                    }
                    {stepNumber === 3 &&
                        <TeamDetails
                            stepNumber={stepNumber}
                            setSubmissionDetails={setSubmissionDetails}
                            submissionDetails={ submissionDetails }
                            increaseStepNumber={increaseStepNumber}
                            decreaseStepNumber={decreaseStepNumber}
                            totalSteps={totalSteps}
                        />
                    }
                    <div className="button-wrapper">
                        <button className="ain-button" onClick={decreaseStepNumber}>Back</button>
                        <button className="ain-button next" onClick={increaseStepNumber}>Next</button>
                    </div>
                    
                    {/* <p>{submissionDetails.businessType}</p>
                    <p>{submissionDetails.companyName}</p>
                    <p>{submissionDetails.email}</p>
                    <p>{String(submissionDetails.foundedDate)}</p>
                    <p>{submissionDetails.officePostCode}</p>
                    <p>{submissionDetails.sector}</p>
                    <p>{submissionDetails.website}</p> */}



                </section>

            </div>

        </div>
    )
}


export default Submission