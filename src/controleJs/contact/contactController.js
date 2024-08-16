// contactController.js

const getWhatsAppLink = (phoneNumber) => {
    const formattedNumber = encodeURIComponent(phoneNumber);
    return `https://wa.me/${formattedNumber}`;
};

const phoneNumber = '1234567890';
const whatsappLink = getWhatsAppLink(phoneNumber);

const sendEmail = (from, to, subject, body) => {
    return Email.send({
        SecureToken : "05af781f-2222-4b36-9365-22dccb69932e",
        To : 'jadjahouisso@gmail.com',
        From : from ,
        Subject : subject,
        Body : body
    }).then(
      message => alert(message)
    ).catch(
        error => {
            console.error('Error sending email:', error);
            throw error;
        }
    );
};

export { whatsappLink, sendEmail };
