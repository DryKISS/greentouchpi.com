import { yup } from '@drykiss/industry-ui'

export const schema = yup.object().shape({
  dateTime: yup.string(),
  fullName: yup.string().required('Full name is required'),
  email: yup
    .string()
    .email('Email is not valid')
    .required('Email is required'),
  mobileNumber: yup.string().required('Mobile Number is required'),
  notes: yup.string().required('Notes is required'),
  treatment: yup.string()
})
