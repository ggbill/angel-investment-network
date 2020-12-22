import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Button, Drawer, MenuItem } from '@material-ui/core'
import { Link } from 'react-router-dom'
import "./menuBar.scss"
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import AINLogo from '../../images/ain-white.png'

const MenuBar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

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

        // if (window.pageYOffset > 440) {
        //     setIsShowCta(true)
        // } else {
        //     setIsShowCta(false)
        // }
    };

    const handleClose = () => {
        setIsDrawerOpen(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps  
    }, []);

    return (
        <>
            <div className="menu-bar">
                <AppBar>
                    <Toolbar>
                        <div className="logo-wrapper">
                            <Link to={'/'}>
                                <img alt="ain-logo" src={AINLogo} />
                            </Link>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    )
}

export default MenuBar