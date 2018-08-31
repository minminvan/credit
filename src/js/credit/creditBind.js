jQuery.validator.addMethod("isMobile",function(value,element){
	var length = value.length;
	var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
	return this.optional(element) || (length == 11 && mobile.test(value));
},"请填写正确的手机号码");

$().ready(function(){
	$(".credit-bind-panel").validate({
		rules: {
			creditNum: {
				required: true,
				creditcard: true,
			},
			ownerName: {
				required: true,
			},
			cvv2: {
				required: true,
			},
			exp: {
				required: true,
			},
			phoneNum: {
				required: true,
				isMobile: true,
			},
			code: {
				required: true,
				digits: true,
			},
		},
		messages: {
			creditNum: {
				required: "请输入信用卡号",
				creditcard: "请输入正确的信用卡号",
			},
			ownerName: {
				required: "请输入持卡人姓名",
			},
			cvv2: {
				required: "请输入cvv2",
			},
			exp: {
				required: "请输入有效期",
			},
			phoneNum: {
				required: "请输入手机号",
				isMobile: "请输入正确的手机号",
			},
			code: {
				required: "请输入验证码",
				digits: "验证码应该输入数字"

			}
		}
	})
})

