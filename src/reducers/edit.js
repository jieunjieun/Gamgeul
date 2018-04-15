import { GET_IMAGE_URL, GET_BACKGROUND_COLOR, ADD_NEW_TEXTBOX } from '../actions/edit';

const InitialState = {
    editImage: '',
    boxid: 0,
    text: ''
}

const edit = (state = InitialState, action) => {
    switch(action.type) {
        case GET_IMAGE_URL:
            return Object.assign({}, state, {
                editImage: action.url
            })
        case GET_BACKGROUND_COLOR:
            return Object.assign({}, state, {
                currentColor: action.color
            })
        case ADD_NEW_TEXTBOX:
            return Object.assign({}, state, {
                boxid: state.boxid + 1,
                text : action.text,
            })
        default:
            return state;
    }
}

export default edit;