/*
 * @Author: renhongyun
 * @Date: 2024-02-20 19:14:09
 */
const {
    ADD_NUMBER,
    CHANGE_NAME,
    CHANGE_SONG
} = require("./constants.js") 

const changeNameAction = (name) => {
    return {
        type: CHANGE_NAME,
        name
    }
}

const changeSongAction = (song) => {
    return {
        type: CHANGE_SONG,
        song
    }
}

const changeCounterAction = (num) => {
    return {
        type: ADD_NUMBER,
        num
    }
}
module.exports = {
    changeNameAction,
    changeSongAction,
    changeCounterAction
}