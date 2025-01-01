import React from "react"
import {EnquiryFormValidation} from "../../services/lib/FormikYup/index"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
const EnquirySection = () => {

    const onSubmit = async (values, { setSubmitting, resetForm }) => {
        console.log("enquery value", values);
        resetForm()
        try {
            const response = await axios.post('http://localhost:5050/api/users/enquiry', values);
            toast.success("Message sent successfully! 👌");
            resetForm()
        } catch (error) {
            toast.error("Message send failed. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div
            className="w-full bg-cover py-4 bg-center bg-no-repeat font-sans mt-[3rem] "
            style={{ backgroundImage: `url("images/Homepage/enquirywallpaper1.jpg")` }} // Set the background image dynamically
        >
            <div className="w-full sm:w-[90%] m-auto flex items-center justify-center md:justify-start">

                <Formik
                    initialValues={EnquiryFormValidation.initialValues}
                    validationSchema={EnquiryFormValidation.validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="bg-black bg-opacity-50 w-full max-w-lg m-4 p-4 sm:p-6 rounded-3xl shadow-lg flex flex-col items-center">
                            <h1 className="text-2xl sm:text-3xl text-white font-extrabold mb-6">Enquiry Form</h1>

                            {/* Name Field */}
                            <Field
                                name="name"
                                placeholder="Name"
                                type="text"
                                className="h-12 w-[95%] sm:w-[90%] mb-4 rounded-md px-2 sm:px-4 outline-none text-[#088395]"
                            />
                            <ErrorMessage name="name" component="div" className="text-red-500 text-sm mb-2" />

                            {/* Phone Field */}
                            <Field
                                name="phone"
                                placeholder="Phone"
                                type="text"
                                className="h-12 w-[95%] sm:w-[90%] mb-4 rounded-md px-2 sm:px-4 outline-none text-[#088395]"
                            />
                            <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mb-2" />

                            {/* Course Field */}
                            <Field
                                name="course"
                                as="select"
                                className="h-12 w-[95%] sm:w-[90%] mb-4 rounded-md px-2 sm:px-4 outline-none text-[#088395]"
                            >
                                <option value="">Choose Course</option>
                                <option value="BBA">BBA</option>
                                <option value="BCA">BCA</option>
                                <option value="B.Tech">B.Tech</option>
                                <option value="MBA">MBA</option>
                                <option value="MCA">MCA</option>
                                <option value="M.Tech">M.Tech</option>
                                <option value="B.VOC">B.VOC</option>
                                <option value="Polytechnic">Polytechnic</option>
                                <option value="Polytechnic Diploma">Polytechnic Diploma</option>
                                <option value="BBA Digital Marketing">BBA Digital Marketing</option>
                            </Field>
                            <ErrorMessage name="course" component="div" className="text-red-500 text-sm mb-2" />

                            {/* Message Field */}
                            <Field
                                name="message"
                                as="textarea"
                                placeholder="Type Message"
                                className="h-32 w-[95%] sm:w-[90%] mb-4 rounded-md px-2 sm:px-4 py-2 outline-none text-[#088395] resize-none"
                            />
                            <ErrorMessage name="message" component="div" className="text-red-500 text-sm mb-2" />

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-[#088395] hover:bg-[#37b7c3] text-white px-6 py-2 font-bold text-lg rounded-md transition duration-300"
                            >
                                {isSubmitting ? 'Submitting...' : 'Enroll Now →'}
                            </button>
                        </Form>
                    )}
                </Formik>



                {/* <form className="bg-black bg-opacity-50 w-full max-w-lg m-4 p-4 sm:p-6 rounded-3xl shadow-lg flex flex-col items-center">
                    <h1 className="text-2xl sm:text-3xl text-white font-extrabold mb-6">Enquiry Form</h1>
                    <input
                        placeholder="Name"
                        type="text"
                        className="h-12 w-[95%] sm:w-[90%] mb-4 rounded-md px-2 sm:px-4 outline-none text-[#088395]"
                    />
                    <input
                        placeholder="Phone"
                        type="number"
                        className="h-12 w-[95%] sm:w-[90%] mb-4 rounded-md px-2 sm:px-4 outline-none text-[#088395]"
                    />
                    <select
                        className="h-12 w-[95%] sm:w-[90%] mb-4 rounded-md px-2 sm:px-4 outline-none text-[#088395]"
                    >
                        <option className="">Choose Course</option>
                        <option className="text-black">BBA</option>
                        <option className="text-black">BCA</option>
                        <option className="text-black">B.Tech</option>
                        <option className="text-black">MBA</option>
                        <option className="text-black">MCA</option>
                        <option className="text-black">M.Tech</option>
                        <option className="text-black">B.VOC</option>
                        <option className="text-black">Polytechnic</option>
                        <option className="text-black">Polytechnic Diploma</option>
                        <option className="text-black">BBA Digital Marketing</option>
                    </select>
                    <textarea
                        placeholder="Type Message"
                        className="h-32 w-[95%] sm:w-[90%] mb-4 rounded-md px-2 sm:px-4 py-2 outline-none text-[#088395] resize-none"
                    ></textarea>
                    <button
                        className="bg-[#088395] hover:bg-[#37b7c3] text-white px-6 py-2 font-bold text-lg rounded-md transition duration-300"
                    >
                        Enroll Now &rarr;
                    </button>
                </form> */}
            </div>
        </div>

    )
}
export default EnquirySection;