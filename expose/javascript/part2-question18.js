function printTime() {
    let d = new Date();
    console.log(d.toLocaleTimeString());
}

const interval = setInterval(printTime, 1000);
