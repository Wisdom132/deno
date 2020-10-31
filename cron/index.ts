import { cron, everyMinute, daily, monthly, weekly,start,stop } from 'https://deno.land/x/deno_cron/cron.ts';


let task = cron('*/30 * * * * *', () => {
    // run some task
    console.log('This is a same thing')
});

// let someBool = false
// if (someBool) {
//     start()
// } else {
//     stop()
// }

// daily(() => {
//     console.log('I run on daily basis')
// });

// weekly(() => {
// console.log('This method will run on weekly bases')
// });

// stop()
// start()