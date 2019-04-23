import { BasicReporter } from "../reporter";
import { createTree } from "./createTree";
import { DbEntity } from "./dbEntity.type";
import { makeRandNumber } from "../utilities/randomId";
import { makeRandomWord } from "../utilities/randomWord";

class MyReporter extends BasicReporter {
    public launch(params: number[]): void {
        params.forEach(value => {
            const entities = this.generateEntities(value);
            this.startTimer();
            createTree(entities);
            this.stopTimer();
            this.report(value);
            this.reportTime();
        });
    }

    private generateEntities(count: number): DbEntity[] {
        // todo: change entity generator
        const entities: DbEntity[] = [];
        for (let i = 0; i < count - 1; i++) {
            entities.push({
                id: makeRandNumber(count),
                parentId: makeRandNumber(count),
                content: makeRandomWord(),
            });
        }
        return entities;
    }

    private report(value: number): void {
        console.log(`Function createTree with ${value} objects`);
    }
}

const launchParams = [
    1000000,
    5000000,
    10000000
];

const reporter = new MyReporter();
reporter.launch(launchParams);
