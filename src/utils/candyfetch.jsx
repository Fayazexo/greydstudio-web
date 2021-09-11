import axios from "axios"

const instance = axios.create({
  baseURL: "http://139.59.247.91/greydstudios",
})

export default instance
