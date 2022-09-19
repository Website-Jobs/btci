import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const packagesScheme = new mongoose.Schema(
    {
        name: String,
        description: String,
        amount: {
            min: {
                type: Number,
                default: '0',
            },
            max: {
                type: Number,
                default: 0,
            },
        },
    },
    { timestamps: true }
);

const Packages = mongoose.models.Packages || mongoose.model('Packages', packagesScheme);
export default Packages;
