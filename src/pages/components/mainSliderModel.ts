export class MainSliderModel {
    private items: Array<any> = [];
    private currentIndex: number = 0;
    public currentItem: any = null;
    constructor(items: Array<any> = []) {
        this.items = items;
        if (this.items.length > 0) {
            this.currentIndex = 0;
            this.currentItem = this.items[this.currentIndex];
        }
    }
    public next(): boolean {
        if (this.currentIndex >= this.items.length - 1) {
            return false;
        }
        this.currentItem = this.items[++this.currentIndex];
        return true;
    }

    public previous(): boolean {
        if (this.currentIndex <= 0) {
            return false;
        }
        this.currentItem = this.items[--this.currentIndex];
        return true;
    }
}