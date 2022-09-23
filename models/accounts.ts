import mongoose, { Schema } from 'mongoose';
mongoose.Promise = global.Promise;

const accountsScheme = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
        },
        password: { type: String, default: '' },
        firstname: { type: String, default: '' },
        lastname: { type: String, default: '' },
        mobile: { type: String, default: '' },
        avatar: {
            type: String,
            default: '/img/instagram6.jpg',
        },
        address: { type: String, default: '' },
        country: { type: String, default: '' },
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
            default: ['user'],
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
