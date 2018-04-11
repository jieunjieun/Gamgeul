import { GET_IMAGE_URL } from '../actions/edit';

const InitialState = {
    editImage: ''
}

const edit = (state = InitialState, action) => {
    switch(action.type) {
        case GET_IMAGE_URL:
            return Object.assign({}, state, {
                editImage: action.url
            })
        default:
            return state;
    }
}

export default edit;