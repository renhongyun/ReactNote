/*
 * @Author: renhongyun
 * @Date: 2024-02-19 17:13:51
 */
const store = require("./store/index起初")

//修改state中的数据

//这种方式是万万不行的，store中的数据被没被改都说不定，页面也不会刷新
// store.getState.name = "RHY"
//必须提交一个action
const nameAction = { type: "change_name", name: "zyh" }
store.dispatch(nameAction)
console.log(store.getState());

const nameAction2 = { type: "change_name", name: "lcy" }
store.dispatch(nameAction2)
console.log(store.getState());

const songAction = { type: "change_song", song: "《上春山》" }
store.dispatch(songAction)
console.log(store.getState());

const songAction2 = { type: "change_song", song: "《HORIZON》" }
store.dispatch(songAction2)
console.log(store.getState());

const addAction = { type: "add_number", num: 10 }
store.dispatch(addAction)
console.log(store.getState());

const addAction2 = { type: "add_number", num: 50 }
store.dispatch(addAction2)
console.log(store.getState());