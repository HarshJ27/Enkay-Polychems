// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.querySelector(".mail_section_1");

//     function sendEmail(e) {
//         e.preventDefault();

//         emailjs
//             .sendForm("service_x4jf8t3", "template_0ro4evn", form, "CLocNTUkD5fypeg0n")
//             .then(
//                 (result) => {
//                     console.log(result.text);
//                     console.log("message sent");
//                     form.reset();
//                 },
//                 (error) => {
//                     console.log(error.text);
//                 }
//             );
//     }

//     form.addEventListener("submit", sendEmail);
// });

function sendEmail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }

    const serviceId = "service_x4jf8t3";
    const templateId = "template_0ro4evn";

    emailjs.send(serviceId, templateId, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("Your message has been sent successfully!!!");
            }
        )
        .catch((err) => console.log(err));

}

