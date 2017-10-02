import isEqual from 'lodash/isEqual';
import omit from 'lodash/omit';

import Calc from './calculate';

export default class {
    static findAvailableRoads(points) {
        return points.map((point) => {
            const othersPoints = points
                .filter(otherPoint => !isEqual(point, otherPoint))
                .map(other => omit(other, ['accesible']));

            point.accesible = othersPoints
                .filter((otherPoint) => {
                    const { x: x1, y: y1, r: r1 } = point;
                    const { x: x2, y: y2, r: r2 } = otherPoint;
                    return Calc.areCirclesSticky(x1, y1, x2, y2, r1, r2);
                });

            // console.log('point:', point, "\n");
            return point;
        })
    }

    static findNearestCircle(x, y, circles) {
        return circles.reduce((nearest, circle) => {
            const distanceNearest = Calc.distance(x, y, nearest.x, nearest.y);
            const distance = Calc.distance(x, y, circle.x, circle.y);
            const isNewNearest = distance < distanceNearest && distance <= circle.r;
            return isNewNearest ? circle : nearest;
        }, circles[0]);
    }
}