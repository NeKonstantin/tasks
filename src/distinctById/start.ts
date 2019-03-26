import { generateEntity } from "./distinctByIdRandGen";
import { timeCounter } from "../utilities/timeCount";
import { distinctById } from "./distinctById";

function launch(params: number[]): void {
    params.forEach(value => {
        const entities = generator(v);
        this.startTimer();
        this.myFunction(entities);
        this.stopTimer();
        this.report(); // console.logs
    });
}

function startDistinctById(count: number): number {
    const entities = generateEntity(count);
    const time = timeCounter(distinctById, entities);
    return time;
}
startDistinctById(12);

class BasicReporter {
    public timeCounter(func: Function, array: any[]): number {
        const startTime = new Date().getTime();
        const result = func(array);
        const endTime = new Date().getTime();
        const totalTime = endTime - startTime;
        console.log(result);
        return totalTime;
    }

}

class distinctByIdReporter extends BasicReporter {

}

const launchParams = [
    10000,
    50000,
    100000
];

const reporter = new MyReporter();
reporter.launch(launchParams);
// to start: node build/src/distinctById/start.js
// npm runDBI
// npm runDBI --values=[10000,20000]