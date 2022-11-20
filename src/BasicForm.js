import { useFormik } from 'formik';
import * as yup from 'yup';

export function BasicForm() {

  const formValidationSchema = yup.object({
      email : yup.string().min(8, "Need a bigger email").required("Need email"),
      password : yup.string().min(5, "Need a bigger password").required("Need password").max(12, "Too much password"),
  })
  const formik = useFormik({
    initialValues : {
      email : "rishiraj@gmail.com",
      password : "rishi",
    },

    validationSchema : formValidationSchema,
    onSubmit : (values) => {
      console.log("your values are submitted", values);
    }
  })

  
  return (
    <form className = "basic-form" onSubmit = {formik.handleSubmit}>
      <input name="email" type="email" placeholder="Email" value={formik.values.email} onChange ={formik.handleChange} onBlur = {formik.handleBlur} />
      {formik.touched.email && formik.errors.email ? formik.errors.email : null}
      <input name="password" type="password" placeholder="password" value={formik.values.password} onChange ={formik.handleChange} onBlur = {formik.handleBlur} />
      {formik.touched.password && formik.errors.password ? formik.errors.password : null}
      <button type="submit">Submit</button>
    </form>
  );
}


//we can use alternatively line no 42 instead of using previous method

// export function BasicForm() {

//   const formValidationSchema = yup.object({
//       email : yup.string().min(8, "Need a bigger email").required("Need email"),
//       password : yup.string().min(5, "Need a bigger password").required("Need password").max(12, "Too much password"),
//   })
//   const {handleSubmit, values, handleChange, handleBlur, touched, errors} = useFormik({
//     initialValues : {
//       email : "rishiraj@gmail.com",
//       password : "rishi",
//     },

//     validationSchema : formValidationSchema,
//     onSubmit : (values) => {
//       console.log("your values are submitted", values);
//     }
//   })

  
//   return (
//     <form className = "basic-form" onSubmit = {handleSubmit}>
//       <input name="email" type="email" placeholder="Email" value={values.email} onChange ={handleChange} onBlur = {handleBlur} />
//       {touched.email && errors.email ? errors.email : null}
//       <input name="password" type="password" placeholder="password" value={values.password} onChange ={handleChange} onBlur = {handleBlur} />
//       {touched.password && errors.password ? errors.password : null}
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
