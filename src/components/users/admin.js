import User from './user';
import refs from '../../utils/refs';
import openPopup from '../formEvent/open';
import removeEvent from '../table/removeEvent';

class Admin extends User {
  constructor(name) {
    super(name);
  }

  static addEvent() {
    refs.bntOpenPopupAddEvent.addEventListener('click', openPopup);
  }

  static removeEvent() {
    refs.table.addEventListener('click', removeEvent);
  }
}

export default Admin;
