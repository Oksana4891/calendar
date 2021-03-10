import refs from '../../utils/refs.js';
import clearForm from './clearForm.js';

function closePopup() {
  refs.popup.classList.remove('is-open');
  clearForm(refs.form);
}

export default closePopup;
