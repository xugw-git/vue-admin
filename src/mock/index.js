import Mock from 'mockjs'

const noteData = Mock.mock({
    "data1|6": [{
        'import|1': ['一般', '重要', '紧急'],
        'note': '@title(2, 4)'
    }],
    "data2|6": [{
        'import|1': ['一般', '重要', '紧急'],
        'note': '@title(2, 4)'
    }],
    "data3|6": [{
        'import|1': ['一般', '重要', '紧急'],
        'note': '@title(2, 4)'
    }]
})

const nameList = [Mock.Random.cname(3), Mock.Random.cname(), Mock.Random.cname(), Mock.Random.cname(), Mock.Random.cname(),]
const checkData = Mock.mock({
    "data|100": [{
        "id|+1": 1,
        'title': '@title(3, 5)',
        'time': '@datetime',
        'name|1': nameList,
        'rate': '@integer(1, 5)',
        'status|1': ['草稿', '已发布']
    }]
})


Mock.mock('/notedata', 'get', noteData)
Mock.mock('/checkdata', 'get', checkData)