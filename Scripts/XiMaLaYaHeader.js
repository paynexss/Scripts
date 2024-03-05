/*
 脚本搜集、翻译
 脚本功能：喜马LY3
 脚本作者：伟人
 **/

var requestHeaders = $request.headers;
requestHeaders.Cookie = 'channel=ios-b1; 1&_device=iPhone&AA2A90FD-BC81-4492-8DA7-F40B741D1579&9.1.51; 1&_token=98502591&7417D9C0140C4E437CA00F7C4A2F00E1AD46D21DC75BFC8210FE9867BF4C476BD58A7E84CAFD146M2D1D4B762A4C1A3_;idfa=AA2A90FD-BC81-4492-8DA7-F40B741D1579; device_model=iPhone%2011;';
requestHeaders['User-Agent'] = 'ting_v9.1.21_c5(CFNetwork, iOS 15.3.1, iPhone12,1)';
var modifiedRequest = {};
modifiedRequest.headers = requestHeaders;
$done(modifiedRequest);
