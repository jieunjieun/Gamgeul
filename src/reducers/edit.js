import { GET_IMAGE_URL, GET_BACKGROUND_COLOR, ADD_NEW_TEXTBOX, SET_BOX_STATE, SET_BOX_PROPERTY, SET_EDIT_STATUS, GET_GAMGEUL_DOWNLOAD, DELETE_TEXT_BOX, GET_CURRENT_BOX, TEST, STOP_GAMGEUL_DOWNLOAD } from '../actions/edit';

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
                isDownloadOn: action.isDownloadOn
            })

        case DELETE_TEXT_BOX:
            return Object.assign({}, state, {
                isDelete : action.isDelete
            })

        case GET_CURRENT_BOX:
            return Object.assign({}, state, {
                CurrentBox : action.CurrentBox
            })
        case TEST:
            return Object.assign({}, state, {
                test: action.test
            })

        case STOP_GAMGEUL_DOWNLOAD:
            return Object.assign({}, state, {
                isDownloadOn: 0
            })

        default:
            return state;
    }
}

export default edit;