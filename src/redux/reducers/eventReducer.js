import {
    GET_ALL_EVENTS,
    ADD_EVENT,
    UPDATE_EVENT,
    DELETE_EVENT
} from '../constants/event';

let initialState = {
    eventArray: []
};

export default (state = initialState, action) => {
    let updated = Object.assign({}, state);

    switch(action.type){
        case GET_ALL_EVENTS:
            updated.events = action.payload
            return updated
        
        case ADD_EVENT:
            updated.events.push(action.payload)
            return updated

        case UPDATE_EVENT:
            
            return updated

        case DELETE_EVENT:

            return updated

        default:
            return state
    }
}