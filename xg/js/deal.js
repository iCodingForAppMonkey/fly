var startTime = new Date('2017-05-17 14:10:00').getTime();
$(function () {
    $('#start_btn').click(function () {
        $('#task_time').text('2017-05-17 14:10:00');
        var number = 0;
        setInterval(function () {
            startTime += 1000;
            var ts = moment(startTime).format('YYYY-MM-DD HH:mm:ss');
            $('#task_time').text(ts);
            listView(ts);
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
        var sts = new Date(time).getTime();
        var idddsj=sts+5000;
        var idzxsj=sts+15000;
        $('#ykssjs').append(
            '<tr><td>' + ykssjs[0][0] +
            '</td><td>' + 
            '</td><td>' + 
            '</td><td>' + ykssjs[0][5] +
            '</td><td>' + ykssjs[0][1] +
            '</td><td>' + ykssjs[0][2] + 
            '</td><td id="'+idddsj+'">' + 
            '</td><td id="'+idzxsj+'">' + 
            '</td></tr>');
        if(ykssjs[0][3]==''){
            updateTime(idddsj,5000);
        }
        if(ykssjs[0][4]==''){
            updateTime(idzxsj,15000);
        }
        
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
//更新时间
function updateTime(idTime,overTime){
        setTimeout((function (ts) {
            return function () {
                $('#'+ts).text(moment(ts).format('YYYY-MM-DD HH:mm:ss'));
            }
        })(idTime), overTime);
}
