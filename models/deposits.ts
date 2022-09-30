import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const depositsScheme = new mongoose.Schema(
    {
        userid: String,
        packageid: String,
        amount: String,
    },
    { timestamps: true }
);

const Deposits = mongoose.models.Deposits || mongoose.model('Deposits', depositsScheme);
export default Deposits;
