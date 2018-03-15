// action

export const TOGGLE_NEW_POST = 'TOGGLE_NEW_POST';
export const INCREMENT = 'INCREMENT';

export function toggle_new_post(status) {
    return {
        type: TOGGLE_NEW_POST,
        status: status
    }
}

export function increment() {
    return {
        type: INCREMENT
    }
}