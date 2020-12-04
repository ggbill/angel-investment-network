import './cookieConsentPopup.scss'
import React from 'react'
import CookieConsent from "react-cookie-consent";
import CookieGif from '../../images/cookie.gif'


const CookieConsentPopup = () => {
    return (
        <CookieConsent
            enableDeclineButton
            style={{
                background: "white",
                color: "#222",
                boxShadow: "0px -3px 10px rgba(50, 50, 50, 0.26)",
            }}
            location="bottom"
            buttonText="I'm OK with that"
            declineButtonText="No thanks, get me out of here"
            cookieName="myAwesomeCookieName2"
            buttonClasses="accept-button"
            declineButtonClasses="decline-button"
            containerClasses="cookie-consent"
            contentClasses="cookie-content"
            buttonWrapperClasses="button-wrapper"
            expires={1}
            // onAccept={() => {
            //     alert("Accept was triggered by clicking the Accept button");
            // }}
            onDecline={() => {
                window.location.href = "https://www.youtube.com/watch?v=UQU4sIn96M4&ab_channel=MyMotownTunes0815007";
            }}
        >
            <div className="cookie-content-wrapper">
                <img src={CookieGif} alt="cookie-gif" />
                <span>This website uses cookies (delicious) to enhance the user experience...</span>
            </div>

        </CookieConsent>
    )
}

export default CookieConsentPopup