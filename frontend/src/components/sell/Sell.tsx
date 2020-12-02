import './sell.scss'
import React, { useState, useEffect } from 'react'
import MenuBar from '../shared/MenuBar'
import UkMap from '../shared/ClientLocation'
import BasicDetailInputs from '../shared/BasicDetailInputs'
import BusinessType from '../shared/BusinessType'
import Timescales from '../shared/Timescales'
import CallBooking from '../shared/CallBooking'

interface BasicDetails {
    name: string,
    companyName: string,
    telephone: string,
    email: string
}

interface BusinessTypeSelection {
    id: number,
    label: string,
    description: string,
    imageUrl: string,
    isSelected: boolean
}

const Sell = () => {

    const [stepNumber, setStepNumber] = useState<number>(1)
    const totalSteps = 6
    const [basicDetails, setBasicDetails] = useState<BasicDetails>({ name: "", companyName: "", telephone: "", email: "" })
    const [selectedLocations, setSelectedLocations] = useState<string[]>([])
    const [isClientsNationwide, setIsClientsNationwide] = useState<boolean>(false)
    const [specificLocationRequirements, setSpecificLocationRequirements] = useState<string>("")
    const [assetsUnderManagement, setAssetsUnderManagement] = useState<BusinessTypeSelection[]>([
        { id: 0, label: '£0 - 25 million', description: "", imageUrl: "", isSelected: false },
        { id: 1, label: '£25 - 50 million', description: "", imageUrl: "", isSelected: false },
        { id: 2, label: '£50 million +', description: "", imageUrl: "", isSelected: false },
        { id: 3, label: "Don't mind / Not sure", description: "", imageUrl: "", isSelected: false },
    ])
    const [clients, setClients] = useState<BusinessTypeSelection[]>([
        { id: 0, label: '0 - 200', description: "", imageUrl: "", isSelected: false },
        { id: 1, label: '200 - 500', description: "", imageUrl: "", isSelected: false },
        { id: 2, label: '500+', description: "", imageUrl: "", isSelected: false },
        { id: 3, label: "Don't mind / Not sure", description: "", imageUrl: "", isSelected: false },
    ])
    const [advisers, setAdvisers] = useState<BusinessTypeSelection[]>([
        { id: 0, label: '1', description: "", imageUrl: "", isSelected: false },
        { id: 1, label: '2 - 10', description: "", imageUrl: "", isSelected: false },
        { id: 2, label: '10 +', description: "", imageUrl: "", isSelected: false },
        { id: 3, label: "Don't mind / Not sure", description: "", imageUrl: "", isSelected: false },
    ])
    const [timescale, setTimescale] = useState<BusinessTypeSelection[]>([
        { id: 0, label: 'ASAP', description: "I want this done yesterday.", imageUrl: "", isSelected: false },
        { id: 1, label: 'Within 12 months', description: "Not urgent but keen to get a wiggle on.", imageUrl: "", isSelected: false },
        { id: 2, label: '12 months +', description: "Easly like Sunday morning.", imageUrl: "", isSelected: false }
    ])

    const increaseStepNumber = () => {
        setStepNumber(stepNumber + 1)
    }

    const decreaseStepNumber = () => {
        setStepNumber(stepNumber - 1)
    }
    return (
        <div className="sell-page">
            <MenuBar page="sell" />
            <section className="header-section seller">
                <div className="content">
                <div className="title-wrapper">
                        <span className="title">I'm Sellin'</span>
                        <span className="sub-title">Some subtitle text</span>
                    </div>
                </div>
            </section>

            <div className="content">
                {stepNumber === 1 &&
                    <section className="intro-section">
                        <span className="intro-text">Its time to build your profile. We are going to ask you a few simple questions, after which we will be able to book you in for a chat. The more you give, the more we've got.</span>
                    </section>
                }
                <section className="current-step-section">
                    {stepNumber === 1 &&
                        <BasicDetailInputs
                            currentStepNumber={stepNumber}
                            totalSteps={totalSteps}
                            basicDetails={basicDetails}
                            setBasicDetails={setBasicDetails}
                            increaseStepNumber={increaseStepNumber}
                            color="#B7B500"
                            customerJourney="seller"
                        />
                    }
                    {stepNumber === 2 &&
                        <UkMap
                            currentStepNumber={stepNumber}
                            totalSteps={totalSteps}
                            isDontMind={isClientsNationwide}
                            selectedLocations={selectedLocations}
                            setIsDontMind={setIsClientsNationwide}
                            setSelectedLocations={setSelectedLocations}
                            setSpecificLocationRequirements={setSpecificLocationRequirements}
                            specificLocationRequirements={specificLocationRequirements}
                            color="#B7B500"
                            customerJourney="seller"
                            increaseStepNumber={increaseStepNumber}
                            decreaseStepNumber={decreaseStepNumber}
                        />
                    }
                    {stepNumber === 3 &&
                        <BusinessType
                            currentStepNumber={stepNumber}
                            totalSteps={totalSteps}
                            assetsUnderManagement={assetsUnderManagement}
                            setAssetsUnderManagement={setAssetsUnderManagement}
                            clients={clients}
                            setClients={setClients}
                            advisers={advisers}
                            setAdvisers={setAdvisers}
                            customerJourney="seller"
                            increaseStepNumber={increaseStepNumber}
                            decreaseStepNumber={decreaseStepNumber}
                        />
                    }
                    {stepNumber === 4 &&
                        <Timescales
                            currentStepNumber={stepNumber}
                            totalSteps={totalSteps}
                            timescale={timescale}
                            setTimescale={setTimescale}
                            customerJourney="seller"
                            increaseStepNumber={increaseStepNumber}
                            decreaseStepNumber={decreaseStepNumber}
                        />
                    }
                    {stepNumber > 4 &&
                        <CallBooking
                            currentStepNumber={stepNumber}
                            totalSteps={totalSteps}
                            name={basicDetails.name}
                            email={basicDetails.email}
                            increaseStepNumber={increaseStepNumber}
                            color="#B7B500"
                            decreaseStepNumber={decreaseStepNumber}
                            customerJourney="seller"
                        />
                    }

                </section>
            </div>
        </div>
    )
}

export default Sell