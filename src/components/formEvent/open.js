// import refs from "../../utils/refs.js";

import refs from "../../utils/refs";

function openPopup(event) {
    event.preventDefault();
    refs.popup.classList.add('is-open');
}

export default openPopup;
