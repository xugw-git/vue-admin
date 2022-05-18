import Mock from 'mockjs'

function noteData() {
    return Mock.mock({
        "data|10": [{
            'edit': false,
            'time': '@datetime',
            'import|1': ['一般', '重要', '紧急'],
            'content': '@ctitle(10, 30)'
        }]
    });
}

function checkData() {
    return Mock.mock({
        "data|20": [{
            "id|+1": 1,
            'time': '@datetime',
            'author': '@cname',
            'rate': '@integer(1, 5)',
            'content': '@ctitle(10, 30)'
        }]
    });
}

export { noteData, checkData }