import { Toast } from "mint-ui";
export default {
	handleName(state, e) {
		state.username = e.target.value;
		var regp = /1(3|5|7|8)[0-9]{9}/;
		var rege = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
		if(regp.test(state.username) || rege.test(state.username)) {
			state.flagName = true;
		} else {
			state.flagName = false;

			Toast({
				message: "手机号或邮箱错误",
				duration: 1000,
				className: "sty"
			});
		}
	},
	handlePwd(state, e) {
		state.password = e.target.value;
		var reg = /^[0-9A-Za-z]{6,8}$/;
		if(reg.test(state.password)) {
			state.flagPwd = true;
		} else {
			if(state.password.length < 6 || state.password.length > 8) {
				Toast({
					message: "密码应为6-8位",
					duration: 1000,
					className: "sty"
				});
				state.flagPwd = false;
			}
		}
	},
	clearPwd(state) {
		state.password = "";
	},
}