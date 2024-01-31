// Importing the Axios library
import axios from "axios";

// Importing the backend URL from the config.json file
import config from "../config.json";

// Creating and exporting an instance of Axios with a baseURL

export default axios.create({
  baseURL: `${config.backendURL}/api`,
});
