import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
  const options = {
    method: "GET",
    headers: {
      "User-Agent": "insomnia/8.4.5",
      Authorization: "Bearer " + STRAPI_API_TOKEN,
    },
  };

  const res = await fetch(`${API_URL}${endpoint}`, options);
  const data = await res.json();
  return data;
};
