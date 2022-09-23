import { NextApiRequest, NextApiResponse } from 'next';
import { dbCon } from '../../../../models';
import { ResponseFunctions } from '../../../../interfaces';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions;
    const catcher = (error: Error) => res.status(400).json({ status: 0, error: error });
    const handleCase: ResponseFunctions = {
        GET: async (req: NextApiRequest, res: NextApiResponse) => {
            const { token } = req.query;
            const { Accounts } = await dbCon();
            const result = await Accounts.findOne({ _id: token }).catch(catcher);
            res.status(200).json({
                status: true,
                accid: result._id,
                email: result.email,
                firstname: result.firstname,
                lastname: result.lastname,
                role: result.role,
                account: result.account,
                lastseen: result.lastseen,
            });
        },
    };
    const response = handleCase[method];
    if (response) response(req, res);
    else res.status(400).json({ status: 0, error: 'No Response for This Request' });
}