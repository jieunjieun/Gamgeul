export const GET_IMAGE_URL = 'GET_IMAGE_URL';

export function get_image_url(url) {
    return {
        type: GET_IMAGE_URL,
        url
    }
}