
import { NextApiRequest, NextApiResponse } from "next";
import { dbCon} from "../../models"
import { ResponseFunctions } from "../../interfaces";
const bcrypt =  require("bcryptjs");

export default function handler(req:NextApiRequest, res:NextApiResponse) {
    const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions
    const catcher = (error: Error) => res.status(400).json({ error })
    const handleCase: ResponseFunctions = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
        res.status(200).json({ status: false,err:'Only POST Method is allowed' });
    },
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      const { token } = req.body;
      const {Account} = await dbCon();
      const account = await Account.findOne({ _id: token }).catch(catcher);
      res.status(200).json({
        status: 1,
        accid: account.id,
        email: account.email,
        firstname: account.firstname,
        lastname: account.lastname,
        account: account.account,
        lastseen: account.lastseen,
      });
    }
  }

  const response = handleCase[method];
  if (response) response(req, res)
  else res.status(400).json({ error: "No Response for This Request" })
}