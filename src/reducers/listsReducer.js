import { CONSTANTS } from '../actions/index'

//TODO fetch cards & lists
//https://api.trello.com/1/boards/606de2f356eb4f0349a6f2e4/lists?key=ad6ee75608323c4025d3f82b4c7f42d2&token=c3c00426d40f0ee156b5e7cca9acfef2c41f2a5c56e9833f57f9f4d7396e9296&token=c3c00426d40f0ee156b5e7cca9acfef2c41f2a5c56e9833f57f9f4d7396e9296&cards=all&lists=open

//TODO  fetch cards per board(Kanban)
//https://api.trello.com/1/boards/606de2f356eb4f0349a6f2e4/cards?key=ad6ee75608323c4025d3f82b4c7f42d2&token=c3c00426d40f0ee156b5e7cca9acfef2c41f2a5c56e9833f57f9f4d7396e9296

//TODO fetch all boards
// https://api.trello.com/1/members/me/boards?key=ad6ee75608323c4025d3f82b4c7f42d2&token=c3c00426d40f0ee156b5e7cca9acfef2c41f2a5c56e9833f57f9f4d7396e9296

//TODO  fetch single board (Kanban)
// https://api.trello.com/1/boards/606de2f356eb4f0349a6f2e4?key=ad6ee75608323c4025d3f82b4c7f42d2&token=c3c00426d40f0ee156b5e7cca9acfef2c41f2a5c56e9833f57f9f4d7396e9296

const initialState = [
    {
        title: "List1",
        id: 0,
        cards: [
            {
                id: 0,
                text: "First card List1"
            },
            {
                id: 1,
                text: "Second card List1"
            }

        ]
    },
    {
        title: "List2",
        id: 1,
        cards: [
            {
                id: 0,
                text: "First card List2"
            },
            {
                id: 1,
                text: "Second card List2"
            },
            {
                id: 2,
                text: "Third card List2"
            },
            {
                id: 3,
                text: "Fourth card List2"
            }
        ]
    }
]


const listsReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: actions.payload,
                id: uuidv4() + '-list',
                cards: []
            }
            return [...state, newList];
        case CONSTANTS.ADD_CARD:
            const newCard = {
                id: uuidv4() + '-card',
                text: actions.payload.text
            }

            const newState = state.map(list => {
                if (list.id === actions.payload.listId) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list;
                }
            });

            return newState;
        default:
            return state;
    }
}


function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
export default listsReducer;