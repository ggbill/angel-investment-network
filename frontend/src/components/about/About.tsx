import './about.scss'
import React from 'react'
import MenuBar from '../shared/MenuBar'
import { Card, CardContent } from '@material-ui/core'
import { ReactComponent as MeetIcon } from '../../images/mb-meet-icon.svg'
import { ReactComponent as ManageIcon } from '../../images/mb-manage-icon.svg'
import { ReactComponent as ExchangeIcon } from '../../images/mb-exchange-icon.svg'
import KeithImage from '../../images/snowy-keith.jpg'
import DebbieImage from '../../images/debbie.jpg'
import NormanImage from '../../images/norman.jpg'
import { ReactComponent as LinkedInLogo } from '../../images/linkedin.svg'
import { ReactComponent as WHLogo } from '../../images/wh-logo.svg'
import CookieConsentPopup from '../shared/CookieConsentPopup'
import { Link } from 'react-router-dom'


const About = () => {
    return (
        <div className="about-page">
            <MenuBar page="about" />
            <section className="header-section">
                <div className="content">
                    <div className="title-wrapper">
                        <div className="song-title-wrapper">
                            <span className="title">It ain’t what you do it’s the way that you do it. That’s what gets results.</span>
                            <span className="sub-title">
                                <span>🎸</span>
                                <a href="http://www.youtube.com/watch?v=H--_-gPX3Nw&t=1m11s" target="_blank" rel="noreferrer">
                                    Click me...
                                </a>
                                <span>🎸</span>
                            </span>
                            <span className="small-print">(full disclosure headphones might be sensible.)</span>

                        </div>
                    </div>
                </div>
            </section>
            <div className="shifted-up-content">
                <section className="how-it-works-section content">
                    <Card>
                        <CardContent>
                            <h2>We do things our own way. Six simple steps to success. It works.</h2>
                            <div className="row margin-bottom">
                                <div className="step-wrapper">
                                    <MeetIcon fill="red" />
                                    <div className="title-wrapper">
                                        <div className="step-number"><span>1.</span></div>
                                        <span className="title">Getting to know you</span>
                                    </div>
                                    <div className="body-wrapper">
                                        <p>We like to do our homework. We want to make you look as good as possible so we’ll be wanting to properly understand your business: your objectives, culture and aspirations. We want to know how you do things and how you like things done. If you’re selling a business we’ll give you an realistic valuation as soon as we can. No one likes surprises.</p>
                                        <p>And, it goes without saying, we’ll keep your data nice and secure in a bespoke data room.</p>
                                    </div>
                                </div>
                                <div className="step-wrapper">
                                    <ManageIcon fill="blue" />
                                    <div className="title-wrapper">
                                        <div className="step-number"><span>2.</span></div>
                                        <span className="title">MatchMaking</span>
                                    </div>
                                    <div className="body-wrapper">
                                        <p>Even if we say so ourselves, we’re great at this. We make sure we’ve got a good fit before we make any introductions. We want there to be fireworks when you meet. We look at location, company metrics, size, cultural fit. All of it. And when we think we’ve got you a match we’ll arrange a first date, chaperoning you all the way.</p>
                                        <p>You’ll need to be patient though. We want to get this right. Magic doesn’t always happen overnight.</p>
                                    </div>
                                </div>
                                <div className="step-wrapper">
                                    <ExchangeIcon fill="pink" />
                                    <div className="title-wrapper">
                                        <div className="step-number"><span>3.</span></div>
                                        <span className="title">Setting the date</span>
                                    </div>
                                    <div className="body-wrapper">
                                        <p>So, you’ve had a few dates and you’ve fallen in Business Love. You want to get together and there’s a deal to be done. No two deals are exactly alike, so we’ll guide and support you in reaching Heads of Terms in a timely fashion for the correct deal structure to make sure you optimise deal value.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="step-wrapper">
                                    <ExchangeIcon fill="green" />
                                    <div className="title-wrapper">
                                        <div className="step-number"><span>4.</span></div>
                                        <span className="title">Making a plan</span>
                                    </div>
                                    <div className="body-wrapper">
                                        <p>We’ll translate the legals in your Sale and Purchase Agreement into a detailed road map to successfully assimilate the selling firm into the buying firm, ensuring minimal disruption for clients. For everyone. No one likes disruption. </p>
                                    </div>
                                </div>
                                <div className="step-wrapper">
                                    <MeetIcon fill="orange" />
                                    <div className="title-wrapper">
                                        <div className="step-number"><span>5.</span></div>
                                        <span className="title">Tying the knot</span>
                                    </div>
                                    <div className="body-wrapper">
                                        <p>When it’s time to do the legals we’ll work closely with a specialist legal team, holding your hand all the way, to help reach a successful conclusion that meets the needs of all parties and puts a smile on everyone's face. There won’t be a dry eye in the house. This is an emotional time.</p>
                                    </div>
                                </div>
                                <div className="step-wrapper">
                                    <ManageIcon fill="purple" />
                                    <div className="title-wrapper">
                                        <div className="step-number"><span>6.</span></div>
                                        <span className="title">Moving in together</span>
                                    </div>
                                    <div className="body-wrapper">
                                        <p>The path of true love never runs smooth so we’ll be by your side throughout the acquisition and integration process to ensure a successful outcome. Successful relationships are what we’re good at. So we won’t leave you to it until the job’s done.</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>
                <section className="vows-section">
                    <div className="content">
                        <div className="text-wrapper">
                            <h2>Ready to go steady? Let's make our vows...</h2>
                            <p>We take our clients really seriously, so we like to make a few promises from the outset:</p>
                            <Card>
                                <div className="emoji-wrapper">🤞🏻</div>
                                <span>We work with both buyers and sellers and always make sure our advice is unconflicted.</span>
                            </Card>
                            <Card>
                                <div className="emoji-wrapper">🤞🏻</div>
                                <span>If we think it’s right, we’ll always make alternative suggestions that’ll be more beneficial in the short term.</span>
                            </Card>
                            <Card>
                                <div className="emoji-wrapper">🤞🏻</div>
                                <span>We’ll hold your hand all the way. We just won’t introduce you to some “Random Joe” and waltz away with a fee.</span>
                            </Card>
                            <Card>
                                <div className="emoji-wrapper">🤞🏻</div>
                                <span>We’ll work with you to maximise the value of your transaction and our fee structure is aligned to our success and performance.</span>
                            </Card>
                            <Card>
                                <div className="emoji-wrapper">🤞🏻</div>
                                <span>We’ll look after your data. All the information we collect will be stored securely in compliance with ISO27001 standards.</span>
                            </Card>
                            <Card>
                                <div className="emoji-wrapper">🤞🏻</div>
                                <span>We’ll introduce you to our friends. We’ve been doing this a long time and we’ve built a big network of professional relationships. If we think it’ll help, we’ll leverage those relationships to benefit you.</span>
                            </Card>
                        </div>
                        {/* <div className="image-wrapper">
                        <img alt="" src={positiveThinkingImage} />
                    </div> */}
                    </div>
                </section>
                <section className="team-section">
                    <div className="content">
                        <h2>Meet some of our MatchMakers</h2>
                        <p>Romantics at heart, our MatchMakers are seasoned industry professionals; people who, having owned, managed, sold and bought IFA businesses themselves, know what a good deal looks like.</p>
                        <p className="intro">Although these financial cupids like to hog the limelight, behind them are a crack team that understand financial services inside out – marketing, technology, product development, fund management, building financial advice businesses and much more. Why not <Link to="contact">get in touch</Link> and see how we could help your business flourish.</p>
                        
                        <div className="matchmakers">
                            <div className="matchmaker-wrapper">
                                <img alt="" src={KeithImage} />
                                <div className="text-wrapper">
                                    <span className="name">Keith Brown <a href="https://www.linkedin.com/in/discoverfg/" target="_blank" rel="noreferrer"><LinkedInLogo /></a></span>

                                    <div className="description-wrapper">
                                        <p><b>Favourite Love Song? <a href="https://www.youtube.com/watch?v=_91hNV6vuBY&ab_channel=BruceSpringsteenVEVO" target="_blank" rel="noreferrer">Tougher than the rest (Bruce Springsteen)</a></b></p>
                                        <p>Hi, I’m Keith and I run The Marriage Bureau. Call me soppy but, having completed over 50 successful acquisition and implementation projects, I love my team and I love what we do. Getting the right people in the same room is what we’re about. Helping find that spark, that special something that makes a deal is our speciality and then ironing out the creases to create that Happily Ever After. I have no doubt our paths will cross. I’m looking forward to it. Who doesn’t love a good love story?</p>
                                    </div>
                                    <span className="email"><span className="email-icon">📧</span> <a href="mailto:keith@themarriagebureau.co.uk">keith@themarriagebureau.co.uk</a></span>

                                </div>
                            </div>
                            <div className="matchmaker-wrapper">
                                <img alt="" src={DebbieImage} />
                                <div className="text-wrapper">
                                    <span className="name">Debbie Dry <a href="https://www.linkedin.com/in/debbie-dry-b606b424/" target="_blank" rel="noreferrer"><LinkedInLogo /></a></span>

                                    <div className="description-wrapper">
                                        <p><b>Favourite Love Song? <a href="https://www.youtube.com/watch?v=tB54XUhA9_w&ab_channel=TheSoulJukebox" target="_blank" rel="noreferrer">My first, my last, my everything (Barry White)</a></b></p>
                                        <p>Hi, I’m Debbie. Financial services is my thing. It’s the only job I’ve ever known so I hope I’m pretty well placed to support you through the sales and acquisition process. Having been responsible for leading organisation-wide change programmes in IT and operations, I’ll make sure we’ll maintain client focus and business continuity throughout. I’ve spent the last 15 years working with consolidators, the majority at senior leadership and board level, so you can be sure I know my onions. I can’t wait to chat!</p>
                                    </div>
                                    <span className="email"><span className="email-icon">📧</span> <a href="mailto:debbie@themarriagebureau.co.uk">debbie@themarriagebureau.co.uk</a></span>

                                </div>
                            </div>
                            <div className="matchmaker-wrapper">
                                <img alt="" src={NormanImage} />
                                <div className="text-wrapper">
                                    <span className="name">Norman MacLeod <a href="https://www.linkedin.com/in/norman-macleod-27384a94/" target="_blank" rel="noreferrer"><LinkedInLogo /></a></span>

                                    <div className="description-wrapper">
                                        <p><b>Favourite Love Song?<a href="https://www.youtube.com/watch?v=yT1iDKkZNYU&ab_channel=SuperChannel" target="_blank" rel="noreferrer">You to me are everything (The Real Thing)</a></b></p>
                                        <p>I’m Norman. Compared to my colleagues, I’m a relative newbie to financial services having cut my teeth as a senior fundraiser in the arts and culture sector. However, I’ve been here a while now and I’ve helped complete over 50 acquisition deals since making the switch. I’m a communicator and chances are that it’ll be me you speak to first. I hope you’ll like it. I like to think I get people and I understand business so I’m looking forward to a good conversation.</p>
                                    </div>
                                    <span className="email"><span className="email-icon">📧</span> <a href="mailto:norman@themarriagebureau.co.uk">norman@themarriagebureau.co.uk</a></span>

                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section className="fees-section">
                    <div className="content">
                        <h2>Because Love Comes at a Price</h2>
                        <div className="music-link-wrapper">
                            <span>🎸</span>
                            <a href="http://www.youtube.com/watch?v=_Dat9CRV800&t=1m52s" target="_blank" rel="noreferrer">
                                Click me...
                                </a>
                            <span>🎸</span>
                        </div>

                        <p>Look, we don’t do this for free. Weddings cost money. But we think that the expense becomes easier to swallow when everyone’s happy. That’s why our charges are based on success.</p>
                        <p>We think that’s fair. Call us and we’ll talk you through it.</p>
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
                    </div>
                </section>
                <section className="wealth-holdings-section content">
                    <div className="text-wrapper">
                        <h2>Who's the daddy?</h2>
                        <p>The Marriage Bureau is brought to you by <a href="https://www.wealthholdings.co.uk/" target="_blank" rel="noreferrer">Wealth Holdings</a>, the consultancy group delivering innovative solutions to some of the UK's largest financial businesses.</p>
                    </div>
                    <div className="logo-wrapper">
                        <a href="https://www.wealthholdings.co.uk/" target="_blank" rel="noreferrer"><WHLogo /></a>
                    </div>

                </section>
            </div>

            <CookieConsentPopup />
        </div>
    )
}

export default About