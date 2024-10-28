import css from './ReserveForm.module.css';

import { useId } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import toast from 'react-hot-toast';

import * as Yup from 'yup';

import DatePickerField from '../DatePickerField/DatePickerField';
import Button from '../Button/Button';

const ReserveSchema = Yup.object().shape({
  name: Yup.string().required('Name is required.'),
  email: Yup.string()
    .email('Email is not valid.')
    .required('Email is required.'),
  date: Yup.date('Date must be in future.').required(
    'Booking date is required.'
  ),
  comment: Yup.string(),
});

const ReserveForm = ({ camperName }) => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const dateFieldId = useId();
  const commentFieldId = useId();

  const handleSubmit = (_, actions) => {
    toast.success(`${camperName} reserved successfully!`);
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <div>
        <h3 className={css.header}>Book your campervan now</h3>
        <p className={css.note}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          date: '',
          comment: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={ReserveSchema}
      >
        <Form className={css.form}>
          <div className={css['field-container']}>
            <Field
              type="text"
              name="name"
              className={css.field}
              id={nameFieldId}
              placeholder={'Name*'}
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css['field-container']}>
            <Field
              type="text"
              name="email"
              className={css.field}
              id={emailFieldId}
              placeholder={'Email*'}
            />
            <ErrorMessage className={css.error} name="email" component="span" />
          </div>
          <div className={css['field-container']}>
            <DatePickerField
              className={css.field}
              name="date"
              placeholderText={'Booking date*'}
              id={dateFieldId}
            />
            <ErrorMessage className={css.error} name="date" component="span" />
          </div>
          <div className={css['field-container']}>
            <Field
              component="textarea"
              rows="4"
              type="text"
              name="comment"
              className={css.field}
              id={commentFieldId}
              placeholder={'Comment'}
            />
            <ErrorMessage
              className={css.error}
              name="comment"
              component="span"
            />
          </div>
          <Button className={css.submit} type={'submit'} text={'Send'} />
        </Form>
      </Formik>
    </div>
  );
};

export default ReserveForm;
