import mongoose, { Model } from 'mongoose';
import Account from './accounts';
import Packages from './packages';
import Investments from './investments';

const { MONGOOSE_URI } = process.env;

export const dbCon = async () => {
    const conn = await mongoose
        .connect(MONGOOSE_URI as string)
        .then(() => {})
        .catch((err) => console.log(err));
    console.log('Mongoose Connection Established');

    return { conn, Account, Packages, Investments };
};
