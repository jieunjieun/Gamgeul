import { GET_IMAGE_URL, GET_BACKGROUND_COLOR, ADD_NEW_TEXTBOX, SET_BOX_STATE, SET_BOX_PROPERTY } from '../actions/edit';

const InitialState = {
    editImage: '',
    numberOfBox: 0,
    text: '',
    status: 0
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
                numberOfBox: state.numberOfBox + 1,
                text : action.text,
            })
        case SET_BOX_STATE:
            return Object.assign({}, state, {
                handleisDown : action.handleisDown,
                boxisDown : action.boxisDown
            })
        case SET_BOX_PROPERTY:
            return Object.assign({}), state, {
                width : action.width,
                height : action.height
            }
        default:
            return state;
    }
}

export default edit;