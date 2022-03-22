const SET_NUMBER_CARDS = 'SET_NUMBER_CARDS';
const SET_DELETE_CARDS = 'SET_DELETE_CARDS';


let initialState = {
    numberСards: [1, 9, 5],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_NUMBER_CARDS:
            return {
                ...state,
                numberСards: [...state.numberСards, '2'],
            }
        case SET_DELETE_CARDS:
            state.numberСards.length = state.numberСards.length - 1;
            return {
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

export default usersReducer;