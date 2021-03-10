import refs from '../../utils/refs';
import closePopup from './close';
import renderEvent from '../table/renderEvent';
import ServerSingleton from '../../server/singleton';

refs.form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formDate = new FormData(refs.form);
  const obj = {};

  formDate.forEach((value, name) => {
    obj[name] = value;
  });

  const json = { data: `${JSON.stringify(obj)}` };

  ServerSingleton.findAllData()
    .then((parsedResponse) => {
      if (parsedResponse == null) {
        ServerSingleton.createData(json)
          .then((data) => {
            renderEvent(data);
            closePopup();
          })
          .catch(alert);
      }

      const arrData = parsedResponse.filter((item) => !item.data === 'string');

      const checkData = arrData.some((item) => {
        const objData = JSON.parse(item.data);
        return obj.day === objData.day && obj.time === objData.time;
      });

      if (checkData) {
        alert('Failed to create an event. Time slot is already booked');
      }

      if (!checkData) {
        ServerSingleton.createData(json)
          .then((data) => {
            renderEvent(data);
            closePopup();
          })
          .catch(alert);
      }
    });
});
