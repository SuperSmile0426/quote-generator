import axios from "axios";
import { MESSAGES } from "consts";
import dotenv from "dotenv";
import { Params } from "types/quote";

dotenv.config();

export const fetchRandomQuote = async (params: Params) => {
  try {
    const response = await axios.get("https://api.quotable.io/quotes/random", { params });
    return response.data;
  } catch (error) {
    throw new Error(MESSAGES.QUOTE_FETCH_FAILURE);
  }
};