const DATA_API_URL = 'http://158.101.166.74:8080/api/data/oks_work/events';

class ServerSingleton {
  constructor() {
    if (!ServerSingleton.instance) {
      ServerSingleton.instance = this;
    }
    // Initialize object
    return ServerSingleton.instance;
  }

  static findAllData() {
    return fetch(DATA_API_URL)
      .then((response) => response.json());
  }

  static deleteData(dataId) {
    return fetch(`${DATA_API_URL}/${dataId}`, {
      method: 'DELETE',
    }).then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }

  static createData(data) {
    return fetch(DATA_API_URL, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }).then((response) => response.json());
  }
}

const serverInstance = new ServerSingleton();
export default ServerSingleton;
