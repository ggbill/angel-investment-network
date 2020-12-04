import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Button, Drawer, MenuItem } from '@material-ui/core'
import { Link } from 'react-router-dom'
import "./menuBar.scss"
import LinkButton from './LinkButton'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import Logo from '../../images/tmb-logo.png'

interface InputProps {
    page: string
}

const MenuBar = (props: InputProps) => {

    // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    // const [isShowLogo, setIsShowLogo] = useState(false)
    const [isShowCta, setIsShowCta] = useState(false)
    // const [isHomePage, setIsHomePage] = useState(false)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [backgroundColor, setBackgroundColor] = useState("")


    // let location = useLocation();

    const toggleDrawer = (open: boolean) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setIsDrawerOpen(open);
    };

    const handleScroll = () => {
        // console.log(window.pageYOffset)
        // if (window.pageYOffset > 135) {
        //     setIsShowLogo(true)
        // } else {
        //     setIsShowLogo(false)
        // }

        if (window.pageYOffset > 440) {
            setIsShowCta(true)
        } else {
            setIsShowCta(false)
        }
    };

    const determineBackgroundColor = () => {
        if (props.page === "buy") {
            setBackgroundColor("#0093a8")
        } else if (props.page === "sell") {
            // setBackgroundColor("#b7b500")
            setBackgroundColor("#989815")
        } else {
            setBackgroundColor("#3f3b5b")
        }
    }

    const handleClose = () => {
        // setAnchorEl(null);
        setIsDrawerOpen(false);
    };

    useEffect(() => {
        determineBackgroundColor()
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps  
    }, []);

    return (
        <>
            <div className="menu-bar">
                <AppBar style={{ backgroundColor: backgroundColor }}>
                    <Toolbar>
                        <div className="logo-wrapper">
                            <Link to={'/'}>
                                <img alt="" src={Logo} />
                            </Link>
                        </div>
                        <div className="menu-items">
                            <LinkButton className="link-button" to='/about'>About us</LinkButton>
                            {/* <LinkButton className="link-button" to='/blog'>Blog</LinkButton> */}
                            <LinkButton className="link-button" to='/contact'>Get in touch</LinkButton>
                            {/* If home page conditionally hide ctas, if not always show. */}
                            {props.page === "home" ?
                                <>
                                    <Link to='/buy'>
                                        <button className={isShowCta ? 'love-button buyer menu show-cta' : 'love-button buyer menu'}>BUY A BUSINESS</button>
                                    </Link>
                                    <Link to='/sell'>
                                        <button className={isShowCta ? 'love-button seller menu show-cta' : 'love-button  seller menu'}>SELL MY BUSINESS</button>
                                    </Link>
                                </>
                                :
                                <>
                                    <Link to='/buy'>
                                        <button className={'love-button buyer menu visible'}>BUY A BUSINESS</button>
                                    </Link>
                                    <Link to='/sell'>
                                        <button className={'love-button seller menu visible'}>SELL MY BUSINESS</button>
                                    </Link>
                                </>
                            }
                        </div>
                        <Button className="clickable-icon hamburger-menu" aria-controls="simple-menu" aria-haspopup="true" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
            <Drawer
                anchor="top"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
                className="menu-drawer"
            >
                <div className="close-icon-container">
                    <Button className="clickable-icon hamburger-menu" aria-controls="simple-menu" aria-haspopup="true" onClick={toggleDrawer(false)}>
                        <CloseIcon />
                    </Button>
                </div>
                <Link to='/season-list' style={{ textDecoration: 'none', color: 'black' }}>
                    <MenuItem onClick={handleClose}>Seasons</MenuItem>
                </Link>
                <Link to='/player-list' style={{ textDecoration: 'none', color: 'black' }}>
                    <MenuItem onClick={handleClose}>Players</MenuItem>
                </Link>
            </Drawer>
            {/*
            <Menu
                id="logout-menu"
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={logOut}>Log Out</MenuItem>
            </Menu> */}

        </>
    )
}

export default MenuBar