import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { removeAll } from '../redux/shopping-cart/cartItemsSlide'

import { Link } from 'react-router-dom'

import { useAuth0 } from "@auth0/auth0-react"

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Helmet from '../components/Helmet'
import CartItem from '../components/CartItem'

// import { ProfileInfo } from '../components/User'

import productData from '../assets/fake-data/products'
import numberWithCommas from '../utils/numberWithCommas'

import Swal from 'sweetalert2'

export const Checkout = () => {
    const { checkout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <Button size="large" variant="contained" color="success" onClick={checkout}>
                Thanh Toán
            </Button>
        )
    );
};

const Cart = () => {

    const dispatch = useDispatch()

    const cartItems = useSelector((state) => state.cartItems.value)

    const [cartProducts, setCartProducts] = useState(productData.getCartItemsInfo(cartItems))

    const [totalProducts, setTotalProducts] = useState(0)

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setCartProducts(productData.getCartItemsInfo(cartItems))
        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
        setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
    }, [cartItems])

    const clearCart = () => {
        dispatch(removeAll());

        Swal.fire(
            'Cám ơn bạn đã mua hàng 😊',
            // <ProfileInfo/>,
            'Thanh toán thành công 👍',
            'success'
        );
    }
    

    return (
        <Helmet title="Giỏ hàng">
            <div className="cart">
                <div className="cart__info">
                    <div className="cart__info__txt">
                        <p>
                            Bạn đang có {totalProducts} sản phẩm trong giỏ hàng
                        </p>
                        <div className="cart__info__txt__price">
                            <span>Thành tiền:</span> <span>{numberWithCommas(Number(totalPrice))}đ</span>
                        </div>
                    </div>
                    <div className="cart__info__btn">
                        <Stack spacing={2} direction="row">
                            <div  onClick={() => clearCart()}>
                                <Checkout/>
                            </div>
                            <Link to="/catalog">
                                <Button size="large" variant="contained">
                                    Tiếp tục mua hàng
                                </Button>
                            </Link>
                        </Stack>
                    </div>
                </div>
                <div className="cart__list">
                    {
                        cartProducts.map((item, index) => (
                            <CartItem item={item} key={index}/>
                        ))
                    }
                </div>
            </div>
        </Helmet>
    )
}

export default Cart