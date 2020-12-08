import './callBooking.scss'
import React from 'react'
import { CalendlyEventListener } from 'react-calendly'
import { Link } from 'react-router-dom'


interface InputProps {
    currentStepNumber: number,
    totalSteps: number,
    name: string,
    email: string,
    increaseStepNumber: () => void,
    decreaseStepNumber: () => void,
    commitDataToDb: () => void,
    color: string,
    customerJourney: string
}



const CallBooking = (props: InputProps) => {

    const listenToCalendlyEvent = (event) => {
        // console.log(event.data)

        if (event.data.event === "calendly.event_scheduled") {
            props.increaseStepNumber()
            props.commitDataToDb()
        }
    }

    return (
        <section className="call-booking-section">
            {props.currentStepNumber === 5 &&
                <div className="title-wrapper">
                    <span className="step-counter">(Step {props.currentStepNumber} / {props.totalSteps - 1}) </span>
                    <span className="title">When would you like us to call you for an introductory chat?</span>
                </div>
            }


            <div>

                <CalendlyEventListener
                    onDateAndTimeSelected={listenToCalendlyEvent}
                    onEventScheduled={listenToCalendlyEvent}
                    onEventTypeViewed={listenToCalendlyEvent}
                    onProfilePageViewed={listenToCalendlyEvent}
                >
                    <div className={props.currentStepNumber === 6 ? "iframe-wrapper confirmation" : "iframe-wrapper"}>
                        <iframe
                            title="calendly-iframe"
                            frameBorder="0"
                            height="100%"
                            src={`https://calendly.com/adviser-love/15min?primary_color=${props.color.substring(1)}&embed_domain=http://localhost:3000&embed_type=Inline&name=${encodeURI(props.name)}&email=${encodeURI(props.email)}`}
                            width="100%"
                        />
                    </div>

                </CalendlyEventListener>

            </div>
            <div className="button-wrapper">
                {props.currentStepNumber === 5 &&

                    <button className={props.customerJourney === "buyer" ? "love-button buyer back" : "love-button seller back"} onClick={props.decreaseStepNumber}>Back</button>
                }

                {props.currentStepNumber === 6 &&
                    <Link to={'/'}>
                        <button className={props.customerJourney === "buyer" ? "love-button buyer next" : "love-button seller next"}>Back to Homepage</button>
                    </Link>

                }
            </div>
        </section>
    )
}

export default CallBooking