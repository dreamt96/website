class TreeNode {

    public init(): TreeNode {
        return new TreeNode(new Array<TreeNode>(), 0, 'home');
    }

    constructor(children: Array<TreeNode>, id: number, name: string) {
        this._children = children;
        this._id = id;
        this._name = name;
    }

    private _children: Array<TreeNode>;

    get children(): Array<TreeNode> {
        return this._children;
    }

    set children(value: Array<TreeNode>) {
        this._children = value;
    }

    private _id: number;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }


    private _name: string;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }


}
