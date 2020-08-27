export function fail(message: string) {
    console.error(message);
    process.exit(0);
}

export function getArguments(count: number) {
    const args = process.argv.slice(2);
    if (args.length !== count)
        fail(`expecting exactly ${count} argument(s), got: ${JSON.stringify(args)}`);
    return args;
}

export class StopWatch {
    private creationTime = Date.now();
    private startTime = Date.now();
    private lastDuration = 0;
    private currentTask = "";

    public start(task: string) {
        this.startTime = Date.now();
        this.currentTask = task;
    }

    public stop() {
        this.lastDuration = Date.now() - this.startTime;
        console.log(`${this.currentTask} -> ${this.lastDuration}ms to complete task\n`);
    }

    public finish() {
        console.log(`\n Done => ${Date.now() - this.creationTime}ms to finish\n`);
    }

    public getLastDuration() {
        return this.lastDuration;
    }
}
