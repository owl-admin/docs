const fs = require('fs')
const path = require('path')

// 文件路径
const filePath = path.resolve(__dirname, './dist/index.html')

// HTML 转义字符替换函数
function decodeHTMLEntities(str) {
    const entities = {
        '&lt;'  : '<',
        '&gt;'  : '>',
        '&quot;': '"',
        '&amp;' : '&'
    }
    return str.replace(/&lt;|&gt;|&quot;|&amp;/g, match => entities[match])
}

// 读取文件内容
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('File reading failed:', err)
        return
    }

    // 替换内容
    const replacedContent = decodeHTMLEntities(data)

    // 写回文件
    fs.writeFile(filePath, replacedContent, 'utf8', err => {
        if (err) {
            console.error('File writing failed:', err)
        } else {
            console.log('Success!')
        }
    })
})
