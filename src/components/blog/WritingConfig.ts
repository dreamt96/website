import Blog from "@/components/blog/Blog";

export default class WritingConfig {

    private _blogs:Array<Blog>

    get blogs(): Array<Blog> {
        return this._blogs;
    }


    constructor() {
        this._blogs = new Array<Blog>();
    }

    private static default_: WritingConfig = new WritingConfig();

    static ofDefault() {
        return this.default_;
    }
}
