import './home.scss'
import React from 'react'
import MenuBar from '../shared/MenuBar'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div className="home-page">
            <MenuBar />
            <section className="header-section">
                <div className="content">
                    <div className="title-wrapper">
                        <span className="title">Welcome to the AIN Pitch Submission Portal</span>
                    </div>
                    <div className="button-wrapper">
                        <Link to='/broking-submission'>
                            <button className="ain-button">Lets Do This!</button>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home