const axios = require("axios");

const api = {
  getUser(username) {
    // return axios.get(`https://api.github.com/users/${username}`);
    const queryURL = `https://api.github.com/users/${username}`;
    axios.get(queryURL)
      .then(function (res) {
        console.log(res.data);
      });

  }
};

module.exports = api;
