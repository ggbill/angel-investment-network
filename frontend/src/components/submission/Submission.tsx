import './submission.scss'
import React, { useState, useRef } from 'react'
import MenuBar from '../shared/MenuBar'
import BasicDetails from './BasicDetails'
import FundingDetails from './FundingDetails'
import TeamDetails from './TeamDetails'
import RiskDetails from './RiskDetails'
import ForecastDetails from './ForecastDetails'
import ExtrasDetails from './ExtrasDetails'
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    validOutline: {
        borderWidth: "1px",
        borderColor: `#2258FF !important`
    },
    errorOutline: {
        borderWidth: "1px",
        borderColor: `red !important`
    }
}));

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
        currentCommitments: null,
        marketSize: "",
        previousRoundRaise: null,
        previousValuation: null,
        foundersAverageSalary: null,
        teamExperience: "",
        isPreviousExits: null,
        foundersCount: null,
        employeesCount: null,
        twelveMonthSalaryForecast: null,
        twelveMonthHiresForecast: null,
        keyPositionsToHire: "",
        cashRemaining: null,
        monthsOfCashLeft: null,
        monthlyBurnRate: null,
        companyDebt: null,
        cashRequiredToFinish: null,
        monthsUntilRevenue: null,
        startOfFinancialYear: null,
        monthlyRevenue: null,
        twelveMonthProjectedRevenue: null,
        isMovingOffice: null,
        isLawerInPlace: null,
        isLookingForChairman: null,
        extraHelp: "",
        isMissionDriven: null
    })
    const [stepNumber, setStepNumber] = useState<number>(1)
    const totalSteps = 7

    const history = useHistory();

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
                            submissionDetails={submissionDetails}
                            increaseStepNumber={increaseStepNumber}
                            totalSteps={totalSteps}
                        />
                    }
                    {stepNumber === 2 &&
                        <FundingDetails
                            stepNumber={stepNumber}
                            setSubmissionDetails={setSubmissionDetails}
                            submissionDetails={submissionDetails}
                            increaseStepNumber={increaseStepNumber}
                            decreaseStepNumber={decreaseStepNumber}
                            totalSteps={totalSteps}
                        />
                    }
                    {stepNumber === 3 &&
                        <TeamDetails
                            stepNumber={stepNumber}
                            setSubmissionDetails={setSubmissionDetails}
                            submissionDetails={submissionDetails}
                            increaseStepNumber={increaseStepNumber}
                            decreaseStepNumber={decreaseStepNumber}
                            totalSteps={totalSteps}
                        />
                    }
                    {stepNumber === 4 &&
                        <RiskDetails
                            stepNumber={stepNumber}
                            setSubmissionDetails={setSubmissionDetails}
                            submissionDetails={submissionDetails}
                            increaseStepNumber={increaseStepNumber}
                            decreaseStepNumber={decreaseStepNumber}
                            totalSteps={totalSteps}
                        />
                    }
                    {stepNumber === 5 &&
                        <ForecastDetails
                            stepNumber={stepNumber}
                            setSubmissionDetails={setSubmissionDetails}
                            submissionDetails={submissionDetails}
                            increaseStepNumber={increaseStepNumber}
                            decreaseStepNumber={decreaseStepNumber}
                            totalSteps={totalSteps}
                        />
                    }
                    {stepNumber === 6 &&
                        <ExtrasDetails
                            stepNumber={stepNumber}
                            setSubmissionDetails={setSubmissionDetails}
                            submissionDetails={submissionDetails}
                            increaseStepNumber={increaseStepNumber}
                            decreaseStepNumber={decreaseStepNumber}
                            totalSteps={totalSteps}
                        />
                    }
                    {/* <div className="button-wrapper">
                        <button className="ain-button back" onClick={stepNumber === 0 ? history.push('/') : decreaseStepNumber}>Back</button>
                        {stepNumber === totalSteps - 1 ?
                            <button className="ain-button next">Submit</button> :
                            <button className="ain-button next" onClick={increaseStepNumber}>Next</button>
                        }
                    </div> */}

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