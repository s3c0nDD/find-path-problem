export default class {
    static distance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) + (y2 - y1));
    }

    static isLessOrSame(val1, val2) {
        return val1 <= val2;
    }

    static isPointInCircle(x1, y1, x2, y2, r) {
        const { distance, isLessOrSame } = this;
        return isLessOrSame(distance(x1, y1, x2, y2), r);
    }
}