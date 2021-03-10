import serverInstance from '../../server/singleton';

function removeEvent(event) {
  if (event.target.classList.contains('js-remove')) {
    const { id } = event.target.parentNode;
    const blockEvent = event.target.parentNode;
    const nameEvent = event.target.previousElementSibling.innerText;
    if (confirm(`Are you sure you want to delete ${nameEvent} event`)) {
      serverInstance.deleteData(id);
      blockEvent.remove();
    }
  }
}

export default removeEvent;
