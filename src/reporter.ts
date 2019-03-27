export class BasicReporter {
    protected totalTime: string;
    private startTime: number;
    private stopTime: number;


    protected startTimer(): void {
        const startTime = new Date().getTime();
        this.startTime = startTime;
    }
    protected stopTimer(): void {
        const stopTime = new Date().getTime();
        this.stopTime = stopTime;
    }
    protected reportTime(): void {
        this.totalTime = ((this.stopTime - this.startTime) / 1000).toString();
        console.log(`Finished for ${this.totalTime} s`);
    }

}
