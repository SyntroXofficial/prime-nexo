export const STAFF_CREDENTIALS = {
  pin: '94721630587194658234',
  password: 'P9x$M2a7!Lk#T4b@Xq8C'
};

export const validateStaffCredentials = ({ pin, password }) => {
  return pin === STAFF_CREDENTIALS.pin && password === STAFF_CREDENTIALS.password;
};