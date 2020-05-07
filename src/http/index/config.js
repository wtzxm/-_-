import local from '../../util/local'
export default {
  name: "index",
  // baseUrl:"http://localhost:4000",
  api: {
    getIndexData: {
      url: "/getIndexData",
      method: "get",
      corsUrl: "/9999"
    },
  }
};
