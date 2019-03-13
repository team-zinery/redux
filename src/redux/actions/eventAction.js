import {
    GET_ALL_EVENTS,
    ADD_EVENT,
    DELETE_EVENT,
    UPDATE_EVENT

} from '../constants/event';
import Axios from './Axios/Axios';
import jwt_decode from 'jwt-decode';

const getAllEvents = () => dispatch => {

    Axios.get('events/getallevents')
    .then(result => {
        dispatch({
            type: GET_ALL_EVENTS,
            payload: result.data
        })
    })
    .catch(err => {
        console.log(err)
    })
}

const addEvent = (data) => dispatch => {

    localStorage.getItem(token)
    let decoded = jwt_decode(token)

    Axios.post(`events/addevent/${decoded.id}`, data)
    .then(result => {
        dispatch({
            type: ADD_EVENT,
            payload: result.data
        })
    })
    .catch(err => {
        console.log(err)
    })

}

const updateEvent = (data) => dispatch => {

    localStorage.getItem(token)
    let decoded = jwt_decode(token)

    Axios.put(`events/addevent/${decoded.id}?_method=PUT`, data)
    .then(result => {
        dispatch({
            type: UPDATE_EVENT,
            payload: result.data
        })
    })
    .catch(err => {
        console.log(err)
    })
}

const deleteEvent = (eventID) => dispatch => {

    localStorage.getItem(token)
    let decoded = jwt_decode(token)

    Axios.delete(`events/deleteevent/${decoded.id}?_method=DELETE`, eventID)
    .then(result => {
        dispatch({
            type: DELETE_EVENT
        })
    })
    .catch(err => {
        console.log(err)
    })

}