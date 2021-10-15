let timer = "";

class StopWatch {
    constructor() {
        this.timer;
        this.time = 0;
    }

    start() {
        this.timer = setInterval( () => {
            return document.getElementById('timer').innerHTML = `:${this.time += 1}`;
        }, 1000);
    }

    stop() {
        return clearInterval(this.timer);
    }

    reset() {
        this.time = 0;
        document.getElementById('timer').innerHTML = `:${this.time}`;
        return clearInterval(this.timer);
    }
}

let thisTime = new StopWatch();

document.getElementById('start').addEventListener('click', () => {
    thisTime.start();
})

document.getElementById('stop').addEventListener('click', () => {
    thisTime.stop();
})

document.getElementById('reset').addEventListener('click', () => {
    thisTime.reset();
})