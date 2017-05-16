var startTime = new Date('2017-05-17 14:10:00').getTime();
$(function () {
    $('.zh-begin').click(function () {
        parent.window.$('#task_time').text('2017-05-17 14:10:00');

        setInterval(function () {
            startTime += 1000;
            var ts = moment(startTime).format('YYYY-MM-DD HH:mm:ss');
            parent.window.$('#task_time').text(ts);
            listView(ts);
        }, 1000);
    });
//    var len=ykxljs.length;
//    for(var i=0;i<len;i++){
//        $('#ykxljs').append(
//            '<tr><td>' + ykxljs[i][0] + 
//            '</td><td>' + ykxljs[i][1] + 
//            '</td><td>' + ykxljs[i][2] + 
//            '</td><td>' + ykxljs[i][3] + 
//            '</td></tr>');
//    }
});
//列出显示的东西
function listView(time) {
    if (ykssjs[0][2] == time) {
        $('#ykssjs').datagrid('insertRow',{
            index: $('#ykssjs').datagrid('getRows').length,	// index start with 0
            row: {
                no: $('#ykssjs').datagrid('getRows').length+1,
                code: ykssjs[0][0],
                proxyno: ykssjs[0][5],
                fltj: ykssjs[0][1],
                fssj: ykssjs[0][2],
                ddsj: '',
                zxsj: ''
            }
        });
        ykssjs.splice(0, 1);
    }

}