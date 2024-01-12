import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 7Hyh0DUutshM7NpavmcDuR_kpT6cuJhlJftwa8e3xSODpzTdpsw970wetCkkUjd_QORRjK2rwrpOT8RlmyZnv6Q2x1OKMVWy3abz481HPhjE00MWHHa_j9ExDqiZZXYx",
  },
});
