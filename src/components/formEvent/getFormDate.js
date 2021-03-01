import refs from '../../utils/refs.js';
import closePopup from "../formEvent/close";
import serverApi from "../../server/infoServer";
import renderEvent from "../table/renderEvent";

refs.form.addEventListener('submit', e => {
    e.preventDefault();

    const formDate = new FormData(refs.form);
    const obj = {};

    formDate.forEach((value, name) => {
        obj[name] = value;
    });

    const json = { data: `${JSON.stringify(obj)}` };

    fetch(serverApi.getURL)
        .then(response => response.json())
        .then(parsedResponse => {
            if (parsedResponse == null) {
                fetch(serverApi.pushURL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(json),
                })
                    .then(response => response.json())
                    .then(data => {
                        renderEvent(data);
                        closePopup();
                    })
                    .catch(alert);
            }
            else {
                let arrData = parsedResponse.filter(item => {
                    if (item.data === 'string') {
                        return;
                    } else {
                        return item;
                    }
                });

                const checkData = arrData.some(item => {
                    const objData = JSON.parse(item.data);
                    return obj.day == objData.day && obj.time == objData.time;
                });

                if (checkData) {
                    alert('Failed to create an event. Time slot is already booked');
                }

                if (!checkData) {
                    fetch(serverApi.pushURL, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(json),
                    })
                        .then(response => response.json())
                        .then(data => {
                            renderEvent(data);
                            closePopup();
                        })
                        .catch(alert);
                }
            }
        });
});
