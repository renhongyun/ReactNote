/*
 * @Author: renhongyun
 * @Date: 2024-02-19 16:53:05
 */
//不做修改的情况下不支持模块化，使用require导入
const { createStore } = require("redux");
const {
    ADD_NUMBER,
    CHANGE_NAME,
    CHANGE_SONG
} = require("../constants")
// 初始化数据
const initialState = {
    name: "张杰",
    song: "最美的太阳",
    counter: 0
};

//定义reducer函数：一个纯函数
function reducer(state = initialState, action) {
    //有更新，返回之前的store
    // if (action.type == "change_name") {
    //     return { ...state, name: action.name }
    // } else if (action.type == "change_song") {
    //     return { ...state, song: action.song }
    // } else if (action.type == "add_number") {
    //     return { ...state, counter: state.counter + action.num }
    // }
        // //没有更新，返回之后的store
        // return state

    // 优化
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

//使用reducer函数的返回值作为createStore的参数
const store = createStore(reducer)

//node中的模块导出
module.exports = store