class PromiseFactory {
    static create() {
        return new Promise();
    }
}
class Promise {
    resolve(data) {
        this.status = PromiseStatus.Completed;
        this.data = data;
        this.onChanged();
    }
    then(callback) {
        this.successCallback = callback;
        this.onChanged();
        return this;
    }
    onChanged() {
        if (this.status == PromiseStatus.Completed && this.successCallback) {
            this.successCallback(this.data);
        }
    }
}