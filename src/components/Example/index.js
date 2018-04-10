import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {
  TextInputField,
  RadioButtonField,
  SelectField,
  CheckboxField,
  TextAreaField,
} from '../../../luna-react/extensions/redux-form'
import {
  Form,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
} from '../../../luna-react'

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        component={TextInputField}
        placeholder="First Name"
        label="First Name"
      />
      <Field
        name="lastName"
        component={TextInputField}
        placeholder="Last Name"
        label="Last Name"
      />
      <Field
        name="email"
        component={TextInputField}
        placeholder="Email"
        label="Email"
        type="email"
      />
      <Field
        label="Sex"
        name="sex"
        component={RadioButtonField}
        options={[
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
        ]}
      />
      <Field
        label="Favorite Color"
        name="favoriteColor"
        component={SelectField}
        options={[
          { value: 'ff0000', label: 'Red' },
          { value: '00ff00', label: 'Green' },
          { value: '0000ff', label: 'Blue' },
        ]}
      />
      <Field
        name="employed"
        component={CheckboxField}
        options={[{ value: 'true', label: 'Employed' }]}
      />

      <Field label="Notes" name="notes" component={TextAreaField} />

      <ButtonGroup.Wrapper>
        <ButtonGroup.Primary>
          <PrimaryButton type="submit" disabled={pristine || submitting}>
            Submit
          </PrimaryButton>
        </ButtonGroup.Primary>
        <ButtonGroup.Secondary>
          <SecondaryButton
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </SecondaryButton>
        </ButtonGroup.Secondary>
      </ButtonGroup.Wrapper>
    </Form>
  )
}

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(SimpleForm)
