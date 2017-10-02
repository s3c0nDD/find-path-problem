import Alg from './algorithm';
import data from './example_data';

const { start, end, points } = data();

test('with example data it should find nearest circle for start point', () => {
    expect(Alg.findNearestCircle(start.x, start.y, points)).toBe(points[5]);
});

test('with example data it should find nearest circle for end point', () => {
    expect(Alg.findNearestCircle(end.x, end.y, points)).toBe(points[3]);
});

test('with example data it should find path', () => {
    expect(Alg.programAlgorithm(start, end, points)).toBe(true);
});

test('with example data it should not find path if we start from disconnected circle', () => {
    expect(Alg.programAlgorithm(points[2], end, points)).toBe(false);
});