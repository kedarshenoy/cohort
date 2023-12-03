// Create a counter in Javascript (counts down from 30 to 0
// let count=0;
// for(let i=30;i>0;i--){
//     console.log(count+'+'+i)
// count=count+i;
// }

// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
// Calculate the time it takes between a setTimeout call and the inner function actually running

// const start = performance.now();

// setTimeout(() => {
//   const end = performance.now();
//   const timetaken = end - start;

//   console.log(`Time timetaken: ${timetaken} milliseconds`);
// }, 1000);

// -------------------------------------------------------------------------------------------------------------

// Create a terminal clock (HH:MM:SS)

// setInterval(
    
//     ()=>{const now = new Date();process.stdout.write('\x1B[2J\x1B[0f'); console.log(`Time: ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} `)}
//     ,1000)