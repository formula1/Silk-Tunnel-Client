var Tunnel2Proxy = require(__dirname+"/Tunnel2Proxy_com.js");

var tunnel = new Tunnel2Proxy();

methods.add("auth",function(data,call_ob,next){
  tunnel.setServer(data.url,data.pass,next);
})
