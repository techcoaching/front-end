interface Window{
    jquery:any;
    $:any;
    Reflect: any;
}


interface StringConstructor {
    format(...params: Array<any>): string;
    isNullOrWhiteSpace(value: string): boolean;
    empty: string;
    firstCharToLower(str: string): string;
    toPascalCase(str: string): string;
}
interface Array<T> {
    firstOrDefault(callback: any): any;
    removeItem(item: any): Array<any>;
    any(callback: any): boolean;
    toString(saperator?: string): string;
    merge(items: Array<any>, predicate: any): Array<any>;
}
