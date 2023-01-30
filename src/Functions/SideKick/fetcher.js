import axios from "axios";

export const infos = async () => {
  const fetch = await axios.get("http://localhost:5000/api/billing-list");
  const res = await fetch.json();
  return res;
};
export const infosDelete = async (id) => {
  const fetch = await axios.delete(
    `http://localhost:5000/api/delete-billing${id}`,
    {
      method: "DELETE",
    }
  );
  const res = await fetch.json();
  return res;
};
export const infosUpdate = async (id, body) => {
  const fetch = await axios.get(
    `http://localhost:5000/api/update-billing/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  const res = await fetch.json();
  return res;
};
export const addInfos = async (body) => {
  const fetch = await axios.get(`http://localhost:5000/api/add-billing`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const res = await fetch.json();
  return res;
};
