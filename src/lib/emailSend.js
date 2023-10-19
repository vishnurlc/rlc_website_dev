import emailjs from '@emailjs/browser';

export const sendEmail = async ({ data, membership }) => {
  return await emailjs
    .send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICEID,
      membership
        ? process.env.NEXT_PUBLIC_EMAILJS_MEMEBERSHIPTEMPLATEID
        : process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID,
      data,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLICID
    )
    .then(
      (response) => {
        return 'success';
      },
      (err) => {
        return 'error';
      }
    );
};
