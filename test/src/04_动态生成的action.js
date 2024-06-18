/*
 * @Author: renhongyun
 * @Date: 2024-02-20 19:07:39
 */
const { changeCounterAction, changeSongAction, changeNameAction } = require("./actionCreators")
const store = require("./store/index起初")

const unsubscribe = store.subscribe(() => {
    console.log("订阅数据的变化:", store.getState());
})
//可以取消订阅
// unsubscribe()
// const changeNameAction = (name) => {
//     return {
//         type: "change_name",
//         name
//     }
// }

store.dispatch(changeNameAction("zyh"))
store.dispatch(changeNameAction("lcy"))

// const changeSongAction = (song) => {
//     return {
//         type: "change_song",
//         song
//     }
// }

store.dispatch(changeSongAction("《上春山》"))
store.dispatch(changeSongAction("《HORIZON》"))

// const changeCounterAction = (num) => {
//     return {
//         type: "add_number",
//         num
//     }
// }

store.dispatch(changeCounterAction(10))
store.dispatch(changeCounterAction(50))
