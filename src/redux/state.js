let preparedData = {
    profilePage: {
        selfUserAvatar: {
            id: 1,
            pathToSelfUserAvatar: 'https://i.pinimg.com/originals/cf/5e/de/cf5ede1acb4292683c74f6c4dade334f.jpg'
        },
        selfUserName: {id: 1, suName: 'IamSelfUser'},
        selfUserPosts: {
            posts: [
                {id: 1, pText: 'Hi, how are you!', lCount: '12'},
                {id: 2, pText: 'It\'s my first post', lCount: '4'},
                {id: 3, pText: 'This message from postsData massive', lCount: '555'}
            ],
            comments: [
                {id: 1, cText: 'It\'s a first comment text!'},
                {id: 2, cText: 'It\'s a two comment text!'}
            ]
        }
    },
    messagePage: {
        dialogs: [
            {
                id: 1,
                pathToAuAvatar: 'https://live.staticflickr.com/901/40652824960_db3084a7b2_z.jpg',
                auName: 'BigAnt',
                auMessages: [
                    {id: 1, auMessage: 'Hi Guys! WTF'},
                    {id: 2, auMessage: 'Iam Queen'},
                    {id: 3, auMessage: 'Relax. Take it easy'}
                ]
            },
            {
                id: 2,
                pathToAuAvatar: 'https://i.redd.it/9b1tezj638x11.jpg',
                auName: 'RedAnt',
                auMessages: [
                    {id: 1, auMessage: 'Hi Guys! WTF'},
                    {id: 2, auMessage: 'Iam Queen'},
                    {id: 3, auMessage: 'Relax. Take it easy'}
                ]
            },
            {
                id: 3,
                pathToAuAvatar: 'https://live.staticflickr.com/7346/27616482670_2766159937_b.jpg',
                auName: 'Queen',
                auMessages: [
                    {id: 1, auMessage: 'Hi Guys! WTF'},
                    {id: 2, auMessage: 'Iam Queen'},
                    {id: 3, auMessage: 'Relax. Take it easy'}
                ]
            }
        ],
        selfUserMessages: [
            {id: 1, suMessage: 'Yoyoyo'},
            {id: 2, suMessage: 'Tahoma is a font'},
            {id: 3, suMessage: 'Chikapiparum'}
        ]

    },
    sidebar: {
        friends: [
            {
                id: 1,
                friendName: 'First friend!',
                friendAvatar: 'https://live.staticflickr.com/901/40652824960_db3084a7b2_z.jpg'
            },
            {id: 1, friendName: 'Second friend!', friendAvatar: 'https://i.redd.it/9b1tezj638x11.jpg'},
            {
                id: 1,
                friendName: 'Third friend!',
                friendAvatar: 'https://live.staticflickr.com/7346/27616482670_2766159937_b.jpg'
            }
        ]
    }
}
export default preparedData;