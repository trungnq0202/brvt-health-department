import axios from 'axios';

const API_URL = 'http://localhost:8088/blog/';

class BlogService {
  getAll() {
    return axios.get(API_URL + 'findAll');
  }

  getById(id) {
      return axios.get(API_URL + id)
  }

  delete(id) {
    return axios.delete(API_URL + id);
  }

  add(blog) {
    var data = JSON.stringify(blog);
    console.log(data);
    return axios.post(API_URL + "add", data, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
      }
    });
  }
}

export default new BlogService();