import { TuitionActionTypes } from './TuitionTypes'

export const addTuition = tuition => ({
  type: TuitionActionTypes.ADD_TUITION,
  payload: tuition
});

export const payStudentTuition = tuitionPayment => ({
  type: TuitionActionTypes.PAY_STUDENT_TUITION,
  payload: tuitionPayment
});