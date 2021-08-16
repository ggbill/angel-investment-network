import './submission.scss'
import React, { useState, useEffect } from 'react'
import BasicDetails from './BasicDetails'
import FundingDetails from './FundingDetails'
import TeamDetails from './TeamDetails'
import RiskDetails from './RiskDetails'
import ForecastDetails from './ForecastDetails'
import ExtrasDetails from './ExtrasDetails'
import Uploads from './Uploads'
// import useFetch from '../../hooks/useFetch'
import useSubmissionDetails from '../../hooks/useSubmissionDetails'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'


const Submission = () => {

    const [stepNumber, setStepNumber] = useState<number>(1)

    const { submissionDetails, setSubmissionDetails, prepopulateValues, clearValues, submitData } = useSubmissionDetails()
    const totalSteps = 8
    // const airtableApi = useFetch("submissions")

    const { search } = useLocation();
    const { owner } = queryString.parse(search)

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

    useEffect(() => {
        console.log(owner)
        setSubmissionDetails({ ...submissionDetails, owner: owner })
        // eslint-disable-next-line react-hooks/exhaustive-deps  
    }, []);

    return (
        <div className="submission-page">
            <div className="content">
                <section className="current-step-section">
                    {stepNumber === 1 &&
                        <>
                            <BasicDetails
                                stepNumber={stepNumber}
                                setSubmissionDetails={setSubmissionDetails}
                                submissionDetails={submissionDetails}
                                increaseStepNumber={increaseStepNumber}
                                totalSteps={totalSteps}
                            />
                            <button onClick={() => prepopulateValues()}>populate values</button>
                        </>
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
                        <Uploads
                            stepNumber={stepNumber}
                            setSubmissionDetails={setSubmissionDetails}
                            submissionDetails={submissionDetails}
                            increaseStepNumber={increaseStepNumber}
                            decreaseStepNumber={decreaseStepNumber}
                            totalSteps={totalSteps}
                        />
                    }
                    {stepNumber === 7 &&
                        <ExtrasDetails
                            stepNumber={stepNumber}
                            setStepNumber={setStepNumber}
                            setSubmissionDetails={setSubmissionDetails}
                            submissionDetails={submissionDetails}
                            increaseStepNumber={increaseStepNumber}
                            decreaseStepNumber={decreaseStepNumber}
                            totalSteps={totalSteps}
                            submitData={submitData}
                            clearValues={clearValues}
                        />
                    }

                </section>
            </div>
        </div>
    )
}


export default Submission