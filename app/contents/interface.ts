export interface ContentContainer {
  headline: React.ReactNode;
  subheadline?: React.ReactNode;
  main: React.ReactNode;
  footer?: React.ReactNode;
}

export interface Fields {
  [key: string]: string;
}
