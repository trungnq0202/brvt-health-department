import axios from 'axios';

const API_URL = 'http://localhost:8086/patient/';

class AdminService {
  getAll() {
    return axios.get(API_URL + 'findAll');
  }

  getById(id) {
      return axios.get(API_URL + id)
  }

  delete(id) {
    return axios.delete(API_URL + id);
  }

  update(patient) {
    var data = JSON.stringify(patient);
    console.log(data);
    return axios.put(API_URL, data, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
      }
    });
  }

  add(patient) {
    var data = JSON.stringify(patient);
    console.log(data);
    return axios.post(API_URL + "add", data, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
      }
    });
  }

  updateAssignDoctor(patientId, doctorId) {
    return axios.post(API_URL + patientId + "/" + doctorId)
  }
}

export default new AdminService();