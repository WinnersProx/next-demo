

export default function handler(req, res) {

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
