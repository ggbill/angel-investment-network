import './about.scss'
import React from 'react'
import MenuBar from '../shared/MenuBar'
import { Card, CardContent } from '@material-ui/core'
import { ReactComponent as Logo } from '../../images/tmb-logo.svg'
import KeithImage from '../../images/snowy-keith.jpg'
import DebbieImage from '../../images/debbie.jpg'
import NormanImage from '../../images/norman.jpg'
import { ReactComponent as LinkedInLogo } from '../../images/linkedin.svg'
import CookieConsentPopup from '../shared/CookieConsentPopup'


const About = () => {


    return (
        <div className="about-page">
            <MenuBar page="about" />
            <section className="header-section">
                <div className="content">
                    <div className="title-wrapper">
                        <span className="title">THE QUESTION ISN'T WHERE YOU'RE GOING, IT'S HOW YOU GET THERE</span>
                        <span className="sub-title">Subtitle text</span>
                    </div>
                </div>
            </section>
            <div className="shifted-up-content">
                <section className="how-it-works-section content">
                    <Card>
                        <CardContent>
                            <div className="row margin-bottom">
                                <div className="step-wrapper">
                                    <Logo />
                                    <div className="title-wrapper">
                                        <div className="step-number"><span>1.</span></div>
                                        <span className="title">Do something</span>
                                    </div>
                                    <span>
                                        Let us know what you like. Do you want to exclude cities, or sleep in luxury? Tell us your preferences in only a few clicks. This way we can arrange a fantastic experience for you.
                                </span>
                                </div>
                                <div className="step-wrapper">
                                    <Logo />
                                    <div className="title-wrapper">
                                        <div className="step-number"><span>2.</span></div>
                                        <span className="title">Do something</span>
                                    </div>
                                    <span>
                                        Let us know what you like. Do you want to exclude cities, or sleep in luxury? Tell us your preferences in only a few clicks. This way we can arrange a fantastic experience for you.
                                </span>
                                </div>
                                <div className="step-wrapper">
                                    <Logo />
                                    <div className="title-wrapper">
                                        <div className="step-number"><span>3.</span></div>
                                        <span className="title">Do something</span>
                                    </div>
                                    <span>
                                        Let us know what you like. Do you want to exclude cities, or sleep in luxury? Tell us your preferences in only a few clicks. This way we can arrange a fantastic experience for you.
                                </span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="step-wrapper">
                                    <Logo />
                                    <div className="title-wrapper">
                                        <div className="step-number"><span>4.</span></div>
                                        <span className="title">Do something</span>
                                    </div>
                                    <span>
                                        Let us know what you like. Do you want to exclude cities, or sleep in luxury? Tell us your preferences in only a few clicks. This way we can arrange a fantastic experience for you.
                                </span>
                                </div>
                                <div className="step-wrapper">
                                    <Logo />
                                    <div className="title-wrapper">
                                        <div className="step-number"><span>5.</span></div>
                                        <span className="title">Do something</span>
                                    </div>
                                    <span>
                                        Let us know what you like. Do you want to exclude cities, or sleep in luxury? Tell us your preferences in only a few clicks. This way we can arrange a fantastic experience for you.
                                </span>
                                </div>
                                <div className="step-wrapper">
                                    <Logo />
                                    <div className="title-wrapper">
                                        <div className="step-number"><span>6.</span></div>
                                        <span className="title">Do something</span>
                                    </div>
                                    <span>
                                        Let us know what you like. Do you want to exclude cities, or sleep in luxury? Tell us your preferences in only a few clicks. This way we can arrange a fantastic experience for you.
                                </span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>
                <section className="team-section">
                    <div className="content">
                        <h1>Introducing our matchmakers</h1>
                        <div className="matchmaker-wrapper">
                            <img alt="" src={KeithImage} />
                            <div className="text-wrapper">
                                <span className="name">Keith Brown</span>
                                <span className="email"><span className="email-icon">📧</span> <a href="mailto:keith@adviser.love">keith@adviser.love</a></span>
                                <div className="description-wrapper">
                                    <p>Keith has worked as part of a team to complete over 50 acquisition and integration projects, and has had strategic responsibility for planning and implementation of integration activity and processes.</p>
                                    <p>Keith has displayed a track record of building and leading teams to achieve agreed targets and budgets.</p>
                                </div>
                                <a href="https://www.linkedin.com/in/discoverfg/" target="_blank"><LinkedInLogo /></a>
                            </div>
                        </div>
                        <div className="matchmaker-wrapper">
                            <img alt="" src={DebbieImage} />
                            <div className="text-wrapper">
                                <span className="name">Debbie Dry</span>
                                <span className="email"><span className="email-icon">📧</span> <a href="mailto:debbie@adviser.love">debbie@adviser.love</a></span>
                                <div className="description-wrapper">
                                    <p>Debbie has spent her entire career in retail financial services with the last 10 years at senior management and board level. </p>
                                    <p>She has been responsible for leading organisation-wide change programmes to deliver financial benefit through IT development and method improvement. Having spent the last 15 years working with consolidators in the financial services industry, Debbie is well placed to support IFAs through this process whilst maintaining client focus and business continuity throughout.</p>
                                </div>
                                <a href="https://www.linkedin.com/in/debbie-dry-b606b424/" target="_blank"><LinkedInLogo /></a>
                            </div>
                        </div>
                        <div className="matchmaker-wrapper">
                            <img alt="" src={NormanImage} />
                            <div className="text-wrapper">
                                <span className="name">Norman MacLeod</span>
                                <span className="email"><span className="email-icon">📧</span> <a href="mailto:norman@adviser.love">norman@adviser.love</a></span>
                                <div className="description-wrapper">
                                    <p>Having spent two decades as a senior fundraiser in a variety of organisations in the arts and culture sector, Norman made a career change some years ago. Transferring his communication and commercial skills to work in the IFA consolidation market, he was part of a small team that enjoyed notable success completing 50+ IFA acquisition deals over a five-year period.</p>
                                </div>
                                <a href="https://www.linkedin.com/in/norman-macleod-27384a94/" target="_blank"><LinkedInLogo /></a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="fees-section content">
                    <h1>Fees</h1>
                    <p>Having spent two decades as a senior fundraiser in a variety of organisations in the arts and culture sector, Norman made a career change some years ago. Transferring his communication and commercial skills to work in the IFA consolidation market, he was part of a small team that enjoyed notable success completing 50+ IFA acquisition deals over a five-year period.</p>
                    <div className="fees-wrapper">
                        <Card>
                            <CardContent>
                                <span className="title">4%</span>
                                <span className="sub-title">On the first £1 million</span>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent>
                                <span className="title">3%</span>
                                <span className="sub-title">On the next £2 million</span>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent>
                                <span className="title">2%</span>
                                <span className="sub-title">On the next £2 million</span>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent>
                                <span className="title">Negotiable</span>
                                <span className="sub-title">On £5 million+</span>
                            </CardContent>
                        </Card>
                    </div>

                </section>
            </div>

            <CookieConsentPopup />
        </div>
    )
}

export default About