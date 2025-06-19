(function () {
    emailjs.init({
        publicKey: "G6dZBXvlKDYPCF35B", 
    });
})();

window.addEventListener("load", function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        const form = this;

        emailjs.sendForm('service_gihgze9', 'template_mzlavxq', form)
            .then(() => {
                console.log("SUCCESS!");
                form.reset();
            }, (error) => {
                console.log("FAILED...", error);
            });
    });
});
