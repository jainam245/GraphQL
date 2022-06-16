import axios from "axios";

const KEY = "AIzaSyCB8ysjR9GW6iH7diWzcFhxCqGkJVtCvik";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
