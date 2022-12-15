import axios from "axios";
import { sleep } from "./sleep";
const fetchAxios = async (query, variables) => {
  try {
    const endpoint = "https://graphql-pokemon2.vercel.app/";
    const headers = {
      "content-type": "application/json"
    };
    const graphqlQuery = {
      query,
      variables
    };

    const {
      data: { data }
    } = await axios({
      url: endpoint,
      method: "post",
      headers: headers,
      data: graphqlQuery
    });

    await sleep();

    return data;
  } catch (error) {
    console.log("oops", error.message);
  }
};

export default fetchAxios;
