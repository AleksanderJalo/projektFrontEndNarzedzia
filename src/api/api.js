import axios from "axios";

const klient = axios.create({
  baseURL: "https://api.openf1.org/v1",
  timeout: 5000,
});

const fetchCars = async () => {
  try {
    const response = await klient.get("/drivers");
    return response.data;
  } catch (error) {
    console.error("Blad w pobierniu danych", error);
    return;
  }
};
export default fetchCars;
