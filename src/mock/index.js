import Mock from 'mockjs'

function tableData() {
    return Mock.mock({
        "tableData|10": [{
            'edit': false,
            'time': '@datetime',
            'import|1': ['一般', '重要', '紧急'],
            'content': '@ctitle(15, 30)'
        }]
    });
}

export { tableData }