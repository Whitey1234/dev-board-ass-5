// ..................... number discreace function.....................

 function taskAssinged(total){
    console.log (total)
const convertTotal = parseInt(total);
const cal = convertTotal - 1;
return cal;
}

// ..................... number Add function.....................

function pointAdd(total){
    console.log (total)
const convertTotal = parseInt(total);
const cal = convertTotal  + 1;
return cal;
}
// ......time function......

function time (){
    const now = new Date();

// Get hours, minutes, and seconds
const hours = now.getHours(); // 0-23
const minutes = now.getMinutes(); // 0-59
const seconds = now.getSeconds(); // 0-59
//  console.log ( hours)
//  console.log ( minutes)
//  console.log ( seconds)
    return  nowTime = `${ hours}:${minutes}:${seconds}`
    //console.log (nowTime)
}
