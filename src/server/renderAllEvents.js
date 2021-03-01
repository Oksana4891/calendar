import renderEvent from "../components/table/renderEvent";
import serverApi from "../server/infoServer";

function renderAllEvents() {
    fetch(serverApi.getURL)
        .then(response => response.json())
        .then(parsedResponse => {
             console.log(parsedResponse);
             if(parsedResponse==null) {
                 return;
             }
                parsedResponse.forEach(data => {
                    renderEvent(data);
                });
        
        })
        .catch(err => console.warn(err));
}


export default renderAllEvents;