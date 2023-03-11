import axios from "axios";

export const getUser = async (userId) => {
  try {
    const { data } = await axios.get(`users/${userId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
