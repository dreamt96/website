import DomUtil from "@/components/util/DomUtil";

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
        console.log("before");
        console.log(strInput);
        let str = strInput;
        str = this.processHeader(str);

        console.log("before br");
        console.log(str);

        str = str.replaceAll("\n", "</br>");
        console.log("after");
        console.log(str);
        return str;
    }

    private static processHeader(str: string) {
        let lines = str.split("\n");
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            let regex = new RegExp(" {0,10}#{1,5} {1,10}");
            let match = regex.exec(line);
            if (match) {
                lines[i] = StringUtil.changeToHtml(line);
            }
        }
        return lines.join("\n");
    }

    /**
     *
     * @param line e.g. ###  title
     * @private
     */
    private static changeToHtml(line: string) {
        let arr = StringUtil.toCharArray(line.trim());
        let times = 0;
        for (let i = 0; i < arr.length; i++) {
            let c = arr[i];
            if (c === "#") {
                times++;
            } else {
                break;
            }
        }
        return DomUtil.combine("h" + times, line.replaceAll("#", "").trim());
    }

    private static toCharArray(line: string) {
        let arr = [];
        for (let i = 0; i < line.length; i++) {
            arr[i] = line.charAt(i);
        }
        return arr;
    }
}
