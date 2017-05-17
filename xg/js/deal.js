var startTime = new Date('2017-05-17 14:10:00').getTime();
$(function () {
    $('#start_btn').click(function () {
        $('#task_time').text('2017-05-17 14:10:00');
        var number = 0;
        setInterval(function () {
            startTime += 1000;
            var ts = moment(startTime).format('YYYY-MM-DD HH:mm:ss');
            $('#task_time').text(ts);
            listView(ts,number);
        }, 1000);
    });
    //wacthOrigin();
});

function listView(time,number) {
    //var len=ykxljs.length;
//    if (ykxljs[0][2] == time) {
//        $('#ykxljs').append(
//            '<tr><td>' + ykxljs[0][0] +
//            '</td><td>' + ykxljs[0][1] + 
//            '</td><td>' + ykxljs[0][2] + 
//            '</td><td>' + ykxljs[0][3] + 
//            '</td></tr>');
//        ykxljs.splice(0, 1);
//    }
    if (ykssjs[0][2] == time) {
        number++;
        $('#ykssjs').append(
            '<tr><td>'+number+'</td><td>' + ykssjs[0][0] +
            '</td><td>' + 
            '</td><td>' + 
            '</td><td>' + ykssjs[0][5] +
            '</td><td>' + ykssjs[0][1] +
            '</td><td>' + ykssjs[0][2] + 
            '</td><td>' + 
            '</td><td>' + 
            '</td></tr>');
        ykssjs.splice(0, 1);
    }

}
//循环遥控序列监视数据
function wacthOrigin(){
    for(var i =0 ;i<ykxljs.length;i++){
        $('#watchOriginTable').append(
            '<tr><td>' + ykxljs[i][0] +
            '</td><td>' + ykxljs[i][1] +
            '</td><td>' + ykxljs[i][2] +
            '</td><td>' + ykxljs[i][3] +
            '</td></tr>');
    }
}
