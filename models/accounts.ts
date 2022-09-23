import mongoose, { Schema } from 'mongoose';
mongoose.Promise = global.Promise;

const accountsScheme = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
        },
        password: String,
        firstname: String,
        lastname: String,
        location: {
            address: String,
            city: String,
            state: String,
            country: String,
            zipcode: String,
        },
        account: {
            btc: {
                type: String,
                default: '0',
            },
            usd: {
                type: Number,
                default: 0,
            },
        },
        investments: [
            {
                packageid: String,
                amount: Number,
                starts: String,
                expires: String,
            },
        ],
        role: {
            type: Array,
            default: [],
        },
        lastseen: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

const Accounts = mongoose.models.Accounts || mongoose.model('Accounts', accountsScheme);
export default Accounts;
