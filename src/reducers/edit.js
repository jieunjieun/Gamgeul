import { GET_IMAGE_URL, GET_BACKGROUND_COLOR, ADD_NEW_TEXTBOX, SET_BOX_STATE, SET_BOX_PROPERTY, SET_EDIT_STATUS, GET_GAMGEUL_DOWNLOAD } from '../actions/edit';

const InitialState = {
    editImage: '',
    numberOfBox: 0,
    text: '',
    status: 0,
    boxisdown: 0,
    isDownloadOn: 0
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
        case SET_BOX_PROPERTY:
            return Object.assign({}, state, {
                width : action.width,
                height : action.height
            })
        case SET_EDIT_STATUS:
            return Object.assign({}, state = InitialState, {
                boxisdown : action.boxisdown
            })
        case GET_GAMGEUL_DOWNLOAD:
            return Object.assign({}, state, {
                isDownloadOn: state.isDownloadOn == 0 ? 1 : 0
            })
        default:
            return state;
    }
}

export default edit;