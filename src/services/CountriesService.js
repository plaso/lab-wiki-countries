import http from "./BaseService";

export const getCountries = () => {
  return http.get("/all")
}