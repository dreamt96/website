import Twitter from "@/components/twitter/model/Twitter";

export default class TwitterList {
    twitters: Array<Twitter>


    constructor() {
        this.twitters = new Array<Twitter>();
    }
}
