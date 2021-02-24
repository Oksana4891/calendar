import refs from '../../utils/refs.js';
import removeDateEventInArr from '../arr/removeEventinArr';
import calendarArr from "../../utils/date.js";

let dragItem = null;


    refs.table.addEventListener('dragstart', dragAndDrop, false);
    refs.table.addEventListener('dragend', dragEnd, false);

function dragAndDrop(e) {
    dragItem = e.target;
    const cells = document.querySelectorAll('.js-cell');
    const cellEvent = dragItem.parentElement;
    const indexDayEvent = cellEvent.getAttribute('index-day');
    const indexTimeEvent = cellEvent.getAttribute('index-time');
    const event = calendarArr[indexDayEvent].time[indexTimeEvent];

    cells.forEach((item) => {
        if(item.childNodes.length==0); {
        item.addEventListener('dragover', dragOver, false);
        item.addEventListener('drop', dragDrop, false);
        item.addEventListener('dragenter', dragEnter, false);
        item.addEventListener('dragleave', dragLeave, false);
        }
        });

    function dragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }

    function dragEnter(e) {
        e.preventDefault();
        this.classList.add('over');      
    }


    function dragLeave(e) {
        e.preventDefault();
        this.classList.remove('over');     
    }

    function dragDrop(e) { 
        this.classList.remove('over');
        this.append(dragItem);
        const indexDayCopyEvent = this.getAttribute('index-day');
        const indexTimeCopyEvent = this.getAttribute('index-time');
        const copyEvent = calendarArr[indexDayCopyEvent].time[indexTimeCopyEvent];
        copyEvent.busy = true;
        copyEvent.participants = event.participants;
        copyEvent.event = event.event;
        removeDateEventInArr(indexDayEvent, indexTimeEvent);
        console.log(calendarArr);
    }
}


function dragEnd(e) {
    console.log("0987");
  dragItem = null;
}


