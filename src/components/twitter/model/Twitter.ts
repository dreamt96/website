export default class Twitter {
    private content: string;
    private createTime: Date;


    constructor(content: string, createTime: Date) {
        this.content = content;
        this.createTime = createTime;
    }
}
