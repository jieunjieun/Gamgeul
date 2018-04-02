import { TOGGLE_NEW_POST } from '../actions/main';

const InitialState = {
    status: 'Helloworld'
}

const index = (state = InitialState, action) => {
    switch(action.type) {
        case TOGGLE_NEW_POST:
        return Object.assign({}, state, {
            status: action.status
        })
    }
}

export default index;