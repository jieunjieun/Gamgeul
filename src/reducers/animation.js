// import { TOGGLE_EDIT_MODAL } from' ../actions'
import { TOGGLE_EDIT_MODAL, TOGGLE_VIEW_MODAL } from '../actions/animation';

const InitialState = {
    isEditModalToggle: 0,
    isViewModalToggle: 0
};

const animation = (state = InitialState, action) => {
    switch(action.type) {
        case TOGGLE_EDIT_MODAL:
            return Object.assign({}, state, {
                isEditModalToggle: state.isEditModalToggle == false ? 1 : 0
            })
        case TOGGLE_VIEW_MODAL:
            return Object.assign({}, state, {
                isViewModalToggle : state.isViewModalToggle == false ? 1 : 0
            })
        default:
            return state;
    }
}

export default animation;