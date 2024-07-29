import { type IUser } from "~/app/interfaces/interfaces";
import { defineStore } from "pinia";

const user: IUser = {
  user_id: 1,
  email: "test@email.com",
  password: "123123",
  name: "first last",
};

export const useUserStore = defineStore("user", {
  state: () => ({
    isLogin: false,
    user: {
      user_id: 0,
      email: "",
      password: "",
      name: "",
    },
  }),
  actions: {
    logOut() {
      this.isLogin = false;
    },
    logIn(user: IUser) {
      this.user.email = user.email;
      this.user.name = user.name;
      this.user.password = user.password;

      this.isLogin = true;
    },
  },
});

export default user;
