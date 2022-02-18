export default class Blog {

    private _path: string;
    private _title: string;

    get title(): string {
        return this._title;
    }

    get path(): string {
        return this._path;
    }

    constructor(path: string, title: string) {
        this._path = path;
        this._title = title;
    }
}
