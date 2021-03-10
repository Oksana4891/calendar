import calendarArr from './utils/date.js';
import createTableCells from './components/table/createTableCells.js';
import refs from './utils/refs.js';
import closePopup from './components/formEvent/close';
import './components/formEvent/getFormDate.js';
import addParticipants from './components/formEvent/addParticipants.js';
import removeParticipants from './components/formEvent/removeParticipants.js';
import login from './components/users/login';
import './components/users/addUsers';
import renderAllEvents from './server/renderAllEvents';

renderAllEvents();
createTableCells(calendarArr, refs.rowsTime);

window.onload = function () {
  refs.popupLogin.classList.add('is-open');
};

refs.btnClosePopupAddEvent.addEventListener('click', closePopup);
refs.btnCancelAddEvent.addEventListener('click', closePopup);
refs.bntAddParticipants.addEventListener('click', addParticipants);
refs.bntRemoveParticipants.addEventListener('click', removeParticipants);
refs.btnConfirmUser.addEventListener('click', login);
refs.btnChangeUser.addEventListener('click', popupLoginOpen);

function popupLoginOpen(e) {
  refs.popupLogin.classList.add('is-open');
}
