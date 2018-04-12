export const GET_IMAGE_URL = 'GET_IMAGE_URL';
export const GET_BACKGROUND_COLOR = 'GET_BACKGROUND_COLOR';

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
