/*
 * @Author: renhongyun
 * @Date: 2024-02-29 23:05:44
 */
const fs = require('fs');
const path = require('path');

// 指定HTML文件的路径
const filePath = path.join(__dirname, 'copy.html');

// 读取HTML文件
fs.readFile(filePath, 'utf8', function(err, html){
    if (err) {
        console.error(err);
        return;
    }

    // 去除标签之间和标签内部多余的空格
    let compressedHtml = html.replace(/>\s+</g, '><').replace(/\s{2,}/g, ' ');

    // 写回文件
    fs.writeFile(filePath, compressedHtml, 'utf8', function(err) {
        if (err) {
            console.error(err);
        } else {
            console.log('The HTML file has been compressed and saved!');
        }
    });
});
