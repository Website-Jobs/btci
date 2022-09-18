import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const investmentsScheme = new mongoose.Schema(
    {
        title: String,
        package: String,
        amount: Number,
    },
    { timestamps: true }
);

const Investments = mongoose.models.Investments || mongoose.model('Investments', investmentsScheme);
export default Investments;
