//var Mock = require('node_modules/mockjs/dist/mock-min')// 使用Mock
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中包含1到10个元素
    'list|1-10':[{
        // 属性id 是一个自增数，起始值为1，每次增加1
        'id|+1':1
    }]
})

// 输出结果
//console.log(JSON.stringify(data,null,4))