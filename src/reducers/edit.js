import { GET_IMAGE_URL, GET_BACKGROUND_COLOR } from '../actions/edit';

const InitialState = {
    editImage: ''
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
        default:
            return state;
    }
}

export default edit;