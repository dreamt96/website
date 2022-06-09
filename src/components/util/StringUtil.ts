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
        let str = strInput;
        str = this.parseMarkdown(str);
        console.log(`from markdown \n ${strInput} to html \n ${str}`);
        return str;
    }

    private static parseMarkdown(str: string) {
        let lines = str.split("\n");
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            let regex = new RegExp(" {0,10}#{1,5} {1,10}");
            let match = regex.exec(line);
            if (match) {
                line = StringUtil.headerToHtml(line);
                lines[i] = line;
            }else{
                line = StringUtil.pToHtml(line);
                lines[i] = line;
            }

            regex = new RegExp("\\[.{1,20}]\\(https{0,1}:\\/\\/.{1,100}\\)");
            match = regex.exec(line);
            if (match) {
                line = StringUtil.urlToHtml(line);
                lines[i] = line;
            }
        }
        return lines.join("\n");
    }

    /**
     *
     * @param line e.g. ###  title
     * @private
     */
    private static headerToHtml(line: string) {
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

    private static urlToHtml(line: string) {
        let title = line.substring(line.indexOf("[")+1, line.indexOf("]"));
        let url = line.substring(line.indexOf("(")+1, line.indexOf(")"))
        return "<a href='" + url + "'>" + title + "</a>";
    }

    private static pToHtml(line: string) {
        return `<p>${line}</p>`;
    }
}
