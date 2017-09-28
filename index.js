import data from './src/example_data';
import Calc from './src/calculate';

const print = (text) => console.log(text);
start();

function start() {
    print('=========== APP ===========\n');
    // print(Calc.distance(0, 0, 4, 5));
    // print(Calc.isLessOrSame(5,4));
    // print(Calc.isLessOrSame(4,4));
    // print(Calc.isLessOrSame(3,4));
    print(Calc.isPointInCircle(0, 0, 4, 5, 4));
    print(Calc.isPointInCircle(0, 0, 4, 5, 3));
    print(Calc.isPointInCircle(0, 0, 4, 5, 2));
}
