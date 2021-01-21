import { NextApiRequest, NextApiResponse } from "next";


export default (req:NextApiRequest, res:NextApiResponse) => {
    
    return res.status(200).json({
        chats: [
            {
                id: 1,
                sender: 'Winner',
                content: `What's up dude?`
            }
        ]
    })
}
