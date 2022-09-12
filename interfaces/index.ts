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

export interface LoggedInUser {
  accid: string;
  email?: string;
  isLoggedIn?: boolean;
}
