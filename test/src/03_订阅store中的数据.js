const store = require("./store/index起初")

const unsubscribe = store.subscribe(() => {
    console.log("订阅数据的变化:", store.getState());
})
//可以取消订阅
unsubscribe()

const nameAction = { type: "change_name", name: "zyh" }
store.dispatch(nameAction)


const nameAction2 = { type: "change_name", name: "lcy" }
store.dispatch(nameAction2)


const songAction = { type: "change_song", song: "《上春山》" }
store.dispatch(songAction)


const songAction2 = { type: "change_song", song: "《HORIZON》" }
store.dispatch(songAction2)


const addAction = { type: "add_number", num: 10 }
store.dispatch(addAction)


const addAction2 = { type: "add_number", num: 50 }
store.dispatch(addAction2)
