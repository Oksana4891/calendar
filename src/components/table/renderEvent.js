import calendarArr from "../../utils/date";
import addEventToTable from './addEvent';


function renderEvent(data) {
    const parseData = JSON.parse(data.data);
    let indexDay = calendarArr.findIndex((item) => item.day == parseData.day);
    let indexTime = calendarArr[indexDay].time.findIndex((item) => item.hour == parseData.time);
    addEventToTable(indexDay, indexTime, parseData.event, data.id);
}

export default renderEvent;