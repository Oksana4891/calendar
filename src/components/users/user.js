import refs from "../../utils/refs";
import filterMember from '../table/filterMember';

class User  {

   constructor(name){
       this.name=name;      
   }

    filter () {
        refs.filterParticipants.addEventListener('change', filterMember);
    }

   render() {
      const optionFilterSelector = document.createElement('option');
      const optionLoginSelector = document.createElement('option');
      const div = document.createElement('div');
             optionFilterSelector.value= `${this.name}`;
             optionLoginSelector.textContent=`${this.name}`;
             optionLoginSelector.value= `${this.name}`;
             optionFilterSelector.textContent=`${this.name}`;
             div.textContent=`${this.name}`;
             refs.filterParticipants.appendChild(optionFilterSelector);
             refs.selectorUser.appendChild(optionLoginSelector);
             refs.participantsBlock.appendChild(div);
   }

}


export default User;