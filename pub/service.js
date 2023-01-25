app.service('myserv', function() {
          this.getServiceList = function () {
    return [];
}
this.getISEndpoint = function() { 
 return 'http://192.168.1.67:5555/';
}
this.getAPIList = function() { 
 return [{"name":"HelloWorld.api:HelloWorld","spec":{"swagger":"2.0","info":{"version":"1.0","title":"HelloWorld"},"host":"192.168.1.67:5555","basePath":"/helloworld","consumes":["application/json"],"produces":["application/json"],"paths":{"/greetings":{"get":{"operationId":"getGreeting","parameters":[{"name":"name","in":"query","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Greeting"}},"401":{"description":"Access Denied"}}}}},"definitions":{"Greeting":{"required":["message"],"properties":{"message":{"type":"string"}}}},"schemes":["HTTP","HTTPS"]}}];
}
this.getCreatedTime = function() { 
 return "25-01-2023 15:42:06 CET";
}
this.getPackageInfo = function(){
 return{"packageName":"HelloWorld","createdDate":"25-01-2023 15:28:57 CET","version":"1.0"};
}
});
