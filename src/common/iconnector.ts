import {Promise} from "./promise";
export interface IConnector {
    get(uri: string): Promise;
}