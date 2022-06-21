class TreeNodeNonRecursive {
    constructor(id: number, name: string, parentId: number) {
        this._id = id;
        this._name = name;
        this._parentId = parentId;
    }

    private _id: number

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    private _name: string

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    private _parentId: number

    get parentId(): number {
        return this._parentId;
    }

    set parentId(value: number) {
        this._parentId = value;
    }
}
