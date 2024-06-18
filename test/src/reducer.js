/*
 * @Author: renhongyun
 * @Date: 2024-02-20 19:28:25
 */
const {
    ADD_NUMBER,
    CHANGE_NAME,
    CHANGE_SONG
} = require("../constants")

const initialState = {
    name: "张杰",
    song: "最美的太阳",
    counter: 0
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_NAME:
            return { ...state, name: action.name }
        case CHANGE_SONG:
            return { ...state, song: action.song }
        case ADD_NUMBER:
            return { ...state, counter: state.counter + action.num }
        default:
            return state
    }
}


module.exports = reducer