import data from './src/example_data';
import Calc from './src/calculate';
import Alg from './src/algorithm';

(function () {
    const print = console.log;
    start();

    function start() {
        print('=========== APP ===========\n');
        const points = data().points;

        print(JSON.stringify(Alg.findAvailableRoads(points), null, 2));
    }

})();
