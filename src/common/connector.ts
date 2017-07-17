import {IConnector} from "./iconnector";
import {PromiseFactory, Promise} from "./promise";

export class ConnectorFactory {
    public static create(): IConnector {
        return new HttpConnector();
    }
}
class HttpConnector implements IConnector {
    public get(uri: string): Promise {
        var promise = PromiseFactory.create();
        window.jquery.get(uri, function (html) {
            promise.resolve(html);
        });
        return promise;
    }
}