window.addEventListener("load", function () {

    const form = $(".form-submit");

    form.addEventListener('submit',formSend);

    async function formSend(e) {
        e.preventDefault();
        let formData = new FormData(form);

        let response = await fetch('sendMail.php', {
            method:"POST",
            body: formData
        });
        if (response.ok) {
            let result = await response.json();
            alert("ok");
            form.reset();
        } else {
            alert("error")
        }


    }
    //
    // form.addEventListener('submit', async function (event) {
    //     event.preventDefault();
    //     const formData = new FormData(this);
    //     fetch("",
    //         {
    //             method: "POST",
    //             body: formData,
    //         })
    //         .then(function (res) {
    //             return res.json();
    //         })
    //         .then(function (data) {
    //             document.querySelector(".form-submit").reset();
    //
    //             document.querySelector(".modal-thank-title").innerHTML = data.title;
    //             document.querySelector(".modal-thank-desc").innerHTML = data.desc;
    //             document.querySelector(".modal-thank").classList.add('active');
    //             document.querySelector(".overflow-modal").classList.add('active');
    //         })
    // });

    // const formClose = document.querySelectorAll (".overflow-modal");
    // formClose.forEach(function (close) {
    //     close.addEventListener('click', (event) => {
    //         document.querySelector('.modal-thank').classList.remove("active");
    //         document.querySelector('.overflow-modal').classList.remove("active");
    //     })
    // });
});

