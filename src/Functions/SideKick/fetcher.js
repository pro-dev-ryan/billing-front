import axios from "axios";

export const infos = async () => {
  const fetch = await axios.get(
    " https://billing-backend-eight.vercel.app/api/billing-list"
  );

  return fetch?.data;
};
export const infosDelete = async (id) => {
  const fetch = await axios.delete(
    ` https://billing-backend-eight.vercel.app/api/delete-billing${id}`,
    {
      method: "DELETE",
    }
  );

  return fetch?.data;
};
export const infosUpdate = async (id, body) => {
  const fetch = await axios.put(
    ` https://billing-backend-eight.vercel.app/api/update-billing/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  return fetch?.data;
};
export const addInfos = async (body) => {
  const fetch = await axios.post(
    ` https://billing-backend-eight.vercel.app/api/add-billing`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  return fetch?.data;
};
