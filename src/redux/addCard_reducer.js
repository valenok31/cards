const SET_NUMBER_CARDS = 'SET_NUMBER_CARDS';
const SET_DELETE_CARDS = 'SET_DELETE_CARDS';
const SET_EDIT_NAME = 'SET_EDIT_NAME';

let initialState = {
    numberСards: [
        {
            id: 1,
            name: 'card name',
            text: 'text here'
        },
    ],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_NUMBER_CARDS:
            return {
                ...state,
                numberСards: [...state.numberСards, {
                    id: state.numberСards.length+1,
                    name: 'card name',
                    text: 'text here'
                },],
            }
        case SET_DELETE_CARDS:
            state.numberСards.length = state.numberСards.length - 1;
            return {
                numberСards: [...state.numberСards],
            }
        case SET_EDIT_NAME:
            state.numberСards[0].name = action.newName;
            return {
                ...state,
                numberСards: [...state.numberСards],
            }


        default:
            return state;
    }
}

export const setNumberCards = () => ({
    type: SET_NUMBER_CARDS
});

export const setDeleteCards = () => ({
    type: SET_DELETE_CARDS
})

export const setEditName = (newName) => ({
    type: SET_EDIT_NAME, newName
})



export default usersReducer;