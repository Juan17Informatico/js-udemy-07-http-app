import html from "./render-modal.html?raw";
import "./render-modal.css";
let modal, form;

//TODO: cargar usuario por id
export const showModal = () => {
    modal?.classList.remove("hide-modal");
};

export const hideModal = () => {
    //TODO: reset del fomulario
    modal?.classList.add("hide-modal");
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const renderModal = (element) => {
    if (modal) return;

    modal = document.createElement("div");
    modal.innerHTML = html;
    modal.className = "modal-container hide-modal";

    form = modal.querySelector("form");

    modal.addEventListener("click", (e) => {
        if (e.target.className === "modal-container") {
            hideModal();
        }
    });

    form.addEventListener("submit", (e) => {
        event.preventDefault();

        console.log('Formulario enviado');
    });

    element.append(modal);
};
