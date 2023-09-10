import * as yup from 'yup';

export const engineerValidationSchema = yup.object().shape({
  skills: yup.string().required(),
  experience: yup.string().required(),
  availability: yup.string().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
