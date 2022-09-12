import { Document } from "mongoose";
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

export interface IAccounts extends Document {
  accid: string;
  email: string;
  mobile: string;
  password: string;
  firstname: string;
  lastname: string;
  location: {
    address: String;
    city: String;
    state: String;
    country: String;
    zipcode: String;
  };
  lastseen: Date;
}
