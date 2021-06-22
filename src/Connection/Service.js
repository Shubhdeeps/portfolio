
const axios = require("axios");
const baseURL = "https://shubhdeeps.herokuapp.com/api/notes"


const getData = (setProjects) => {

        axios
          .get(baseURL)
          .then(response => {
            console.log('promise fulfilled')
            setProjects(response.data)
          })
      
}

export default { 
    getData: getData
  }