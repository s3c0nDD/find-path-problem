import isEqual from 'lodash/isEqual';
import omit from 'lodash/omit';
import find from 'lodash/find';

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

    // this func is not idiot resistant, does not check if the first circle is correct
    static findNearestCircle(x, y, circles) {
        return circles.reduce((nearest, circle) => {
            const distanceNearest = Calc.distance(x, y, nearest.x, nearest.y);
            const distance = Calc.distance(x, y, circle.x, circle.y);
            const isNewNearest = distance < distanceNearest && distance <= circle.r;
            return isNewNearest ? circle : nearest;
        }, { x: Number.MAX_VALUE, y: Number.MAX_VALUE });
    }



    static programAlgorithm(start, end, circles) {
        const hasPath = (points, current, end) => {
            const stack = [];
            const visited = [];
            let node;

            stack.push(current);
            visited[current.id] = true;

            while (stack.length) {
                node = stack.pop();

                if (isEqual(node, end)) {
                    return true;
                }

                const accesibleNodes = node.accesible || [];
                for (let i = 0; i < accesibleNodes.length; i += 1) {
                    const accesibleNextNode = node.accesible[i];
                    if (node.accesible.includes(accesibleNextNode) && !visited[accesibleNextNode.id]) {
                        stack.push(find(points, { 'id': accesibleNextNode.id }));
                        visited[accesibleNextNode.id] = true;
                    }
                }
            }

            return false;
        };

        const addIds = circles => circles.map((circle, id) => ({ ...circle, id }));
        const points = this.findAvailableRoads(addIds(circles));

        // points.map(point => console.log(point)); //debug
        // console.log('------- end data --------');

        const startCircle = this.findNearestCircle(start.x, start.y, points);
        const endCircle = this.findNearestCircle(end.x, end.y, points);

        return hasPath(points, startCircle, endCircle);
    }
}