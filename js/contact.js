document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".mail_section_1");

    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm("service_x4jf8t3", "template_0ro4evn", form, "CLocNTUkD5fypeg0n")
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                    form.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    }

    form.addEventListener("submit", sendEmail);
});
