/* =========================
   DATA
========================= */

let userName = "";

let clickCount = 0;

const maxClicks = 10;


/* =========================
   SCREEN NAVIGATION
========================= */

function showScreen(number) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove("active");

        });

    const target =
        document.getElementById(
            `screen${number}`
        );

    target.classList.add("active");
}


/* =========================
   SCREEN 1
========================= */

function goToNameScreen() {

    showScreen(2);

    setTimeout(() => {

        document
            .getElementById("nameInput")
            .focus();

    }, 500);
}


/* =========================
   SCREEN 2
========================= */

function submitName() {

    const input =
        document.getElementById(
            "nameInput"
        );

    const error =
        document.getElementById(
            "nameError"
        );

    const name =
        input.value.trim();


    /* Nama kosong */

    if (name === "") {

        error.textContent =
            "Namanya diisi dulu dong 😭";

        input.focus();

        return;
    }


    /* Nama terlalu pendek */

    if (name.length < 3) {

        error.textContent =
            "Yang bener dong, nama lengkapnya 😭";

        input.focus();

        return;
    }


    /* Simpan nama */

    userName = name;


    /* Masukkan nama ke surat */

    document
        .getElementById(
            "receiverName"
        )
        .textContent = userName;


    document
        .querySelector(
            ".name-placeholder"
        )
        .textContent = userName;


    error.textContent = "";


    /* Lanjut */

    showScreen(3);
}


/* =========================
   SCREEN 3
   ENVELOPE
========================= */

function openLetter() {

    if (
        clickCount >=
        maxClicks
    ) {
        return;
    }


    clickCount++;


    const counter =
        document.getElementById(
            "clickCounter"
        );

    counter.textContent =
        `${clickCount} / ${maxClicks}`;


    const envelope =
        document.getElementById(
            "envelope"
        );


    /* Animasi klik */

    envelope.style.transform =
        "scale(0.94) rotate(-1deg)";


    setTimeout(() => {

        envelope.style.transform =
            "scale(1)";

    }, 100);


    /* Setelah 10 klik */

    if (
        clickCount ===
        maxClicks
    ) {

        envelope.classList.add(
            "opened"
        );


        document
            .getElementById(
                "envelopeTitle"
            )
            .textContent =
            "Suratnya terbuka... 💌";


        document
            .getElementById(
                "clickInstruction"
            )
            .textContent =
            "Akhirnya. Ternyata kamu sabar juga. 😭";


        document
            .getElementById(
                "letterNextBtn"
            )
            .classList.remove(
                "hidden"
            );
    }
}


/* =========================
   SCREEN 4
========================= */

function goToLetter() {

    showScreen(4);

}


/* =========================
   SCREEN 5
========================= */

function goToFinal() {

    showScreen(5);

}


/* =========================
   FINAL ANSWER
========================= */

function answerQuestion() {

    const button =
        document.getElementById(
            "questionButton"
        );

    const answer =
        document.getElementById(
            "finalAnswer"
        );


    answer.textContent =
        "Makasih. Aku juga seneng jadi temanmu! ❤️";


    answer.classList.add(
        "show"
    );


    button.textContent =
        "🥹❤️";


    button.disabled =
        true;
}


/* =========================
   ENTER KEY
========================= */

document
    .getElementById("nameInput")
    .addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                submitName();

            }

        }
    );

    