import axios from 'axios';

const API_URL = 'http://localhost:8085/doctor/';

class DoctorService {
  getAll() {
    return axios.get(API_URL + 'findAll');
  }

  getById(id) {
      return axios.get(API_URL + id)
  }

  delete(id) {
    return axios.delete(API_URL + id);
  }

  update(doctor) {
    var data = JSON.stringify(doctor);
    console.log(data);
    return axios.put(API_URL, data, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
      }
    });
  }

  add(doctor) {
    var data = JSON.stringify(doctor);
    console.log(data);
    return axios.post(API_URL + "add", data, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
      }
    });
  }

}

export default new DoctorService();