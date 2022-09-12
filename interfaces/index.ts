import { ReactNode } from "react";

export interface Props {
  children?: ReactNode;
}

export interface WebUser {
  firstname?: string;
  lastname?: string;
  email: string;
  password: string;
}
