import User from "./user";
import refs from "../../utils/refs";
import openPopup from "../formEvent/open";
import removeEvent from "../table/removeEvent";


class Admin extends User {

    constructor(name) {
        super(name);
    }
    
   addEvent(){
    refs.bntOpenPopupAddEvent.addEventListener('click', openPopup);
   }

   removeEvent(){
    refs.table.addEventListener('click', removeEvent);
   }
}

export default Admin;