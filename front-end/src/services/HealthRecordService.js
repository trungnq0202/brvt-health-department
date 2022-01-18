import axios from 'axios';

const API_URL = 'http://localhost:8087/health-report/';

class HealthRecordService {

  getById(id) {
      return axios.get(API_URL + id)
  }

  getByPatientId(id) {
    return axios.get(API_URL + "findAllByPatientId/" + id)
  }

  delete(id) {
    return axios.delete(API_URL + id);
  }

  update(report) {
    var data = JSON.stringify(report);
    console.log(data);
    return axios.put(API_URL, data, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
      }
    });
  }

  add(report) {
    var data = JSON.stringify(report);
    console.log(data);
    return axios.post(API_URL + "add", data, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
      }
    });
  }

}

export default new HealthRecordService();