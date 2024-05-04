import * as nodemailer from 'nodemailer';
import { htmlResetPassword } from '../html';
import { timeExpResetPassword } from '../constant';
import { senderEmail } from '../constant';
import { senderPassword } from '../constant';
import { urlResetPassword } from '../constant';
import { senderName } from '../constant';


const sendMailResetPassword = async (receiverMail: string, token: string) => {
  try {
    const to = receiverMail;
    const subject = 'Password Reset';
    const text = 'Password Reset';

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: senderEmail,
        pass: senderPassword,
      },
    });

    let linkReset = urlResetPassword + token;

    const message = {
      from: `"${senderName}" <${senderEmail}>`,
      to,
      subject,
      text,
      html: htmlResetPassword(linkReset, parseInt(timeExpResetPassword)),
    };

    const sendresetpassword = await transporter.sendMail(message);

    console.log(sendresetpassword);

    if (sendresetpassword) {
      return sendresetpassword;
    } else {
      return null;
    }
  } catch (error) {
    console.log('Error at send mail reset password.....');
    console.log(error);
    return null;
  }
};

exports = {
  sendMailResetPassword,
};
