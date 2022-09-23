import { Document } from 'mongoose';
import { ReactNode } from 'react';
import { Schema } from 'mongoose';

export interface Props {
    children?: ReactNode;
}

export interface ResponseFunctions {
    GET?: Function;
    POST?: Function;
    PUT?: Function;
    DELETE?: Function;
}

export interface TUser {
    loading?: boolean;
    token?: Schema.Types.ObjectId; // for storing the _id of
    firstname?: string;
    lastname?: string;
    email?: string;
    error?: string;
    btc?: string;
    usd?: number;
}

export interface WebUser {
    token?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    mobile?: string;
    address?: string;
    country?: string;
    password?: string;
}

export interface IUser {
    token?: string;
    profile?: Object;
    lastseen?: Date;
}

export interface SLoggedInUser {
    token?: string;
    email?: string;
    firstname?: string;
    lastname?: string;
    usd?: Number;
    btc?: string;
}

export interface ApiUser {
    status: boolean;
    token: string;
    email: string;
    firstname: string;
    lastname: string;
    role: Array<string>;
    account: {
        usd: Number;
        btc: string;
    };
    lastseen?: Date;
}

export interface ILoggedInUser {
    token?: string;
    email?: string;
    firstname?: string;
    lastname?: string;
    account?: {
        usd?: Number;
        btc?: string;
    };
}

export interface LoggedInUser {
    token?: string;
    email?: string;
    firstname?: string;
    lastname?: string;
    account?: {
        usd?: Number;
        btc?: string;
    };
    lastseen?: Date;
}

export interface userProfile {
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
