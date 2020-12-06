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
            setBackgroundColor("#E94F37")
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
                                <img alt="tmb-logo" src={Logo} />
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
                <Link to='/about' style={{ textDecoration: 'none', color: 'black' }}>
                    <MenuItem onClick={handleClose}>About</MenuItem>
                </Link>
                <Link to='/contact' style={{ textDecoration: 'none', color: 'black' }}>
                    <MenuItem onClick={handleClose}>Get In Touch</MenuItem>
                </Link>
                <Link to='/buy'>
                    <MenuItem onClick={handleClose}><button className={'love-button buyer menu visible'}>BUY A BUSINESS</button></MenuItem>
                </Link>
                <Link to='/sell'>
                    <MenuItem onClick={handleClose}><button className={'love-button seller menu visible'}>SELL MY BUSINESS</button></MenuItem>
                </Link>
                <Link to={'/'}>
                <MenuItem onClick={handleClose} className="logo-menu-item"><img alt="tmb-logo" src={Logo} /></MenuItem>
                    
                </Link>

            </Drawer>
        </>
    )
}

export default MenuBar