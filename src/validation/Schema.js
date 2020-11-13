import * as yup from 'yup'

export default yup.object().shape({
    name: yup
    .string()
    .required('name is required')
    .min(2, 'name must be at least 3 characters long.'),
    size: yup.string().required('size is required'),
    veggies: yup
    .boolean(),
    cheese: yup
    .boolean(),
    pepperoni: yup
    .boolean(),
    sausage: yup
    .boolean(),
    instructions: yup
    .string(),
  
})