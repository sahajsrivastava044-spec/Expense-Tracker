import axios from "axios";

const API_URL=`${import.meta.env.VITE_API_URL}/api/budgets`;

const getAuthConfig = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getBudget = async (month, year) => {
  const response = await axios.get(
    `${API_URL}?month=${month}&year=${year}`,getAuthConfig()
  );

  return response.data.data;
};

export const setBudget = async (budgetData) => {
  const response = await axios.post(
    API_URL,
    budgetData,
    getAuthConfig(),
  );

  return response.data.data;
};