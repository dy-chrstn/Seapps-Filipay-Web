import { BASE_URL, USERNAME, PASSWORD } from "../contants/contants";

interface Token {
  token: string;
  expiresAt: Date;
}

const tokenApi = {
  getToken: async (): Promise<Token> => {
    try {
      const token = await fetch(`${BASE_URL}/getToken`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${btoa(`${USERNAME}:${PASSWORD}`)}`,
        }
      });
      if (!token.ok) {
        throw new Error("Failed to fetch token");
      }
      const data = await token.json();
      return data.response;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch token");
    }
  },
};

export default tokenApi;
