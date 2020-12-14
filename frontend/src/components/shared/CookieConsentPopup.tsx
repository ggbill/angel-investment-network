import './cookieConsentPopup.scss'
import React from 'react'
import CookieConsent from "react-cookie-consent";
import CookieGif from '../../images/cookie.gif'


const CookieConsentPopup = () => {
    return (
        <CookieConsent
            style={{
                background: "white",
                color: "#222",
                boxShadow: "0px -3px 10px rgba(50, 50, 50, 0.26)",
            }}
            location="bottom"
            buttonText="OK"
            cookieName="tmbCookieConsent"
            buttonClasses="accept-button"
            containerClasses="cookie-consent"
            contentClasses="cookie-content"
            buttonWrapperClasses="button-wrapper"
            expires={7}
        >
            <div className="cookie-content-wrapper">
                <img src={CookieGif} alt="cookie-gif" />
                <span>This website uses cookies (delicious) to enhance the user experience...</span>
            </div>

        </CookieConsent>
    )
}

export default CookieConsentPopup