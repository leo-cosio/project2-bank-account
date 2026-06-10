import axios from "axios";

const http = axios.create({
  baseURL: "https://api.bank.com",
});

export async function loginUser(user) {
  const { data } = await http.post("/login", user);
  return data;
}
