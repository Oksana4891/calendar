import refs from '../../utils/refs.js';
import removeDateEventInArr from '../arr/removeEventinArr';
import calendarArr from "../../utils/date.js";

function dragAndDrop(e) {
        const cells=document.querySelectorAll('.js-cell');
        const card = e.target;
        const cell = e.target.parentNode;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
        
        const indexDayEvent = cell.getAttribute('index-day');  
        const indexTimeEvent = cell.getAttribute('index-time');
        const event =calendarArr[indexDayEvent].time[indexTimeEvent];

        cells.forEach((cell) => {
            cell.addEventListener('dragover', dragOver);
            cell.addEventListener('drop', dragDrop);
            // cell.addEventListener('dragenter', dragEnter);
            // cell.addEventListener('dragleave', dragLeave);

        });

        function dragOver(e) {
            e.preventDefault();
        }

        function dragEnter(e) {
            e.preventDefault();
        }

        function dragLeave(e) {
            e.preventDefault();
        }

        function dragDrop(e) {
            e.stopPropagation();
            console.log(card);
            this.append(card);
            const indexDayCopyEvent = this.getAttribute('index-day');
            const indexTimeCopyEvent = this.getAttribute('index-time');
            const copyEvent = calendarArr[indexDayCopyEvent].time[indexTimeCopyEvent];
            copyEvent.busy=true;
            copyEvent.participants=event.participants;
            copyEvent.event=event.event;
            removeDateEventInArr(indexDayEvent, indexTimeEvent);
            console.log(calendarArr);

        }

    }

    


    







export default dragAndDrop;