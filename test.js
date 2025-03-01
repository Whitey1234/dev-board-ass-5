const now = new Date();

// Get hours, minutes, and seconds
const hours = now.getHours(); // 0-23
const minutes = now.getMinutes(); // 0-59
const seconds = now.getSeconds(); // 0-59
//  console.log ( hours)
//  console.log ( minutes)
//  console.log ( seconds)
   const nowTime = `${ hours}:${minutes}:${seconds}`
    console.log (nowTime)