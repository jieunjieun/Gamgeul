export const GET_IMAGE_URL = 'GET_IMAGE_URL'
export const GET_BACKGROUND_COLOR = 'GET_BACKGROUND_COLOR'
export const ADD_NEW_TEXTBOX = 'ADD_NEW_TEXTBOX'
export const SET_BOX_STATE = 'SET_BOX_STATE'
export const SET_HANDLE_STATE = 'SET_HANDLE_STATE'
export const SET_BOX_PROPERTY = 'SET_BOX_PROPERTY'

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

export function add_new_textbox (numberOfBox, text, box) {
    return {
        type: ADD_NEW_TEXTBOX,
        numberOfBox,
        text,
    }
}

export function set_box_state ( boxisDown) {
    return {
        type: SET_BOX_STATE,
        boxisDown
    }
}

export function set_handle_state (handleisDown) {
    return {
        type: SET_HANDLE_STATE,
        handleisDown
    }
}

export function set_box_property (width, height) {
    return {
        type: SET_BOX_PROPERTY,
        width,
        height
    }
}






