import  removeEventServer from "../../server/removeData";

function removeEvent(event) {
    if (event.target.classList.contains('js-remove')) {
        const id = event.target.parentNode.id;
        const blockEvent=event.target.parentNode;
        const nameEvent = event.target.previousElementSibling.innerText;
        if (confirm(`Are you sure you want to delete ${nameEvent} event`)) {
            removeEventServer(id);
            blockEvent.remove();
        }
    }
}


export default removeEvent;