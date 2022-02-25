export default class PathUtil {

    public static remove(path: string, index: number): string {
        let arr = path.split("/");
        arr.splice(index, 1);
        return arr.join("/");
    }

    public static count(path: string): number {
        return path.split("/").length;
    }
}
