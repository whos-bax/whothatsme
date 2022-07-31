import axios from "axios";

export const getDB = async () => {
  const result = await axios.get("http://localhost:8000/");
  return result.data;
};

export const insertDB = async ({ form }) => {
  const reqBody = {
    title: form.title.value,
    message: form.message.value,
    name: form.name.value,
    password: Number(form.password.value),
  };
  const result = await axios.post("http://localhost:8000/insert", reqBody);
  return result;
};


export const updateDB = async ({ updateValue }) => {
  const reqBody = {
    _id: updateValue._id,
    title: updateValue.title,
    message: updateValue.message,
    name: updateValue.name,
  };
  const result = await axios.post("http://localhost:8000/update", reqBody);
  return result;
};

export const deleteDB = async ({ checkId }) => {
  const result = await axios.post("http://localhost:8000/delete", {
    id: checkId,
  });
  return result;
};
