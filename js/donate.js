$(function() {
	function t(t) {
		var e = "yyyy-MM-dd hh:mm",
			n = new Date(parseInt(t)),
			s = {
				"M+": n.getMonth() + 1,
				"d+": n.getDate(),
				"h+": n.getHours(),
				"m+": n.getMinutes(),
				"s+": n.getSeconds(),
				"q+": Math.floor((n.getMonth() + 3) / 3),
				S: n.getMilliseconds()
			};
		/(y+)/.test(e) && (e = e.replace(RegExp.$1, (n.getFullYear() + "").substr(4 - RegExp.$1.length)));
		for (var o in s) new RegExp("(" + o + ")").test(e) && (e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? s[o] : ("00" + s[o]).substr(("" + s[o]).length)));
		return e
	}
	$.getJSON("http://www.cuishifeng.cn/rs/donate?index=0&limit=100&callback=?", function(e) {
		if (0 == e.status) {
			var n = [];
			$.each(e.response, function(e, s) {
				(parseInt(s.money) > 1 || 0 == s.count) && n.push("<tr><td>" + t(s.time) + '</td> <td class="account">' + s.sec_name + " (" + s.sec_account + ")</td> <td>" + s.money.toFixed(2) + "</td> </tr>")
			}), $("#donate-list").html(n.join(""))
		}
	})
});