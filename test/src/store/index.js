/*
 * @Author: renhongyun
 * @Date: 2024-02-20 19:31:09
 */
const { createStore } = require("redux");
const reducer = require("./reducer")

const store = createStore(reducer)

module.exports = store