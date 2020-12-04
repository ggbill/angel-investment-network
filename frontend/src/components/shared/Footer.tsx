import React from "react"
import { Link } from 'react-router-dom'
import "./footer.scss"
import facebookImage from '../../images/facebook.png';
import instagramImage from '../../images/instagram.png';
import linkedInImage from '../../images/linkedin.png';
import Logo from '../../images/tmb-logo.png'

interface InputProps {

}

const Footer = (props: InputProps) => {
    return (
        <section className="footer-section">
            <div className="left-content">
                <Link to={'/'}>
                    <img alt="" src={Logo} />
                </Link>
            </div>
            <div className="middle-content">
                <span>The Marriage Bureau is a brand that is wholly owned and operated by</span>
                <a target="_blank" rel="noreferrer" href='https://www.wealthholdings.co.uk'>Wealth Holdings.</a>

            </div>
            <div className="right-content">
                <div className="social-wrapper">
                    <a href='https://www.facebook.com' target="_blank" rel="noreferrer"><img className="social-icon" alt="" src={facebookImage} /></a>
                    <a href='https://www.instagram.com' target="_blank" rel="noreferrer"><img className="social-icon" alt="" src={instagramImage} /></a>
                    <a href='https://www.linkedin.com' target="_blank" rel="noreferrer"><img className="social-icon" alt="" src={linkedInImage} /></a>
                </div>
            </div>
        </section>
    )
}

export default Footer