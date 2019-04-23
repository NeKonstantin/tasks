import { BasicReporter } from "../reporter";
import { EntityCS, ECSType } from "./entityCS.type";
import { makeRandomWord } from "../utilities/randomWord";
import { customSort } from "./orderByDefinition";

class MyReporter extends BasicReporter {
    private sortOrder: ECSType[];
    private possibleOrderTypes: ECSType[]  = [
        0, 1, "0", "", null, undefined, NaN
    ];
    public launch(params: number[], params2: number[]): void {
        params.forEach(value => {
            const entities = this.generateEntities(value);
            this.startTimer();
            this.makeOrder();
            customSort(entities, this.sortOrder);
            this.stopTimer();
            this.report(value);
            this.reportTime();
        });
    }
    private makeOrder(): void {
        const tempOrderTypes = [...this.possibleOrderTypes];
        function shuffle(a: (number|string), b: (number|string)): number {
            return Math.random() - 0.5;
        }
        tempOrderTypes.sort(shuffle);
        this.sortOrder = tempOrderTypes;
    }

    private doTypo(): ECSType {
        const typo = Math.random() * 9;
        switch (typo) {
            case 0:
                return 0;
                break;
            case 1:
                return 1;
                break;
            case 2:
                return "0";
                break;
            case 3:
                return "";
                break;
            case 4:
                return null;
                break;
            case 5:
                return undefined;
                break;
            case 6:
                return NaN;
                break;
            case 7:
                return 123;
                break;
            case 8:
                return "123";
                break;
            default:
                return 0;
                break;
        }
    }

    private generateEntities(count: number): EntityCS[] {
        const entities: EntityCS[] = [];
        for (let i = 0; i < count; i++) {
            entities.push({
                id: i + 1,
                type: this.doTypo(),
                content: makeRandomWord()
            });
        }
        return entities;
    }

    private report(value: number): void {
        console.log(`Function customSort with ${value} objects`);
    }
}

const launchParams = [
    1000000,
    5000000,
    10000000
];

const launchParams2 = [
    1000000,
    5000000,
    10000000
];

const reporter = new MyReporter();
reporter.launch(launchParams, launchParams2);
