import axios from "axios";

// Function to fetch data from server based on the url and page number
export const fetchData = (url: string, page: number = 1) =>
  axios.get(`${url}&page=${page}`).then((res) => res.data);

// Function to add commas to a number
export const numberWithCommas = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
