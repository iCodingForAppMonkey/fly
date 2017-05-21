var startTime = new Date('2017-05-17 14:10:00').getTime();
var redDiv = '<div style="background-color:red">&nbsp;</div>';
var timer=null;
$(function () {
    $('.zh-begin').click(function () {
        if(timer==null){
            parent.window.$('#task_time').text('2017-05-17 14:10:00');

            timer=setInterval(function () {
                startTime += 1000;
                var ts = moment(startTime).format('YYYY-MM-DD HH:mm:ss');
                parent.window.$('#task_time').text(ts);
                listView(ts);
            }, 1000);
        }
        
    });
});
var fIndex = 0;
//列出显示的东西
function listView(time) {
    if (sdzr[0]) {
        if (sdzr[0][2] == time) {
            $('#fffff').datagrid('insertRow', {
                index: fIndex, // index start with 0
                row: {
                    code: sdzr[0][0],
                    addr: sdzr[0][1]
                }
            });
            sdzr.splice(0, 1);

            $('#noticeBybackground').css('background-color', 'yellow');
            setTimeout(function () {
                $('#noticeBybackground').css('background-color', 'white');
            }, 60000);

            fIndex++;
        }
    }
    if (ykssjs[0]) {

        if (ykssjs[0][2] == time) {
            var idx = $('#ykssjs').datagrid('getRows').length;

            $('#ykssjs').datagrid('insertRow', {
                index: idx, // index start with 0
                row: {
                    no: $('#ykssjs').datagrid('getRows').length + 1,
                    code: ykssjs[0][0],
                    proxyno: ykssjs[0][5],
                    fltj: ykssjs[0][1],
                    fssj: ykssjs[0][2],
                    ddsj: '',
                    zxsj: ''
                }
            });
            if (ykssjs[0][5] == '手动') {
                $('#noticeBybackground').css('background-color', 'white');
            }
            //到达时间，执行时间处理
            jstimes(idx, ykssjs[0][3], ykssjs[0][4]);

            parent.window.viewJkxgjs(ykssjs[0][6]);

            parent.window.viewSbztjs(ykssjs[0][7]);

            ykssjs.splice(0, 1);
        }
    }

}

function jstimes(idx, ddsj, zxsj) {
    if (ddsj == '') {
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
    if (zxsj == '') {
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


    if (ddsj == 'red') {
        setTimeout((function (ixd) {
            return function () {
                $('#ykssjs').datagrid('updateRow', {
                    index: ixd,
                    row: {
                        ddsj: redDiv
                    }
                });
            }
        })(idx), 5000);
    }
    if (ykssjs[0][4] == 'red') {
        setTimeout((function (ixd) {
            return function () {
                $('#ykssjs').datagrid('updateRow', {
                    index: ixd,
                    row: {
                        zxsj: redDiv
                    }
                });
            }
        })(idx), 15000);
    }
}
