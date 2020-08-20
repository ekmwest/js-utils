export function runlock(func) {
    let running = false;
    let result;

    const runlocked = function () {
        if (running) {
            return result;
        }
        running = true;

        let context = this;
        let args = arguments;

        result = func.apply(context, args);

        running = false;

        return result;
    };

    return runlocked;
}
