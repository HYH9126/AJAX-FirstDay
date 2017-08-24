var txt = document.getElementsByTagName('input')[0];
var span = document.getElementsByTagName('span')[0];
txt.onblur = function () {

    const ajax = new XMLHttpRequest;

    ajax.open('get','ajax.php?user='+encodeURI(txt.value));

    ajax.send();

    ajax.onreadystatechange = function () {
        if(ajax.readyState==4){
            if(ajax.status >=200 && ajax.status<=200 || ajax.status==300){
                var a = JSON.parse(ajax.responseText);
                if(a.code==0){
                    span.innerHTML = `我叫${a.data.name}，今年${a.data.age}，爱好：${a.data.hobby}，我想说：${a.data.info}`
                }else{
                    span.innerHTML = '查无此人'
                }
            }else {
                alert(ajax.status)
            }
        }
    }

}