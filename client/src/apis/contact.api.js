import axios from "axios";

export const getDB = async () => {
  const res = await axios.get("http://localhost:8000/");
  return res.data;
};

export const insertDB = async () => {

}
