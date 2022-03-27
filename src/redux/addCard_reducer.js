const SET_NUMBER_CARDS = 'SET_NUMBER_CARDS';
const SET_DELETE_CARDS = 'SET_DELETE_CARDS';
const SET_EDIT_NAME = 'SET_EDIT_NAME';
const SET_EDIT_FIELD = 'SET_EDIT_FIELD';

let initialState = {
    numberСards: [
        {
            id: 1,
            name: 'card name',
            text: 'text here',
            switchCardName: true,
            switchCardField: true,
        },
    ],
    /*    switchCardName: true,
        switchCardField: true,*/
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_NUMBER_CARDS:
            return {
                ...state,
                numberСards: [...state.numberСards, {
                    id: state.numberСards.length + 1,
                    name: 'card name',
                    text: 'text here',
                    switchCardName: true,
                    switchCardField: true,
                },],
            }
        case SET_DELETE_CARDS:
            return {
                ...state,
                numberСards: [...state.numberСards.pop() && state.numberСards],
            }

        case SET_EDIT_NAME:
            for (let i = 0; i < state.numberСards.length; i++) {
                if (state.numberСards[i].id == action.newName) {
                    return {
                        ...state,
                        numberСards: [...state.numberСards.map(u => {
                                if(u.id == action.newName){
                                    return {...u, switchCardName: !state.numberСards[i].switchCardName}
                                }
                                return u;
                        }

                        ), ],
                    }
                }
            }

        case SET_EDIT_FIELD:
            return {
                ...state,
                switchCardField: !state.switchCardField,
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

export const setEditField = (newName) => ({
    type: SET_EDIT_FIELD, newName
})


export default usersReducer;