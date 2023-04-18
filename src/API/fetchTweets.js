import axios from "axios";

const BASE_URL = `https://63938b9811ed187986b8f487.mockapi.io/api/v1`;

export async function fetchUser(id) {
  const url = `${BASE_URL}/user/${id}`;

  const { data } = await axios.get(url);
  return data;
}

export async function updateUser(id, credentials) {
  const url = `${BASE_URL}/user/${id}`;

  const { data } = await axios.put(url, credentials);
  return data;
}

export async function fetchTweets(page = 1) {
  const url = `${BASE_URL}/users/?page=${page}&limit=10`;

  const { data } = await axios.get(url);
  return data;
}

export async function updateTweets(id, credentials) {
  const url = `${BASE_URL}/users/${id}`;

  const { data } = await axios.put(url, credentials);
  return data;
}

export async function fetchFollowedTweets() {
  const url = `${BASE_URL}/users`;

  const { data } = await axios.get(url);
  return data;
}
