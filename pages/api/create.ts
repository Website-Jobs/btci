
import { NextApiRequest, NextApiResponse } from "next";
import { dbCon} from "../../models"
import { ResponseFunctions } from "../../interfaces";
const bcrypt =  require("bcryptjs");

export default function handler(req:NextApiRequest, res:NextApiResponse) {
    const method: keyof ResponseFunctions = req.method as keyof ResponseFunctions
    const catcher = (error: Error) => res.status(400).json({ error })
    const handleCase: ResponseFunctions = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
        res.status(400).json({ status: false,err:'Only POST Method is allowed' });
    },
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      const { firstname, lastname, email, password } = req.body;

      console.log(req.body);

      const salt = bcrypt.genSaltSync(10);
      const hashesPassword = bcrypt.hashSync(password, salt);
      const {Account} = await dbCon();
      const created = await Account.create({
        email: email,
        firstname: firstname,
        lastname: lastname,
        password: hashesPassword
      }).catch(catcher);
      res.status(200).json({ status: 1, accid: created.id, email: created.email });
    }
  }

  const response = handleCase[method];
  if (response) response(req, res)
  else res.status(400).json({ error: "No Response for This Request" })
}