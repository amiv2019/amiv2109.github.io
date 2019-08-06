function showTime() { 
	var currentDate = new Date(); 
	var startDate = new Date(2014, 03, 20);
	var date3 = currentDate-startDate;
	var days=Math.floor(date3/(24*3600*1000));
	var leave1=date3%(24*3600*1000);     //计算天数后剩余的毫秒数
	var hours=Math.floor(leave1/(3600*1000));
	var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
	var minutes=Math.floor(leave2/(60*1000));
	var leave3=leave2%(60*1000);          //计算分钟数后剩余的毫秒数
	var seconds=Math.round(leave3/1000);
	if (minutes < 10) 
	minutes = "0" + minutes; 
	if (seconds < 10) 
	seconds = "0" + seconds; 
	var currentTimeString = "<c style=\"color: #fff; text-shadow:2px 3px 3px #222; font-size:16px\" >Justin:</c><br>"
		+ "<c style=\"color: #fff; text-shadow:2px 3px 3px #222; font-size:16px\" >We have been in love with you for:</c><br> "
		+ "&nbsp&nbsp&nbsp&nbsp&nbsp"
		+ "<c style=\"color: #CCFF99; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px\" >" + days +" </c><c style=\"color: #fff; text-shadow:2px 3px 3px #222; font-size:16px\" >day </c>" 
		+ "<c style=\"color: #CCFF99; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px\" >" + hours+" </c><c style=\"color: #fff; text-shadow:2px 3px 3px #222; font-size:16px\" >hour </c>"
		+"<c style=\"color: #CCFF99; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px\" >" + minutes+" </c><c style=\"color: #fff; text-shadow:2px 3px 3px #222; font-size:16px\" >min </c>"
		+"<c style=\"color: #CCFF99; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:24px\" >" +seconds+" </c><c style=\"color: #fff; text-shadow:2px 3px 3px #222; font-size:16px\" >sec</c><br>"
		+ "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<c style=\"color: #fff; text-shadow:2px 3px 3px #222; font-size:16px\" >只愿用彩虹的浪漫,温柔包装.</c><br>"
		+	"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<c style=\"color: #CCCCCC;text-align:right; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:20px\" >----amiv   2019-09-08</c>"; 
	document.getElementById("show").innerHTML=currentTimeString;  //改这地方
	window.setTimeout("showTime()", 1000); 
} 
