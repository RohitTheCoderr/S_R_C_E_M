import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { BsTelephoneFill } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaLocationDot, FaLocationPin, FaLocationPinLock } from "react-icons/fa6";
import {MessageFormValidation} from "../../services/lib/FormikYup/index"
import axios from 'axios';
import { toast } from 'react-toastify';

function Contact() {
    const onSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const response = await axios.post('http://localhost:5050/api/users/', values);
            // toast.promise(
            //     response, {
            //     pending: "Message sending..",
            //     success: "Message sent successfully..",
            //     reject: "Message can't be sent.."
            // }
            // )
            toast.success("Message sent successfully! 👌");
            resetForm()
        } catch (error) {
            toast.error("Message send failed. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <section className="w-full relative bg-cover py-4 bg-center bg-no-repeat font-sans "
                style={{ backgroundImage: `url("images/hostel2.jpg")` }} >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>

                <div className="h-auto w-full z-30 relative pt-8 ">
                    <div className="h-auto w-auto m-auto flex justify-around flex-wrap-reverse gap-4 ">
                        <div className="h-auto bg-white/5 backdrop-blur-lg rounded-lg py-2">
                            <div><h1 className="text-white text-[1rem] sm:text-xl md:text-2xl lg:text-[2rem] xl:text-[2.2rem] tracking-[0.18rem] sm:tracking-[0.25rem] lg:tracking-[0.3rem] xl:tracking-[0.4rem] font-semibold text-center underline capitalize">Contact information</h1></div>
                            <div className="h-auto w-[80%] m-auto sm:w-[70%] md:w-[30rem] sm:px-2 ">
                                <h1 className=" text-[1rem] sm:text-[1.5rem] md:text-2xl lg:text-2xl text-[#071952] pt-5  font-semibold uppercase">Campus</h1>
                                <div className="w-auto flex jusctify-center my-4 gap-4 ">
                                    <FaMobileAlt className="text-[15px] sm:text-[19px] md:text-[22px] lg:text-[24px] xl:text-[26px] text-white" />
                                    <span className="text-white text-[14px] sm:text-[18px] ">01275-298198/199 +91-9355249401,02,03,04</span>
                                </div>

                                <div className="w-auto flex jusctify-center my-4 gap-4 ">
                                    <AiOutlineMail className="text-[15px] sm:text-[19px] md:text-[22px] lg:text-[24px] xl:text-[26px] text-white" />
                                    <span className="text-white text-[14px] sm:text-[18px] ">info@srcem.ac.in</span>
                                </div>

                                <div className="w-auto h-auto flex jusctify-center gap-4 my-4">
                                    <span><FaLocationDot className=" text-[18px] sm:text-2xl text-white" /></span>
                                    <span className="text-white text-[14px] sm:text-[18px] ">70KM. Stone, Main Delhi-Mathura Road,NH-19 (Formerly Known as NH-2), Palwal, Faridabad, HR (India)</span>
                                </div>
                            </div>
                            <div className="h-auto w-[80%] m-auto sm:w-[70%] md:w-[30rem] sm:px-2">
                                <h1 className=" text-[1rem] sm:text-[1.5rem] md:text-2xl lg:text-2xl text-[#071952] pt-5  font-semibold uppercase">Head Office</h1>
                                <div className=" w-auto flex jusctify-center my-4 gap-4 ">
                                    <FaMobileAlt className="text-[15px] sm:text-[19px] md:text-[22px] lg:text-[24px] xl:text-[26px] text-white" />
                                    <span className="text-white text-[14px] sm:text-[18px] ">0129-2220808,+91-9355249401</span>
                                </div>

                                <div className=" w-auto flex jusctify-center my-4 gap-4 ">
                                    <AiOutlineMail className="text-[15px] sm:text-[19px] md:text-[22px] lg:text-[24px] xl:text-[26px] text-white" />
                                    <span className="text-white text-[14px] sm:text-[18px] ">admission@srcem.ac.in</span>
                                </div>

                                <div className=" w-auto flex jusctify-center my-4 gap-4 ">
                                <span><FaLocationDot className=" text-[18px] sm:text-2xl text-white" /></span>
                                    <span className="text-white text-[14px] sm:text-[18px] ">SCF-30P,Part-1 Market,Sector-16A,Faridabad-121002(Delhi-NCR) Haryana </span>
                                </div>
                            </div>
                        </div>

                        <div className="h-auto w-[28rem] flex flex-col items-center bg-white/5 backdrop-blur-lg rounded-lg py-2 ">
                            <h1 className="text-white text-[1rem] sm:text-xl md:text-2xl lg:text-[2rem] xl:text-[2.2rem]  tracking-[0.18rem] sm:tracking-[0.25rem] lg:tracking-[0.3rem] xl:tracking-[0.4rem] font-semibold underline capitalize">get in touch</h1>
                            <Formik
                                initialValues={MessageFormValidation.initialValues}
                                validationSchema={MessageFormValidation.validationSchema}
                                onSubmit={onSubmit}
                            >

                                {({ values, handleChange, handleBlur, isSubmitting }) => (
                                    <Form className="mt-1 sm:mt-2 md:mt-4 lg:mt-6 xl:mt-7 p-4 w-full rounded-lg">
                                        {/* Name Input */}
                                        <div>
                                            <Field
                                                type="text"
                                                name="name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                                placeholder="Name"
                                                className="h-[2rem] sm:h-[2.5rem] md:h-[2.7rem] lg:h-[3.2rem] xl:h-[3.5rem] w-full text-[14px] sm:text-[16px] md:text-[18px] lg:text-lg xl:text-lg rounded-sm sm:rounded-sm md:rounded-md lg:rounded-lg xl:rounded-lg pl-[4px] sm:pl-2 md:pl-3 lg:pl-4 xl:pl-4 mb-2 sm:mb-4"
                                            />
                                            <ErrorMessage
                                                name="name"
                                                component="div"
                                                className="text-red-600 text-sm"
                                            />
                                        </div>

                                        {/* Mobile Input */}
                                        <div>
                                            <Field
                                                type="number"
                                                name="phoneNo"
                                                value={values.phoneNo}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="Phone No."
                                                className=" h-[2rem] sm:h-[2.5rem] md:h-[2.7rem] lg:h-[3.2rem] xl:h-[3.5rem] w-full text-[14px] sm:text-[16px] md:text-[18px] lg:text-lg xl:text-lg rounded-sm sm:rounded-sm md:rounded-md lg:rounded-lg xl:rounded-lg pl-[4px] sm:pl-2 md:pl-3 lg:pl-4 xl:pl-4 mb-2 sm:mb-4"
                                            />
                                            <ErrorMessage
                                                name="phoneNo"
                                                component="div"
                                                className="text-red-600 text-sm"
                                            />
                                        </div>

                                        {/* Email Input */}
                                        <div>
                                            <Field
                                                type="text"
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="Email"
                                                className=" h-[2rem] sm:h-[2.5rem] md:h-[2.7rem] lg:h-[3.2rem] xl:h-[3.5rem]  w-full text-[14px] sm:text-[16px] md:text-[18px] lg:text-lg xl:text-lg rounded-sm sm:rounded-sm md:rounded-md lg:rounded-lg xl:rounded-lg pl-[4px] sm:pl-2 md:pl-3 lg:pl-4 xl:pl-4 mb-2 sm:mb-4" />

                                            <ErrorMessage
                                                name="email"
                                                component="div"
                                                className="text-red-600 text-sm"
                                            />
                                        </div>

                                        {/* Message Textarea */}
                                        <div>
                                            <Field
                                                name="message"
                                                value={values.message}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                as="textarea"
                                                placeholder="Your Message"
                                                className="h-32 sm:h-40 md:h-48 lg:56 xl:h-64 w-full text-[14px] sm:text-[16px] md:text-[18px] lg:text-lg xl:text-lg rounded-sm sm:rounded-sm md:rounded-md lg:rounded-lg xl:rounded-lg pl-[4px] sm:pl-2 md:pl-3 lg:pl-4 xl:pl-4 mb-2 sm:mb-4"
                                            />
                                            <ErrorMessage
                                                name="message"
                                                component="div"
                                                className="text-red-600 text-sm"
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="h-[2rem] sm:h-[2.5rem] md:h-[2.7rem] lg:h-[3.2rem] xl:h-[3.5rem] w-full sm:text-[18px] md:text-[20px] lg:text-lg xl:text-lg rounded-sm sm:rounded-sm md:rounded-md lg:rounded-lg xl:rounded-lg pl-4 border outline-none border-none font-bold bg-[#088395] hover:bg-[#37b7c3] uppercase text-white"
                                        >
                                            Send Message
                                        </button>

                                    </Form>
                                )}
                            </Formik>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact
