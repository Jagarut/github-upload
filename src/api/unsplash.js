import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID nyAsdkXQ9MTpV3Na8fAxnUvgy5RbcGaCzm_W6EO10Z0",
  },
});
