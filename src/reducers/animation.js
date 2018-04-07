// import { TOGGLE_MODAL } from' ../actions'
import { TOGGLE_MODAL } from '../actions/animation';

const InitialState = {
    isToggle: 0
};

const animation = (state = InitialState, action) => {
    switch(action.type) {
        case TOGGLE_MODAL:
            return Object.assign({}, state, {
                isToggle: state.isToggle == false ? 1 : 0
            })
        default:
            return state;
    }
}

export default animation;