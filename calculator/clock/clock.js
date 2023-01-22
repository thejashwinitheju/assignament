function updatecolck(){
 var now = new Date();
 var dname = now.getDay();
     mo = now.getMonth();
     dnum = now.getDate();
     yr = now.getFullYear();
     hou = now.getHours();
     min = now.getMinutes();
     sec = now.getSeconds();
     pe = "AM";


     var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
     var weeks =["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday", "and Saturday"]
     var ids = ["day","month","date","year","hour","minut","second","period"]
     var values = ["dname","mo","dnum","yr","hou","min","sec","pe"]
     for(var i=0; i < ids.length; i++)
     document.getElementsById(ids[i]).firstchild.nodevalue = values[i];
    }
function initclock(){
    updatecolck();
    window.setInterval("updateclock()",1);
}