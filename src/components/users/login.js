import refs from '../../utils/refs';
import User from './user';
import Admin from './admin';
import userArr from './addUsers';
import openPopup from '../formEvent/open';
import removeEvent from '../table/removeEvent';

function login(e) {
  e.preventDefault();
  refs.bntOpenPopupAddEvent.removeEventListener('click', openPopup);
  refs.table.removeEventListener('click', removeEvent);
  refs.bntOpenPopupAddEvent.disabled = true;
  refs.bntOpenPopupAddEvent.classList.remove('is-active');
  refs.table.classList.remove('is-active');
  User.filter();

  const { value } = e.target.previousElementSibling;
  const searchUser = userArr.find((user) => user.name === value);

  const userName = searchUser.name;
  const { infoUser } = refs;
  if (searchUser instanceof User) {
    infoUser.children[0].textContent = 'User:';
  }

  if (searchUser instanceof Admin) {
    infoUser.children[0].textContent = 'Admin:';
  }

  infoUser.children[1].textContent = userName;

  if (searchUser instanceof Admin) {
    refs.bntOpenPopupAddEvent.disabled = false;
    refs.bntOpenPopupAddEvent.classList.add('is-active');
    refs.table.classList.add('is-active');
    Admin.addEvent();
    Admin.removeEvent();
  }
  refs.popupLogin.classList.remove('is-open');
}

export default login;
