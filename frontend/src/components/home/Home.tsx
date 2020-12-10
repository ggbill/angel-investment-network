import './home.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import MenuBar from '../shared/MenuBar';
import CookieConsentPopup from '../shared/CookieConsentPopup';
import { ReactComponent as MeetIcon } from '../../images/mb-meet-icon.svg'
import { ReactComponent as ManageIcon } from '../../images/mb-manage-icon.svg'
import { ReactComponent as ExchangeIcon } from '../../images/mb-exchange-icon.svg'

const Home = () => {
    return (
        <div className="home-page">
            <MenuBar page="home" />
            <section className="header-section">
                <div className="content">
                    <div className="home-title-wrapper">
                        {/* <span className="title">Helping Financial Advisers find their happily ever afters </span><div className="heart-wrapper">❤️</div> */}
                        <span className="title">Where financial advisers come to fall in business love </span><div className="heart-wrapper">❤️</div>
                    </div>
                    <div className="button-wrapper">
                        <Link to='/buy'>
                            <button className="love-button cta-button buyer">I want to buy a business</button>
                        </Link>
                        <Link to='/sell'>
                            <button className="love-button cta-button seller">I want to sell my business</button>
                        </Link>


                    </div>
                    {/* <Link className="clickable-link" to={'/about'}> First things first - tell me how it works... </Link> */}
                </div>
            </section>

            <section className="intro-section content">
                <div className="image-wrapper">
                    {/* <img alt="" src={teamworkImage} /> */}
                    <MeetIcon fill=" #E94F37" />

                </div>
                <div className="text-wrapper">
                    <h2>Meeting your perfect partner</h2>
                    <p>If you’re a Financial Adviser keen to buy a business to grow your own, how do make sure you find “The One”? And if you’re wanting to sell, how do ensure that you make the right deal for you and your clients? And how do you meet in the first place?</p>
                    <p>It’s a tough one.</p>
                    <p>There are plenty of “Introduction Agencies” out there. Brokers that’ll just give you a name, charge a fee and walk away. Job done.</p>
                    <p>But that’s not us. That’s not us at all.</p>
                    <p>We take you on the whole journey; from a great first date to a happily ever after.</p>
                </div>
            </section>

            {/* <section className="testimonials-section content">
                <div className="testimonials-wrapper">
                    <TestimonialCard
                        quote="We chose to partner with Wealth Holdings as they clearly have first-hand experience of building, selling and integrating IFA and Wealth Management businesses. Their approach is not just about numbers, it is about understanding the culture, personalities and structuring the right deal for all parties."
                        name="Keith Brown"
                        workTitle="CEO, Wealth Holdings"
                        imageUrl={keithImage}
                    />
                    <TestimonialCard
                        quote="During my time working with Debbie she has always shown excellent leadership and communication skills. She has a great eye for detail and, above all, is one of the most energetic and enthusiastic people I've had the pleasure to work with. I genuinely hope our paths cross again in the future"
                        name="Keith Brown"
                        workTitle="CEO, Wealth Holdings"
                        imageUrl={keithImage}
                    />
                    <TestimonialCard
                        quote="In the thirty-five years since I joined the financial services industry, I have not encountered an organisation that provides such a complete, independent and professional financial planning service as is provided by HambroFraserSmith."
                        name="Keith Brown"
                        workTitle="CEO, Wealth Holdings"
                        imageUrl={keithImage}
                    />
                </div>
            </section> */}

            <section className="what-we-do-section content">
                <div className="text-wrapper">
                    <h2>Putting the M&A into business <u>ma</u>rriage</h2>
                    <p>Successfully buying a business and integrating it with your own is a lot like getting married. It’s a big decision and you want to make sure it’s a good one. And when you’re selling, you want to make sure that you’re giving “your baby” away to the right person.</p>
                    <p>That’s why we don’t just make introductions. It doesn’t deliver value. </p>
                    <p>We build successful, long lasting and happy relationships, getting to know our clients inside out before bringing them together, creating the deals our clients want to do.</p>
                    <p>Our highly experienced team of MatchMakers work with all our Buyers and Sellers to develop a deep and granular knowledge of their businesses, their requirements and their ambitions.</p>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    {/* <img className="tick-image" alt="" src={tickImage} /> */}
                                    <div className="heart-wrapper">❤️</div>
                                </td>
                                <td>
                                    Guiding and advising Buyers through all stages of the cycle, from preparing to enter the market to post-deal integration.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {/* <img className="tick-image" alt="" src={tickImage} /> */}
                                    <div className="heart-wrapper">❤️</div>
                                </td>
                                <td>
                                    Taking a holistic approach to finding the perfect match, ensuring objectives and cultures are properly aligned.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {/* <img className="tick-image" alt="" src={tickImage} /> */}
                                    <div className="heart-wrapper">❤️</div>
                                </td>
                                <td>
                                    Making full use of our in-house expertise in research, business strategy, finance, investment management, operations and integration.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="image-wrapper">
                    {/* <img alt="" src={positiveThinkingImage} /> */}
                    <ManageIcon fill="#3f3b5b" />
                </div>
            </section>

            <section className="fair-exchange-section content">
                <div className="image-wrapper">
                    {/* <img alt="" src={positiveThinking2Image} /> */}
                    <ExchangeIcon fill="#0093a8" />
                </div>
                <div className="text-wrapper">
                    <h2>A heart that’s in the right place</h2>
                    <p>Whether you’re buying or selling a business, you can be sure of the delivery of fair exchange in all our transactions. Our business is built on trust, transparency and delivered value and we only charge for successful transactions based upon the level and complexity of the work we do. </p>
                    <p>That’s why successful financial advisory firms partner with us to execute both their immediate and long term strategic requirements.</p>
                </div>
            </section>

            <CookieConsentPopup />

        </div>
    )
}

export default Home