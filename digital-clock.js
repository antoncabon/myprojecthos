$(document.body).append('<div id="clockdate-full"><div class="wrapper-clockdate"><div id="clock-large"/><div id="date-large"/></div></div>');
$(window).on("beforeunload", function() {
    $('#clockdate-full').fadeIn(500).delay(8000).fadeOut(1000);
});

function showTime(){var a_p="";var today=new Date();var curr_hour=today.getHours();var curr_minute=today.getMinutes();var curr_second=today.getSeconds();if(curr_hour<12){a_p="<span>AM</span>"}else{a_p="<span>PM</span>"}if(curr_hour==0){curr_hour=12}if(curr_hour>12){curr_hour=curr_hour-12}curr_hour=checkTime(curr_hour);curr_minute=checkTime(curr_minute);curr_second=checkTime(curr_second);document.getElementById("clock-large").innerHTML=curr_hour+" : "+curr_minute+" : "+curr_second+" "+a_p}function checkTime(i){if(i<10){i="0"+i}return i}setInterval(showTime,500);

var months=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];var myDays=["Minggu","Senin","Selasa","Rabu","Kamis","Jum&#39;at","Sabtu"];var date=new Date();var day=date.getDate();var month=date.getMonth();var thisDay=date.getDay(),thisDay=myDays[thisDay];var yy=date.getYear();var year=(yy<1000)?yy+1900:yy;document.getElementById("date-large").innerHTML="<b>"+thisDay+"</b>, "+day+" "+months[month]+" "+year;