// import { BasicReporter } from "../reporter";
// import { EntityCS } from "./entityCS.type";
// import { makeRandomWord } from "../utilities/randomWord";
// import { makeId } from "../utilities/randomId";
// import { customSort } from "./orderByDefinition";

// class MyReporter extends BasicReporter {
//     public launch(params: (number| string)[]): void {
//         params.forEach(value => {
//             const entities = this.generateEntities(value.);
//             this.startTimer();
//             customSort(entities, sort);
//             this.stopTimer();
//             this.report(value);
//             this.reportTime();
//         });
//     }

//     private generateEntities(count: number): EntityCS[] {
//         const entities: EntityCS[] = [];
//         for (let i = 0; i < count; i++) {
//             entities.push({
//                 id: makeId(count),
//                 type: dosome(),
//                 content: makeRandomWord()
//             });
//         }
//         return entities;
//     }

//     private report(value: number): void {
//         console.log(`Function distinctById with ${value} objects`);
//     }
// }

// const launchParams = [
//     1000000,
//     5000000,
//     10000000
// ];

// const reporter = new MyReporter();
// reporter.launch(launchParams);
