window.addEventListener("load", function () {
    document.querySelector(".form-submit").addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(this);
        fetch("/ajax/feedback/feedback/",
            {
                method: "POST",
                body: formData,
            })
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                document.querySelector(".form-submit").reset();

                document.querySelector(".modal-thank-title").innerHTML = data.title;
                document.querySelector(".modal-thank-desc").innerHTML = data.desc;
                document.querySelector(".modal-thank").classList.add('active');
                document.querySelector(".overflow-modal").classList.add('active');
            })
    });

    const formClose = document.querySelectorAll (".overflow-modal");
    formClose.forEach(function (close) {
        close.addEventListener('click', (event) => {
            document.querySelector('.modal-thank').classList.remove("active");
            document.querySelector('.overflow-modal').classList.remove("active");
        })
    });
});

