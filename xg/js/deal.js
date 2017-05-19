var startTime = new Date('2017-05-17 14:10:00').getTime();
var redDiv = '<div style="background-color:red">&nbsp;</div>';
//实时监控序号
var real_time_watch_number = 0;
$(function () {
    $('#start_btn').click(function () {
        $('#task_time').text('2017-05-17 14:10:00');

        setInterval(function () {
            startTime += 1000;
            var ts = moment(startTime).format('YYYY-MM-DD HH:mm:ss');
            $('#task_time').text(ts);
            listView(ts);
        }, 1000);
    });
    //wacthOrigin();
});

function listView(time) {
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
        var idddsj = sts + 5000;
        var idzxsj = sts + 15000;
        var ddsjDiv = "";
        if (ykssjs[0][3] == 'red') {
            ddsjDiv = redDiv;
        }
        var zxsjDiv = "";
        if (ykssjs[0][4] == 'red') {
            zxsjDiv = redDiv;
        }
        //实时监控序号
        real_time_watch_number=real_time_watch_number+1;
        $('#ykssjs').append(
            '<tr><td>'+real_time_watch_number+'</td><td>' + ykssjs[0][0] +
            '</td><td>' +
            '</td><td>' +
            '</td><td>' + ykssjs[0][5] +
            '</td><td>' + ykssjs[0][1] +
            '</td><td>' + ykssjs[0][2] +
            '</td><td id="' + idddsj + '">' + ddsjDiv +
            '</td><td id="' + idzxsj + '">' + zxsjDiv +
            '</td></tr>');
        //添加完数据后，滚动条在最底部
        var div = document.getElementById('current_watch_scroll');
        div.scrollTop = div.scrollHeight;
        if (ykssjs[0][3] == '') {
            updateTime(idddsj, 5000);
        }
        if (ykssjs[0][4] == '') {
            updateTime(idzxsj, 15000);
        }

        parent.window.viewJkxgjs(ykssjs[0][6]);

        parent.window.viewSbztjs(ykssjs[0][7]);

        ykssjs.splice(0, 1);
    }

}
//循环遥控序列监视数据
function wacthOrigin() {
    for (var i = 0; i < ykxljs.length; i++) {
        $('#watchOriginTable').append(
            '<tr><td>' + ykxljs[i][0] +
            '</td><td>' + ykxljs[i][1] +
            '</td><td>' + ykxljs[i][2] +
            '</td><td>' + ykxljs[i][3] +
            '</td></tr>');
    }
}
//更新时间
function updateTime(idTime, overTime) {
    setTimeout((function (ts) {
        return function () {
            $('#' + ts).text(moment(ts).format('YYYY-MM-DD HH:mm:ss'));
        }
    })(idTime), overTime);
}

function viewJkxgjs(i) {
    if (i == '' || i == '正常') {
        i = 0;
    }
    var data = jkxgjs[i],
        trs = '',
        len = jkxgjs[i].length;
    for (var j = 0; j < len; j++) {
        trs += '<tr>';
        var clen = data[j].length,
            cdata = data[j];
        for (var c = 0; c < clen; c++) {
            var tds = '<td>' + cdata[c] + '</td>';
            if (cdata[c].indexOf(',') > -1) {
                var sps = cdata[c].split(',');
                tds = '<td style="background-color:' + sps[1] + '">' + sps[0] + '</td>';
            }
            trs += tds;
        }
        trs += '</tr>';
    }
    $('#jkxgjs').html(trs);
}

function viewSbztjs(i) {
    if (i == '' || i == '正常') {
        i = 0;
    }
    var data = sbztjs[i],
        trs = '<tr><td></td><td>A</td><td>B</td></tr>',
        len = sbztjs[i].length;
    for (var j = 0; j < len; j++) {
        var clen = data[j].length,
            cdata = data[j];
        for (var c = 0; c < clen; c++) {
            trs += '<tr>';
            var hlen = cdata[c].length;
            hdata = cdata[c];
            for (var h = 0; h < hlen; h++) {
                var tds = '<td>' + hdata[h] + '</td>';
                if (hdata[h].indexOf(',') > -1) {
                    var sps = hdata[h].split(',');
                    tds = '<td style="background-color:' + sps[1] + '">' + sps[0] + '</td>';
                }
                trs += tds;
            }
            trs += '</tr>';
        }
        if (j == 0) trs += '<tr><td colspan="3" style="text-align:center;">前向宽波可用标志</td></tr>';
    }

    $('#sbztjs').html(trs);
}
