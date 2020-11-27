import { isHappyNumber, isHappyNumberRecursive, isHappyNumberRecursiveSet } from './jewels';
import { StopWatch } from './lib';

const timer = new StopWatch();
timer.start('isHappyNumberRecursiveSet');
for (let i = 0; i < 1000000; i++) {
    isHappyNumberRecursiveSet(i);
}
timer.stop();
timer.start('isHappyNumberRecursive');
for (let i = 0; i < 1000000; i++) {
    isHappyNumberRecursive(i);
}
timer.stop();
timer.start('isHappyNumber');
for (let i = 0; i < 1000000; i++) {
    isHappyNumber(i);
}
timer.stop();
