import { PromiseStatus } from "./enum";
export class PromiseFactory {
    static create() {
        return new Promise();
    }
}
export class Promise {
    private data: any = null;
    private status: PromiseStatus = PromiseStatus.None;
    private successCallback: any = null;
    
    public resolve(data) {
        this.status = PromiseStatus.Completed;
        this.data = data;
        this.onChanged();
    }
    public then(callback) {
        this.successCallback = callback;
        this.onChanged();
        return this;
    }
    private onChanged() {
        if (this.status == PromiseStatus.Completed && this.successCallback) {
            this.successCallback(this.data);
        }
    }
}