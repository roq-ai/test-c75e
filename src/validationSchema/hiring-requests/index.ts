import * as yup from 'yup';

export const hiringRequestValidationSchema = yup.object().shape({
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  engineer_id: yup.string().nullable().required(),
});
