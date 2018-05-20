export const GET_IMAGE_URL = 'GET_IMAGE_URL'
export const GET_BACKGROUND_COLOR = 'GET_BACKGROUND_COLOR'
export const ADD_NEW_TEXTBOX = 'ADD_NEW_TEXTBOX'
export const SET_BOX_STATE = 'SET_BOX_STATE'
export const SET_HANDLE_STATE = 'SET_HANDLE_STATE'
export const SET_BOX_PROPERTY = 'SET_BOX_PROPERTY'
export const SET_EDIT_STATUS = 'SET_EDIT_STATUS'
export const GET_GAMGEUL_DOWNLOAD = 'GET_GAMGEUL_DOWNLOAD'
export const STOP_GAMGEUL_DOWNLOAD = 'STOP_GAMGEUL_DOWNLOAD'
export const DELETE_TEXT_BOX = 'DELETE_TEXT_BOX'
export const GET_CURRENT_BOX = 'GET_CURRENT_BOX'
export const SET_BOX_STYLE = 'SET_BOX_STYLE'

export function get_image_url(url) {
    return {
        type: GET_IMAGE_URL,
        url
    }
}

export function get_background_color(color) {
    return {
        type: GET_BACKGROUND_COLOR,
        color
    }
}

// export function add_new_textbox (numberOfBox, text, box) {
//     return {
//         type: ADD_NEW_TEXTBOX,
//         numberOfBox,
//         text,
//     }
// }

export function add_new_textbox (isAddBox) {
    return {
        type: ADD_NEW_TEXTBOX,
        isAddBox
    }
}

export function set_new_textbox() {
    return dispatch => {
        dispatch(add_new_textbox(1))
        setTimeout(() => {
         dispatch(add_new_textbox(0))   
        });

    }
}

export function set_box_property (width, height) {
    return {
        type: SET_BOX_PROPERTY,
        width,
        height
    }
}

export function set_edit_status (boxisdown) {
    return {
        type: SET_EDIT_STATUS, 
        boxisdown
    }
}

export function get_gamgeul_download(isDownloadOn) {
    return {
        type: GET_GAMGEUL_DOWNLOAD,
        isDownloadOn
    }
}

export function set_gamgeul_status(value) {
    return dispatch => {
        dispatch(get_gamgeul_download(value))
        setTimeout(() => {
            dispatch(stop_gamgeul_download())
        })
    }
}

export function stop_gamgeul_download () {
    return {
        type: STOP_GAMGEUL_DOWNLOAD,
    }
}

export function delete_text_box(isDelete) {
    return {
        type: DELETE_TEXT_BOX,
        isDelete
    }
}

export function set_delete_text_box () {
    return dispatch => {
        setTimeout(() => {
            dispatch(delete_text_box(0))
        });
        dispatch(delete_text_box(1))
    }
}


export function get_current_box (CurrentBox) {
    return {
        type: GET_CURRENT_BOX,
        CurrentBox
    }
}

export function set_box_style (font, size, weight, wordSpacing, lineSpacing) {
    return {
        type: SET_BOX_STYLE,
        font,
        size,
        weight,
        wordSpacing,
        lineSpacing
    }
}   
