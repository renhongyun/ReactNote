/*
 * @Author: renhongyun
 * @Date: 2024-02-19 16:53:22
 */
// Node.js 中，当你使用 require 导入一个文件夹时，默认情况下会自动查找该文件夹下的 index.js 文件。
const store = require("./store/index起初");

console.log(store.getState());