import React from 'react'

import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/Logo1.png'

import imgPay1 from '../assets/images/payments/1.png'
import imgPay2 from '../assets/images/payments/2.png'
import imgPay3 from '../assets/images/payments/3.png'
import imgPay4 from '../assets/images/payments/4.png'
import imgPay5 from '../assets/images/payments/5.png'


const footerAboutLinks = [
    {
        display: "Giới thiệu",
        path: "/about"
    },
    {
        display: "Liên hệ",
        path: "/about"
    },
    {
        display: "Tuyển dụng",
        path: "/about"
    },
    {
        display: "Tin tức",
        path: "/about"
    },
    {
        display: "Hệ thống của hàng",
        path: "/about"
    },
]

const footerCustomerLinks = [
    {
        display: "Chính sách đổi trả",
        path: "/about"
    },
    {
        display: "Chính sách bảo hành",
        path: "/about"
    },
    {
        display: "Chính sách hoàn tiền",
        path: "/about"
    },
]

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <Grid col={4} mdCol={2} smCol={1} gap={10}>
                    <div>
                        <div className="footer__title">
                            Tổng đài hỗ trợ
                        </div>
                        <div className="footer__content">
                            <p>
                                Liên hệ đặt hàng <strong>+84 968 0230 50</strong>
                            </p>
                            <p>
                                Thắc mắc đơn hàng <strong>+84 968 0230 50</strong>
                            </p>
                            <p>
                                Góp ý, khiếu nại <strong>+84 968 0230 50</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Về BTN Shop
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Chăm sóc khách hàng
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer__logo" alt="" />
                            </Link>
                        </p>
                        {/* <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis placeat laborum 
                            repellat, optio accusantium quo recusandae sapiente tenetur quidem. Est cumque enim !
                        </p> */}
                        <div className="footer__about__payments">
                            <img src={imgPay1} alt="" />
                            <img src={imgPay2} alt="" />
                            <img src={imgPay3} alt="" />
                            <img src={imgPay4} alt="" />
                            <img src={imgPay5} alt="" />
                        </div>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
