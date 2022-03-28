import React from "react";

import Helmet from "../components/Helmet";

import { useForm } from "react-hook-form";

import Swal from 'sweetalert2';


const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    const submitButton = () => {
        Swal.fire(
            'Cám ơn bạn đã đống góp ý kiến!',
            'Đã nhận thông báo!',
            'success'
        )
    }
    return (
        <Helmet title="Liên hệ">
            <div className="contact">
                <div className="contact__map">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15677.790516823941!2d106.63295707003861!3d10.776987456468065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ebb47f0d319%3A0xd52071007ec626ea!2zUGjDuiBUcnVuZywgVMOibiBQaMO6LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1633515842232!5m2!1svi!2s"
                        width="100%"
                        height={450}
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    />
                </div>
                <div className="contact__box">
                    <form
                        className="contact__box-me"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <h3>CONTACT ME</h3>
                        <div className="form-control">
                            <input
                                type="text"
                                placeholder="Name *"
                                id="name"
                                required
                                className={`form-control ${
                                    errors.name && "invalid"
                                }`}
                                {...register("name", {
                                    required: "Tên không hợp lệ",
                                })}
                                onKeyUp={() => {
                                    trigger("name");
                                }}
                            />
                            {errors.name && (
                                <small style={{color: 'red'}}>
                                    {errors.name.message}
                                </small>
                            )}
                            <input
                                type="email"
                                placeholder="Email *"
                                id="email"
                                required
                                className={`form-control ${
                                    errors.email && "invalid"
                                }`}
                                {...register("email", {
                                    required: "Email không hợp lệ",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address",
                                    },
                                })}
                                onKeyUp={() => {
                                    trigger("email");
                                }}
                            />
                            {errors.email && (
                                <small style={{color: 'red'}}>{errors.email.message}</small>
                            )}
                            <input
                                type="text"
                                placeholder="Title"
                                id="title"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                rows={10}
                                cols={50}
                                placeholder="Your Message *"
                                id="message"
                                required
                            />
                        </div>
                        <button type="submit" className="btn-send" required onClick={submitButton}>
                            SEND MESSAGE
                            <i className="bx bx-right-arrow-alt"></i>
                        </button>
                    </form>
                    <div className="contact__box-info">
                        <div className="box__item">
                            <div className="box__item-icon">
                                <i className="bx bxs-map"></i>
                            </div>
                            <div className="box__item-content">
                                <h4>Our Address</h4>
                                <p>
                                    Tan Phu District, <br /> HO CHI MINH City
                                </p>
                            </div>
                        </div>
                        <div className="box__item">
                            <div className="box__item-icon">
                                <i className="bx bxs-phone-call"></i>
                            </div>
                            <div className="box__item-content">
                                <h4>Our Phone</h4>
                                <p>Office: +84 968 0230 50</p>
                            </div>
                        </div>
                        <div className="box__item">
                            <div className="box__item-icon">
                                <i className="bx bx-mail-send"></i>
                            </div>
                            <div className="box__item-content">
                                <h4>Our Email</h4>
                                <p>buinghiemtrang@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Contact;
