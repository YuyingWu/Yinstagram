const listReducer = (state = {
    data: [        
        {
            img: 'https://instagram.fhkg3-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c135.0.809.809/14733182_1278964905512358_5806272214793715712_n.jpg',
            like: 0,
            comments: [
                {
                    name: "YuyingWu",
                    content: "👍👍👍👍棒棒哒~",
                    id: 1111111
                },
                {
                    name: "leo",
                    content: "😄",
                    id: 12222222
                }
            ],
            id: 1,
            desc: 'beautiful place in Katikati. Kauri Point fishing spot.beautiful place in Katikati. Kauri Point fishing spot.beautiful place in Katikati. Kauri Point fishing spot.beautiful place in Katikati. Kauri Point fishing spot.'
        },
        {
            img: 'https://instagram.fhkg3-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c135.0.809.809/14733182_1278964905512358_5806272214793715712_n.jpg',
            like: 0,
            comments: [],
            id: 2,
            desc: 'beautiful place in Katikati. Kauri Point fishing spot.'
        },
        {
            img: 'https://instagram.fhkg3-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c135.0.809.809/14733182_1278964905512358_5806272214793715712_n.jpg',
            like: 0,
            comments: [],
            id: 3,
            desc: 'beautiful place in Katikati. Kauri Point fishing spot.'
        },
        {
            img: 'https://instagram.fhkg3-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c135.0.809.809/14733182_1278964905512358_5806272214793715712_n.jpg',
            like: 0,
            comments: [],
            id: 4,
            desc: 'beautiful place in Katikati. Kauri Point fishing spot.'
        },
        {
            img: 'https://instagram.fhkg3-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c135.0.809.809/14733182_1278964905512358_5806272214793715712_n.jpg',
            like: 0,
            comments: [],
            id: 5,
            desc: 'beautiful place in Katikati. Kauri Point fishing spot.'
        },
        {
            img: 'https://instagram.fhkg3-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c135.0.809.809/14733182_1278964905512358_5806272214793715712_n.jpg',
            like: 0,
            comments: [],
            id: 6,
            desc: 'beautiful place in Katikati. Kauri Point fishing spot.'
        },
        {
            img: 'https://instagram.fhkg3-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c135.0.809.809/14733182_1278964905512358_5806272214793715712_n.jpg',
            like: 0,
            comments: [],
            id: 7,
            desc: 'beautiful place in Katikati. Kauri Point fishing spot.'
        },
        {
            img: 'https://instagram.fhkg3-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c135.0.809.809/14733182_1278964905512358_5806272214793715712_n.jpg',
            like: 0,
            comments: [],
            id: 8,
            desc: 'beautiful place in Katikati. Kauri Point fishing spot.'
        }
    ]
}, action) => {
    /*switch (action.type) {
        case "ADD_LIST_FULFILLED":
            state = {
                ...state,
                data: [...state.data, action.payload]
            };
            break;
        case "INIT_LIST_FULFILLED":
            state = {
                ...state,
                listHasInit: true,
                data: [...state.data, ...action.payload]
            };
            break;
    }*/
    return state;
};

export default listReducer;
