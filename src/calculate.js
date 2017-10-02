export default class {
    static distance(x1, y1, x2, y2) {
        const { sqrt, pow } = Math;
        return sqrt(pow((x2 - x1), 2) + pow((y2 - y1), 2));
    }

    static isLessOrSame(val1, val2) {
        return val1 <= val2;
    }

    static isPointInCircle(pointX, pointY, x, y, r) {
        const { distance, isLessOrSame } = this;

        return isLessOrSame(distance(pointX, pointY, x, y), r);
    }

    static areCirclesSticky(x1, y1, x2, y2, r1, r2) {
        const { distance, isLessOrSame } = this;
        return isLessOrSame(distance(x1, y1, x2, y2), r1 + r2);
    }
}