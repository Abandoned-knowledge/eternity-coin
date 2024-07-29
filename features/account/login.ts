import type { IUser } from "~/app/interfaces/interfaces";

export function Authorization(user: IUser) {
  const store = useUserStore();  
  store.logIn(user);

  return navigateTo("/");
}
