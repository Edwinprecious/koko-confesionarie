'use strict';

const Name = document.getElementById('name').value
const email = document.getElementById('email').value
const Phone = document.getElementById('phone').value
const texthelp = document.getElementById('message').value
const msgAlt = 'Message successful';


let ebody = `<b>Name: </b> ${Name.value}
<br>
<b>Email: </b>${email.value}
</br>
<br>
<b>Phone: </b>${Phone.value}
</br>
<b>Message: </b>${texthelp.value}
`

function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "preciouse157@gmail.com",
    Password : "305B04AB25994BB08DCA3B53D6819C97CD2C",
    To : 'preciouse157@gmail.com',
    From : "preciouse157@gmail.com",
    Subject : texthelp.value + email.value,
    Body : ebody
}).then(
  message => alert(msgAlt)
);

Name.value = "";
email.value = "";
Phone.value = "";
texthelp.value = "";
}

// function sendEmail(){
//     Email.send({
//       //  Host : "smtp.elasticemail.com",
//       //  Username : "preciouse157@gmail.com",
//       //     Password : "**********4A4A3",
//         SecureToken : "2d4cd200-8124-4339-b67a-9d33c7c0e729",
//         To : 'preciouse157@gmail.com',
//         From : document.getElementById('email').value,
//         Subject : "order inquiry",
//         Body : "Name: " + document.getElementById('name').value
//             + "<br> Email: "  + document.getElementById('email').value
//             + "<br> phone number: "  + document.getElementById('phone').value
//             + "<br> Message: "  + document.getElementById('message').value
//     }).then(
//       message => alert("Message sent succesfully")
//     );
// }


// function sendEmail(){
//   Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "username",
//     Password : "password",
//     To : 'them@website.com',
//     From : "you@isp.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );
// }


// Email.send({
//   SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
//   To : 'them@website.com',
//   From : "you@isp.com",
//   Subject : "This is the subject",
//   Body : "And this is the body"
// }).then(
// message => alert(message)
// );



// const contactForm = document.querySelector('form');

// contactForm.addEventListener('submit', e => {
//   e.preventDefault();
// })
