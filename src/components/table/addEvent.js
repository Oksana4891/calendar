function  addEventToTable (indexDay, indexTime, event, id) { 
    let cell = document.querySelector(`[index-day="${indexDay}"][index-time="${indexTime}"]`);
       const eventBlock = `
       <div class="calendar_cell js-card-event"  id='${id}'>
       <div class="calendar_cell--name">${event}</div>
       <div class="calendar_cell--close js-remove">&times;</div>
       </div>
      `;
   
    cell.insertAdjacentHTML('beforeend', eventBlock);  
    const eventBlockSelector = cell.querySelector('.js-card-event'); 
  }

export default  addEventToTable;  
  
 
