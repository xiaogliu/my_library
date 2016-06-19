window.onload=function() {
    var oBtn1=document.getElementById('ninebitFull');
    var oBtn2=document.getElementById('ninebitNone');
    var oBtn3=document.getElementById('ninebitReverse');
    var oTabl=document.getElementById('example1')
    var aCh=oTabl.getElementsByTagName('input'); 

    oBtn1.onclick=function() {
        for(var i=0; i<aCh.length; i++) {
            aCh[i].checked=true;
        }
    }
    oBtn2.onclick=function() {
        for(var i=0; i<aCh.length; i++) {
            aCh[i].checked=false;
        }
    }
    oBtn3.onclick=function() {
        for(var i=0; i<aCh.length; i++) {
            if(aCh[i].checked==false) { //for搭配if使用，其中for条件中也对变量i进型了声明
               aCh[i].checked=true;
            }
            else {
                aCh[i].checked=false;
            }
        }
    }
}
