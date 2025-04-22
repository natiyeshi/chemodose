import * as yup from 'yup';

const productValidationSchema = yup.object().shape({
  name: yup.string().required('Image is required'),
  desc: yup.string().required('Tag is required'),
});

export default productValidationSchema;