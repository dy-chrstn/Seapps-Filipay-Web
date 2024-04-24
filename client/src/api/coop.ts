import { BASE_URL } from "../contants/contants";
import tokenApi from "./token";

interface Coop {
  email: string;
  password: string;
  coopName: string;
  coopCode: string;
  pages: [];
  accountType: string;
}

const coopApi = {
  registerCoop: async (coop: Coop) => {
    try {
      const token = await tokenApi.getToken();
      const response = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.token}`,
        },
        body: JSON.stringify(coop),
      });
      if (!response.ok) {
        throw new Error("Failed to register coop");
      }
      const data = await response.json();
      return data.response;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to register coop");
    }
  },

  loginCoop: async (email: string, password: string) => {
    try {
      const token = await tokenApi.getToken();
      console.log("Token: ", token.token);
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.token}`,
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();

      if(data.messages.code === 0) {
        return data;
      }else if(data.messages.code === 1) {
        return data;
      }

    } catch (error) {
      console.log(error);
      throw new Error("Failed to login coop");
    }
  },
};

export default coopApi;
