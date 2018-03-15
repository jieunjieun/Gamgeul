import * as actions from '../actions/main.js';

const InitialState = {
    status: 0
}

const main = (state = [], action) => {
    switch(action.type) {
        case 'TOGGLE_NEW_POST':
        return [
            ...state,
            {
                status = !status
            }
        ]
    }
}

export default main