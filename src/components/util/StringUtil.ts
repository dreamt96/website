export default class StringUtil {
    public static rowToObject(rowStr: string): any {
        let str = rowStr.replace("export default", "");
        str = str.substring(2, str.length - 2);
        str = str.replaceAll("\\n", "");
        str = str.replaceAll("\\r", "");
        str = str.replaceAll("\\", "");
        console.log(str);
        return JSON.parse(str);
    }

    public static markdownToHtml(strInput: string): string {
        let str = strInput;
        str = str.replaceAll("\n", "</br>");
        return str;
    }
}
