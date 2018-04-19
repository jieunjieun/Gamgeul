export const TOGGLE_EDIT_MODAL = 'TOGGLE_EDIT_MODAL';
export const TOGGLE_VIEW_MODAL = 'TOGGLE_VIEW_MODAL';

export function toggle_edit_modal() {
    return {
        type: TOGGLE_EDIT_MODAL,
    }
}

export function toggle_view_modal() {
    return {
        type: TOGGLE_VIEW_MODAL
    }
}