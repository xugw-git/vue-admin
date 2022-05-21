import Mock from 'mockjs'

const noteData = Mock.mock({
    "data1|6": [{
        'import|1': ['一般', '重要', '紧急'],
        'note': '@title(1, 3)'
    }],
    "data2|6": [{
        'import|1': ['一般', '重要', '紧急'],
        'note': '@title(1, 3)'
    }],
    "data3|6": [{
        'import|1': ['一般', '重要', '紧急'],
        'note': '@title(1, 3)'
    }]
})

const checkData = Mock.mock({
    "data|100": [{
        "id|+1": 1,
        'time': '@datetime',
        'author': '@cname',
        'rate': '@integer(1, 5)',
        'content': '@title(3, 6)'
    }]
})


const nameList = [Mock.Random.cname(), Mock.Random.cname(), Mock.Random.cname(), Mock.Random.cname(), Mock.Random.cname(),]
const articleData = Mock.mock({
    "data|20": [{
        "id|+1": 1,
        'time': '@datetime',
        'name|1': nameList,
        'status|1': ['草稿', '已发布'],
        'title': '@title(4, 8)'
    }]
})

Mock.mock('/notedata', 'get', noteData)
Mock.mock('/checkdata', 'get', checkData)
Mock.mock('/articledata', 'get', articleData)