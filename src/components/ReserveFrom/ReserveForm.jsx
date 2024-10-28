import css from './ReserveForm.module.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import toast from 'react-hot-toast';

import * as Yup from 'yup';

const ReserveSchema = Yup.object().shape({
  name: Yup.string().required('Name is required.'),
  email: Yup.string().email().required('Email is required.'),
  date: Yup.date().required('Booking date is required.'),
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
            <Field
              type="text"
              name="date"
              className={css.field}
              id={dateFieldId}
              placeholder={'Booking date*'}
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
          <button type="submit" className={css.button}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ReserveForm;
