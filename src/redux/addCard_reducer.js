const SET_NUMBER_CARDS = 'SET_NUMBER_CARDS';
const SET_DELETE_CARDS = 'SET_DELETE_CARDS';
const SET_EDIT_NAME = 'SET_EDIT_NAME';
const SET_EDIT_FIELD = 'SET_EDIT_FIELD';

let initialState = {
    numberСards: [
        {
            id: 1,
            name: 'wild',
            transcription: '[waɪld]',
            translation_ru: 'дикий',
            switchCardName: true,
            switchCardField: true,
        },
    ],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_NUMBER_CARDS:
            return {
                ...state,
                numberСards: [...state.numberСards, {
                    id: state.numberСards.length + 1,
                    name: 'card name' + state.numberСards.length,
                    transcription: '[text here]',
                    translation_ru: 'text here',
                    switchCardName: true,
                    switchCardField: true,
                },],
            }
        case SET_DELETE_CARDS:
            return {
                ...state,
                numberСards: [...state.numberСards.splice(action.newName, 1) && state.numberСards],
            }

        /* TODO */
        case SET_EDIT_NAME:
            for (let i = 0; i < state.numberСards.length; i++) {
                if (i == action.newName) {
                    return {
                        ...state,
                        numberСards: [...state.numberСards.map((u, n) => {
                                if (n == action.newName) {
                                    return {...u, switchCardName: !state.numberСards[i].switchCardName}
                                }
                                return u;
                            }
                        ),],
                    }
                }
            }

        /* TODO */
        case SET_EDIT_FIELD:
            for (let i = 0; i < state.numberСards.length; i++) {
                if (i == action.newName) {
                    return {
                        ...state,
                        numberСards: [...state.numberСards.map((u, n) => {
                                if (n == action.newName) {
                                    return {...u, switchCardField: !state.numberСards[i].switchCardField}
                                }
                                return u;
                            }
                        ),],
                    }
                }
            }

        default:
            return state;
    }
}

export const setNumberCards = () => ({
    type: SET_NUMBER_CARDS
});

export const setDeleteCards = (newName) => ({
    type: SET_DELETE_CARDS, newName
})

export const setEditName = (newName) => ({
    type: SET_EDIT_NAME, newName
})

export const setEditField = (newName) => ({
    type: SET_EDIT_FIELD, newName
})

export default usersReducer;