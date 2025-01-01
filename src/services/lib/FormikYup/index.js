import * as Yup from 'yup';

export const MessageFormValidation = {
  initialValues: {
    name: '',
    phoneNo: '',
    email: '',
    message: '',
  },

  // Yup validation schema
  validationSchema: Yup.object({
    name: Yup.string().required('Name is required'),
    phoneNo: Yup.number()
      .required('phone number is required')
      .positive('phone number must be positive')
      .integer('phone number must be an integer')
      .min(10, 'phone number must be at least 10 digits'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    message: Yup.string().required('Message is required'),
  })
};


export const EnquiryFormValidation =  {
   initialValues : {
    name: '',
    phone: '',
    course: '',
    message: '',
  },

  validationSchema : Yup.object({
    name: Yup.string().required('Name is required'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    course: Yup.string().required('Please select a course'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .required('Message is required'),
  })}

  // Initial Values
  



export default {MessageFormValidation,EnquiryFormValidation};
