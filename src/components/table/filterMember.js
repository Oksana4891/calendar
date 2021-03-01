import serverApi from "../../server/infoServer";

function filterMember(e) {
    const searchValue = e.target.value;
    const events = document.querySelectorAll('.js-card-event');
    showAllEvents(events);

    if (searchValue == 'All members') {
        return;
    }

    fetch(serverApi.getURL)
        .then(response => response.json())
        .then(parsedResponse => {
            if (parsedResponse == null) {
                return;
            }

            const filterMembersId = parsedResponse.filter(data => {
                const members = JSON.parse(data.data).participants;
                return members.indexOf(searchValue) !== -1;
            }).map(date => date.id);

            events.forEach(event => {
                if (filterMembersId.indexOf(event.id) == -1) {
                    event.style.opacity = '0';
                }
            });
        });
}


function showAllEvents(events) {
    events.forEach((item) => {
        item.style.opacity = '1';
    });
}

export default filterMember;