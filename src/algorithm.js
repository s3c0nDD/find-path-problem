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
}