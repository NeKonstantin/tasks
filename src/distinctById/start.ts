import { EntityDBI } from "./entityDBI.type";
import { makeId } from "../utilities/randomId";
import { makeRandomWord } from "../utilities/randomWord";
import { distinctById } from "./distinctById";
import { BasicReporter } from "../reporter";

class MyReporter extends BasicReporter {
    public launch(params: number[]): void {
        params.forEach(value => {
            const entities = this.generateEntities(value);
            this.startTimer();
            distinctById(entities);
            this.stopTimer();
            this.report(value);
            this.reportTime();
        });
    }

    private generateEntities(count: number): EntityDBI[] {
        const entities: EntityDBI[] = [];
        for (let i = 0; i < count; i++) {
            entities.push({
                id: makeId(count),
                content: makeRandomWord()
            });
        }
        return entities;
    }

    private report(value: number): void {
        console.log(`Function distinctById with ${value} objects`);
    }

}

const launchParams = [
    1000000,
    5000000,
    10000000
];

const reporter = new MyReporter();
reporter.launch(launchParams);
// to start: node build/src/distinctById/start.js
// npm runDBI
// npm runDBI --values=[10000,20000]
