import Calc from './src/calculate';
import Alg from './src/algorithm';
import data from './src/example_data';

test('distance from 0,0 to 0,5 should return 5', () => {
    expect(Calc.distance(0, 0, 0, 5)).toBe(5);
});

test('distance from 0,0 to 3,4 should return 5', () => {
    expect(Calc.distance(0, 0, 3, 4)).toBe(5);
});

test('isLessOrSame for 5,4 should return false', () => {
    expect(Calc.isLessOrSame(5,4)).toBe(false);
});

test('isLessOrSame for 4,4 should return false', () => {
    expect(Calc.isLessOrSame(4,4)).toBe(true);
});

test('isLessOrSame for 3,4 should return false', () => {
    expect(Calc.isLessOrSame(3,4)).toBe(true);
});

test('point 0,0 for circle 3,3 r=10 should return true', () => {
    expect(Calc.isPointInCircle(0,0,3,3,10)).toBe(true);
});

test('point 0,0 for circle 0,3 r=3 should return true', () => {
    expect(Calc.isPointInCircle(0,0,0,3,3)).toBe(true);
});

test('point 0,0 for circle 0,3 r=2 should return false', () => {
    expect(Calc.isPointInCircle(0,0,0,3,2)).toBe(false);
});

test('circles 0,0 r=1 and 0,5 r=3 should NOT be sticky', () => {
    expect(Calc.areCirclesSticky(0,0,0,5,1,3)).toBe(false);
});

test('circles 0,0 r=1 and 0,5 r=4 should be sticky', () => {
    expect(Calc.areCirclesSticky(0,0,0,5,1,4)).toBe(true);
});

test('circles 0,0 r=1 and 0,5 r=5 should be sticky', () => {
    expect(Calc.areCirclesSticky(0,0,0,5,1,5)).toBe(true);
});

test('circles 6,11 r=4 and 8,17 r=3 should be sticky', () => {
    expect(Calc.areCirclesSticky(6,11,8,17,4,3)).toBe(true);
});

test('circles 6,11 r=4 and 15,7 r=6 should be sticky', () => {
    expect(Calc.areCirclesSticky(6,11,15,7,4,6)).toBe(true);
});

test('circles 6,11 r=4 and 19,11 r=4 should NOT be sticky', () => {
    expect(Calc.areCirclesSticky(6,11,19,11,4,4)).toBe(false);
});

test('circles 12,19 r=4 and 8,17 r=3 should be sticky', () => {
    expect(Calc.areCirclesSticky(12,19,8,17,4,3)).toBe(true);
});

test('circles 12,19 r=4 and 19,11 r=4 should NOT be sticky', () => {
    expect(Calc.areCirclesSticky(12,19,19,11,4,3)).toBe(false);
});

const { start, end, points } = data();

test('with example data should find nearest circle for start point', () => {
    expect(Alg.findNearestCircle(start.x, start.y, points)).toBe(points[5]);
});

test('with example data should find nearest circle for end point', () => {
    expect(Alg.findNearestCircle(end.x, end.y, points)).toBe(points[3]);
});