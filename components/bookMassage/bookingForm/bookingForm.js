/**
 * Book Massage - Booking Form
 */
// React
import { useState } from 'react'

// Axios
import axios from 'axios'

// UI
import {
  Alert,
  Button,
  Column,
  DatePickerCalendar,
  FormError,
  FormField,
  Form,
  FormLabel,
  Row,
  SelectField,
  Space,
  TextareaField,
  useForm,
  yupResolver,
  formatDateStandard
} from '@drykiss/industry-ui'

import { schema } from './schema'

export const BookingForm = ({ defaultTreatment }) => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({
    type: '',
    text: ''
  })
  const { control, errors, handleSubmit, register, reset } = useForm({
    defaultValues: {
      treatment: defaultTreatment || ''
    },
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    setLoading(true)

    const formData = {
      ...data,
      dateTime: formatDateStandard(data.dateTime, true)
    }

    axios
      .post(process.env.NEXT_PUBLIC_BOOKING_FORM_SPREE_URL, formData)
      .then(() => {
        reset()
        setMessage({
          type: 'success',
          text: "Your booking was successfull. We'll get back to you as soon as possible."
        })
      })
      .catch(() => {
        setMessage({
          type: 'error',
          text: 'There was an error submitting the form. Please try again!'
        })
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const defaultProps = {
    errors: errors,
    register: register
  }

  const ErrMessage = message => <FormError message={message} />

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Column xs={12} md={12}>
          <FormLabel size='md' label='* Full name'>
            <FormField {...defaultProps} name='fullName' placeholder='Enter first and surname' />

            {errors.fullName && ErrMessage(errors.fullName.message)}
          </FormLabel>
        </Column>

        <Column xs={12} md={12}>
          <FormLabel size='md' label='* Mobile Number'>
            <FormField
              {...defaultProps}
              name='mobileNumber'
              placeholder='Enter your mobile phone number'
            />

            {errors.mobileNumber && ErrMessage(errors.mobileNumber.message)}
          </FormLabel>
        </Column>

        <Column xs={12} md={12}>
          <FormLabel size='md' label='* Email'>
            <FormField
              {...defaultProps}
              helperMessage="We'll never share your email with anyone else."
              name='email'
              placeholder='Enter email address'
            />

            {errors.email && ErrMessage(errors.email.message)}
          </FormLabel>
        </Column>

        <Column xs={12} md={12}>
          <FormLabel label='Treatment'>
            <SelectField
              {...defaultProps}
              options={[
                {
                  text: 'Please choose',
                  value: ''
                },
                {
                  text: 'Anti-Stress Swedish Massage',
                  value: 'Anti-Stress Swedish Massage'
                },
                {
                  text: 'Green Touch Signature Thai Massage',
                  value: 'Green Touch Signature Thai Massage'
                },
                {
                  text: 'Smoothing Hot Stone Massage',
                  value: 'Smoothing Hot Stone Massage'
                },
                {
                  text: 'Pregnancy Massage',
                  value: 'Pregnancy Massage'
                },
                {
                  text: 'Cellulite Massage',
                  value: 'Cellulite Massage'
                },
                {
                  text: 'Sports Massage',
                  value: 'Sports Massage'
                },
                {
                  text: 'Deep tissue Massage',
                  value: 'Deep tissue Massage'
                },
                {
                  text: 'Reflexology Massage',
                  value: 'Reflexology Massage'
                },
                {
                  text: 'Aromatherapy Massage',
                  value: 'Aromatherapy Massage'
                },
                {
                  text: 'Back, neck, shoulder',
                  value: 'Back, neck, shoulder'
                },
                {
                  text: 'Head Massage',
                  value: 'Head Massage'
                }
              ]}
              name='treatment'
            />
          </FormLabel>
        </Column>

        <Column xs={12} md={12}>
          <FormLabel label='Date and Time'>
            <DatePickerCalendar
              {...defaultProps}
              control={control}
              dateFormat='d MMM yyyy HH:mm'
              name='dateTime'
              showTimeSelect
            />
          </FormLabel>
        </Column>

        <Column xs={12} md={12}>
          <FormLabel label='* Notes'>
            <TextareaField
              {...defaultProps}
              name='notes'
              placeholder='Enter personal message or note'
              rows={2}
            />

            {errors.notes && ErrMessage(errors.notes.message)}
          </FormLabel>
        </Column>
      </Row>

      {message.text && (
        <>
          <Alert content={message.text} context={message.type} />

          <Space marginBottom='lg' />
        </>
      )}

      <Button content='Submit' disabled={loading} type='submit' />
    </Form>
  )
}
