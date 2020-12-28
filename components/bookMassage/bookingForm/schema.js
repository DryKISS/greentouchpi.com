/**
 * Schema
 */

// Yup
import { object, string } from 'yup'

export const schema = object().shape({
  dateTime: string().required('Enter a data and time'),
  email: string()
    .email('Email is not valid')
    .required('Email is required'),
  fullName: string().required('Full name is required'),
  mobileNumber: string().required('Mobile Number is required'),
  notes: string().required('Notes is required'),
  treatment: string().required('Select a treatment')
})
