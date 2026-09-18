/* =========================================================
   ANIMAÇÃO DOS CARDS AO ENTRAR NA PÁGINA
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const plans =
        document.querySelectorAll(".plan");


    plans.forEach((plan, index) => {

        setTimeout(() => {

            plan.classList.add("show");

        }, 180 * index);

    });


    /* =====================================================
       INTERAÇÃO DOS CARDS
    ====================================================== */

    plans.forEach((plan) => {

        plan.addEventListener("click", () => {

            /* Remove seleção dos outros */

            plans.forEach((item) => {
                item.classList.remove("selected");
            });


            /* Seleciona o card clicado */

            plan.classList.add("selected");


            /* Remove a seleção depois da animação */

            setTimeout(() => {

                plan.classList.remove("selected");

            }, 600);

        });

    });


    /* =====================================================
       WHATSAPP
    ====================================================== */

    const whatsapp =
        document.querySelector(".whatsapp");


    if (whatsapp) {

        whatsapp.addEventListener("mouseenter", () => {

            whatsapp.classList.add("attention");

        });


        whatsapp.addEventListener("animationend", () => {

            whatsapp.classList.remove("attention");

        });

    }


    /* =====================================================
       EFEITO SUAVE NO TÍTULO
    ====================================================== */

    const title =
        document.querySelector(".hero h1");


    if (title) {

        document.addEventListener("mousemove", (event) => {

            const x =
                (event.clientX / window.innerWidth - 0.5) * 5;

            const y =
                (event.clientY / window.innerHeight - 0.5) * 3;


            title.style.transform =
                `translate(${x}px, ${y}px)`;

        });

    }


    /* =====================================================
       EFEITO NOS CARDS COM O MOUSE
    ====================================================== */

    plans.forEach((plan) => {

        plan.addEventListener("mousemove", (event) => {

            const rect =
                plan.getBoundingClientRect();


            const mouseX =
                event.clientX - rect.left;


            const mouseY =
                event.clientY - rect.top;


            const rotateY =
                ((mouseX / rect.width) - 0.5) * 3;


            const rotateX =
                ((mouseY / rect.height) - 0.5) * -3;


            plan.style.transform =
                `translateY(-10px)
                 perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        });


        plan.addEventListener("mouseleave", () => {

            plan.style.transform = "";

        });

    });


    /* =====================================================
       MOVIMENTO SUTIL DO FOGO
    ====================================================== */

    const fires =
        document.querySelectorAll(".fire");


    fires.forEach((fire) => {

        fire.addEventListener("animationiteration", () => {

            const randomScale =
                0.96 + Math.random() * 0.08;


            fire.style.setProperty(
                "--fire-scale",
                randomScale
            );

        });

    });

});