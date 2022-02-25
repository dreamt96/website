export default class DomUtil {
    public static getElementByName(name: string): NodeList {
        return document.getElementsByName(name);
    }

    public static getAttributeValue(ele: HTMLElement, name: string): string {
        let value = ele.getAttribute(name);
        return value ? value : "";
    }

    public static combine(tagName: string, content: string) {
        return "<" + tagName + ">" + content + "<" + tagName + "/>";
    }
}
