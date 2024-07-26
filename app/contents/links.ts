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
