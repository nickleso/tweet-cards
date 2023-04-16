import axios from "axios";

const BASE_URL = `https://63938b9811ed187986b8f487.mockapi.io/api/v1`;

export async function fetchUsers() {
  const url = `${BASE_URL}/users`;

  const { data } = await axios.get(url);
  console.log(data);
  return data;
}

export async function updateUser(id, credentials) {
  const url = `${BASE_URL}/users/${id}`;

  const { data } = await axios.put(url, credentials);
  console.log("put", data);
  return data;
}
