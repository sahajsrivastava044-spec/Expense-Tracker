import axios from "axios";

const API_URL=`${import.meta.env.VITE_API_URL}/api/transactions`;

const getAuthConfig = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getTransactions=async()=>{
    const response=await axios.get(API_URL,getAuthConfig());
    return response.data.data;
};

export const createTransaction=async (transactionData)=>{
    const response = await axios.post(
        API_URL,
        transactionData,
        getAuthConfig(),
    );
    return response.data.data;
};

export const deleteTransaction=async(id)=>{
    await axios.delete(`${API_URL}/${id}`,getAuthConfig());
}