import data from './src/example_data';
import Calc from './src/calculate';
import Alg from './src/algorithm';

(function () {
    const print = console.log;
    start();

    function start() {
        print('=========== APP ===========\n');
        const { start, end, points } = data();

        print(Alg.programAlgorithm(start, end, points));
    }

})();
