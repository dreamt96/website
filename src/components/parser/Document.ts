// todo
export default class Document {

    private nodes: Array<Document>;
    private type: DocumentType;


    constructor(nodes: Array<Document>, type: DocumentType) {
        this.nodes = nodes;
        this.type = type;
    }
}

enum DocumentType {

    p, h1, h2, h3, h4, h5, h6,link
}
