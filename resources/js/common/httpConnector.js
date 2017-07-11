class HttpConnector {
    get(tempalteUrl) {
        var promise = PromiseFactory.create();
        $.get(tempalteUrl, function(html){
            promise.resolve(html);
        });
        return promise;
    }
}
var httpConnector = new HttpConnector();