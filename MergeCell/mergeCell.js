export default function mergeCell(list){
    for (let field in list[0]) {
        var k = 0;
        while (k < list.length) {
            list[k][field + 'span'] = 1;
            list[k][field + 'hide'] = false;
            for (var i = k + 1; i <= list.length - 1; i++) {
                if (list[k][field] == list[i][field] && list[k][field] != '') {
                    list[k][field + 'span']++;
                    list[k][field + 'hide'] = false;
                    list[i][field + 'span'] = 1;
                    list[i][field + 'hide'] = true;
                } else {
                    break;
                }
            }
            k = i;
        }
    }
    return list;
}