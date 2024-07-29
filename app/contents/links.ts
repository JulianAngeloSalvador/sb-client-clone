interface AppLinks {
  path: string;
  title: string;
  icon?: string;
}

export const app_paths: AppLinks[] = [
  {
    path: "/",
    title: "home",
  },
  {
    path: "/menu",
    title: "menu",
  },
  {
    path: "/trending",
    title: "trending",
  },
];

export interface AuthType extends AppLinks {
  type: "SIGNIN" | "SIGNUP";
}

export const auth_paths: AuthType[] = [
  {
    path: "/auth/login",
    title: "Sign In",
    type: "SIGNIN",
  },
  {
    path: "/auth/signup",
    title: "Join Now",
    type: "SIGNUP",
  },
];
