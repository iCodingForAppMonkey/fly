var startTime = new Date('2017-05-17 14:10:00').getTime();
var redDiv='<div style="background-color:red">&nbsp;</div>';
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
});
//列出显示的东西
function listView(time) {
    if (ykssjs[0][2] == time) {
        var idx = $('#ykssjs').datagrid('getRows').length;
        var ddsjDiv="";
        if(ykssjs[0][3]=='red'){
            ddsjDiv=redDiv;
        }
        var zxsjDiv="";
        if(ykssjs[0][4]=='red'){
            zxsjDiv=redDiv;
        }
        $('#ykssjs').datagrid('insertRow', {
            index: idx, // index start with 0
            row: {
                no: $('#ykssjs').datagrid('getRows').length + 1,
                code: ykssjs[0][0],
                proxyno: ykssjs[0][5],
                fltj: ykssjs[0][1],
                fssj: ykssjs[0][2],
                ddsj: ddsjDiv,
                zxsj: zxsjDiv
            }
        });
        if(ykssjs[0][5]=='手动'){
            $('#noticeBybackground').css('background-color','yellow');
            setTimeout(function (){
                       $('#noticeBybackground').css('background-color','white');
            },60000);
        }
        //到达时间，执行时间处理
        jstimes(idx,ykssjs[0][3],ykssjs[0][4]);
        
        parent.window.viewJkxgjs(ykssjs[0][6]);
        
        parent.window.viewSbztjs(ykssjs[0][7]);
        
        ykssjs.splice(0, 1);
    }
}

function jstimes(idx,ddsj,zxsj) {
    if(ddsj==''){
        setTimeout((function (ixd) {
            return function () {
                $('#ykssjs').datagrid('updateRow', {
                    index: ixd,
                    row: {
                        ddsj: moment(startTime).format('YYYY-MM-DD HH:mm:ss')
                    }
                });
            }
        })(idx), 5000);
    }
    if(zxsj==''){
        setTimeout((function (ixd) {
            return function () {
                $('#ykssjs').datagrid('updateRow', {
                    index: ixd,
                    row: {
                        zxsj: moment(startTime).format('YYYY-MM-DD HH:mm:ss')
                    }
                });
            }
        })(idx), 15000);
    }
}


