import http from "../../http-common";

interface Login {
  email: string;
  password: string;
}

interface ReturnDatalogin {
  result: { acessToken: string };
  user: { email: string; userName: string; id: number };
}

interface SaveLoginUser {
  acessToken: string;
  user: { email: string; userName: string; id: number };
}

const authService = {
  async authenticate(data: Login) {
    const response = await http.post<ReturnDatalogin>("/login", data);

    return response.data;
  },

  setLoggedUser(data: ReturnDatalogin) {
    const parsedData = JSON.stringify(data);
    localStorage.setItem("user", parsedData);
  },

  getLoggedUser() {
    const data = localStorage.getItem("user");
    if (!data) return null;
    try {
      const parsedData: SaveLoginUser = JSON.parse(data);
      return parsedData;
    } catch (err) {
      console.log(err);
      return null;
    }
  },

  cleanoggedUser() {
    localStorage.clear();
  },
};

export default authService;
