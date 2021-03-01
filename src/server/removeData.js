function removeEventServer(id) {
                fetch(`http://158.101.166.74:8080/api/data/oks_work/events/${id}`, {
                    method: 'DELETE',
                }).then(response => response.json())
                    .then(data => console.log(data))
                    .catch(err => console.warn(err));
            }

    export default removeEventServer;