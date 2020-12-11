import './sell.scss'
import React, { useState, useRef } from 'react'
import MenuBar from '../shared/MenuBar'
import UkMap from '../shared/ClientLocation'
import BasicDetailInputs from '../shared/BasicDetailInputs'
import BusinessType from '../shared/BusinessType'
import Timescales from '../shared/Timescales'
import CallBooking from '../shared/CallBooking'
import useFetch from "../../hooks/useFetch"
import ReCAPTCHA from "react-google-recaptcha"

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
        { id: 2, label: '12 months +', description: "Easy like a Sunday morning.", imageUrl: "", isSelected: false }
    ])

    const leadApi = useFetch("leads");
    const emailApi = useFetch("emails");

    const reRef = useRef<ReCAPTCHA>();

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

    const commitDataToDb = async () => {

        //reCAPTCHA stuff
        const token = await reRef.current.executeAsync()
        reRef.current.reset()

        let tempAum, tempClients, tempAdvisers, tempTimescale;

        assetsUnderManagement.forEach(element => {
            if (element.isSelected) {
                tempAum = element.label
            }
        });
        advisers.forEach(element => {
            if (element.isSelected) {
                tempAdvisers = element.label
            }
        });
        clients.forEach(element => {
            if (element.isSelected) {
                tempClients = element.label
            }
        });
        timescale.forEach(element => {
            if (element.isSelected) {
                tempTimescale = element.label
            }
        });

        leadApi.post({
            type: "Seller",
            name: basicDetails.name,
            companyName: basicDetails.companyName,
            phone: basicDetails.telephone,
            email: basicDetails.email,
            clientLocationList: selectedLocations,
            isDontMind: isClientsNationwide,
            specificLocationDetails: specificLocationRequirements,
            aum: tempAum,
            clients: tempClients,
            advisers: tempAdvisers,
            timescale: tempTimescale,
        }).then(data => {
            emailApi.post({
                type: "SELLER-JOURNEY",
                name: basicDetails.name,
                companyName: basicDetails.companyName,
                phone: basicDetails.telephone,
                email: basicDetails.email,
                clientLocationList: selectedLocations,
                isDontMind: isClientsNationwide,
                specificLocationDetails: specificLocationRequirements,
                aum: tempAum,
                clients: tempClients,
                advisers: tempAdvisers,
                timescale: tempTimescale,
                reCAPTCHAToken: token
            }).then(data => {
                console.log(data)
            }).catch((err: Error) => {
                console.log(err)
            })
        }).catch((err: Error) => {
            console.log(err)
        })
    }

    return (
        <div className="sell-page">
            <MenuBar page="sell" />
            <section className="header-section seller">
                <div className="content">
                    <div className="title-wrapper">
                        <div className="song-title-wrapper">
                            <span className="title">I'm Sellin'...</span>
                            <span className="sub-title">
                                <span>🎸</span>
                                <a href="http://www.youtube.com/watch?v=4L_yCwFD6Jo&t=1m22s" target="_blank" rel="noreferrer">
                                    (Click me...)
                                </a>
                                <span>🎸</span>
                            </span>
                            <span className="small-print">(full disclosure headphones might be sensible.)</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="content">
                {/* {stepNumber === 1 &&
                    <section className="intro-section">
                        <span className="intro-text">It's time to build your profile. We're going to ask you a few simple questions, after which we'll be able to book you in for a chat. The more you give, the more we've got.</span>
                    </section>
                } */}
                <section className="current-step-section">
                    {stepNumber === 1 &&
                        <BasicDetailInputs
                            currentStepNumber={stepNumber}
                            totalSteps={totalSteps}
                            basicDetails={basicDetails}
                            setBasicDetails={setBasicDetails}
                            increaseStepNumber={increaseStepNumber}
                            color="#E94F37"
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
                            color="#E94F37"
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
                            phone={basicDetails.telephone}
                            increaseStepNumber={increaseStepNumber}
                            color="#E94F37"
                            decreaseStepNumber={decreaseStepNumber}
                            customerJourney="seller"
                            commitDataToDb={commitDataToDb}
                        />
                    }


                </section>
            </div>
            <div className="re-captcha-wrapper">
                <ReCAPTCHA
                    ref={reRef}
                    sitekey="6Lc26vcZAAAAAGC8FPT3kgtG6Tl-IlymOqGk7bY6"
                    size="invisible"
                />
            </div>
        </div>
    )
}

export default Sell