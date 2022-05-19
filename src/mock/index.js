import Mock from 'mockjs'

function noteData() {
    return Mock.mock({
        "data|10": [{
            'edit': false,
            'time': '@datetime',
            'import|1': ['一般', '重要', '紧急'],
            'content': '@title(3, 6)'
        }]
    });
}

function checkData() {
    return Mock.mock({
        "data|100": [{
            "id|+1": 1,
            'time': '@datetime',
            'author': '@cname',
            'rate': '@integer(1, 5)',
            'content': '@title(3, 6)'
        }]
    });
}

export { noteData, checkData }