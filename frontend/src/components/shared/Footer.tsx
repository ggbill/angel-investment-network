import React from "react"
import { Link } from 'react-router-dom'
import "./footer.scss"

interface InputProps {

}

const Footer = (props: InputProps) => {
    return (
        <section className="footer-section">
            <div className="left-content">
                {/* <div className="ghost-div"></div> */}
                {/* <span>The Marriage Bureau is a brand that is wholly owned and operated by <a target="_blank" rel="noreferrer" href='https://www.wealthholdings.co.uk'>Wealth Holdings Inc Ltd</a>.</span> */}
                {/* <a target="_blank" rel="noreferrer" href='https://www.wealthholdings.co.uk'>Wealth Holdings Inc Lts.</a> */}
                {/* <Link to={'/privacy-policy'}>Privacy Policy</Link> */}


            </div>
            <div className="middle-content">
                {/* <Link to={'/'}>
                    <img alt="" src={Logo} />
                </Link> */}
                <span>Broking Submission Form</span>
                {/* <br/> */}
                <span>© 2021</span> 

            </div>
            <div className="right-content">
                <div className="social-wrapper">
                    {/* <a href='https://www.facebook.com' target="_blank" rel="noreferrer"><img className="social-icon" alt="" src={facebookImage} /></a> */}
                    {/* <a href='https://www.instagram.com' target="_blank" rel="noreferrer"><img className="social-icon" alt="" src={instagramImage} /></a> */}
                    {/* <a href='https://www.linkedin.com/company/70573670' target="_blank" rel="noreferrer"><img className="social-icon" alt="" src={linkedInImage} /></a> */}
                </div>
                
            </div>
        </section>
    )
}

export default Footer