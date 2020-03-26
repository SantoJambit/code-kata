
export function getArguments(count: number) {
    const args = process.argv.slice(2);
    if (args.length !== count) {
        console.error(`expecting exactly ${count} argument(s), got: ${JSON.stringify(args)}`);
        process.exit(-1);
    }
    return args;
}

export class StopWatch {
    private creationTime = Date.now();
    private startTime = Date.now();
    public start(task: string) {
        this.startTime = Date.now();
        console.log(task);
    }
    public stop() {
        console.log(` -> ${Date.now() - this.startTime}ms to complete task\n`);
    }

    public finish() {
        console.log(`\n Done => ${Date.now() - this.creationTime}ms to finish\n`);
    }
}