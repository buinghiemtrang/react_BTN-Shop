import React, { useRef, useEffect } from 'react'

import { Link, useLocation } from 'react-router-dom'

import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

import { useAuth0 } from '@auth0/auth0-react'

import { UserLogin, UserLogout, ProfileAvatar } from './User'

import logo from '../assets/images/Logo1.png'

const mainNav = [
    {
        display: "Trang chủ",
        path: "/"
    },
    {
        display: "Sản phẩm",
        path: "/catalog"
    },
    {
        display: "Liên hệ",
        path: "/contact"
    },
    {
        display: "Phản hồi",
        path: "/"
    }
]

const Header = () => {

    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)

    const headerRef = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        })
        // return () => {
        //     window.removeEventListener("scroll")
        // };
    }, []);

    const menuLeft = useRef(null)

    const menuToggle= () => menuLeft.current.classList.toggle('active')

    const { isLoading } = useAuth0();

    if (isLoading) return <div>
        <Box sx={{ width: '100%', marginTop: '5px' }}>
            <LinearProgress />
        </Box>
    </div>

    return (
        <div className="header" ref={headerRef}>
            <div className="container">
                <div className="header__logo">
                    <Link to="/">
                        <img src={ logo } alt="" />
                    </Link>
                </div>
                <div className="header__menu">
                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <i className='bx bx-menu-alt-left'></i>
                    </div>
                    <div className="header__menu__left" ref={menuLeft}>
                        <div className="header__menu__left__close" onClick={menuToggle}>
                            <i className='bx bx-log-out-circle'></i>
                        </div>
                        {
                            mainNav.map((item, index) =>(
                                <div key={index} className={`header__menu__item 
                                header__menu__left__item ${index === activeNav ? 'active' : ''}`} onClick={menuToggle}>
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="header__menu__right">
                        <div className="header__menu__item header__menu__right__item">
                            <Link to='/cart'>
                                <Tooltip title="Giỏ hàng">
                                    <IconButton>
                                        <i className='bx bx-shopping-bag'></i>
                                    </IconButton>
                                </Tooltip>
                            </Link>
                        </div>
                        <div className="header__menu__item header__menu__right__item" style={{fontSize:'2.1rem'}}>
                            {/* <i className='bx bx-user'></i> */}
                            <Stack spacing={2} direction="row">
                                <Link to="/user">
                                    <ProfileAvatar />
                                </Link>
                                <div>
                                    <UserLogin />
                                    <UserLogout />
                                </div>
                            </Stack>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
