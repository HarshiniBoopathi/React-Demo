import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';

const RegistrationPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post('https://reqres.in/api/register', values);
        Swal.fire('Success', 'Registration successful', 'success');
      } catch (error) {
        Swal.fire('Error', 'Registration failed', 'error');
      }
    },
  });

  return (
    <div className="login-container">
                    <div className="login-card">
      <h2>Register</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
    </div>
  );
};

export default RegistrationPage;
