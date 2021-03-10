import renderEvent from '../components/table/renderEvent';
import ServerSingleton from './singleton';

function renderAllEvents() {
  ServerSingleton.findAllData()
    .then((parsedResponse) => {
      console.log(parsedResponse);
      if (parsedResponse == null) {
        return;
      }
      parsedResponse.forEach((data) => {
        renderEvent(data);
      });
    })
    .catch((err) => console.warn(err));
}

export default renderAllEvents;
