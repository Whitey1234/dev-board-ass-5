// time
//const now = new Date();

// Get hours, minutes, and seconds
//const hours = now.getHours(); // 0-23

//  console.log ( minutes)
//  console.log ( seconds)

//date
const now = new Date();
    const dayName = now.toLocaleString("en-US",{ weekday : "long"})
    const monthName = now.toLocaleString( "en-US",{month : "long"})
    
    const day = now.toLocaleString( "en-US",{day : 'numeric'})
    const year = now.toLocaleString( "en-US",{year : "numeric"})
    const banDate = `${dayName}, ${day} ${monthName} ${year}`;
    console.log (banDate);
  
//const now = new Date();

// Get components in Bangla format
// const dayName = now.toLocaleString('bn-BD', { weekday: 'long' }); // Day name in Bangla
// const monthName = now.toLocaleString('bn-BD', { month: 'long' }); // Month name in Bangla
// const day = now.toLocaleString('bn-BD', { day: 'numeric' });      // Day of the month in Bangla
// const year = now.toLocaleString('bn-BD', { year: 'numeric' });    // Year in Bangla

// Combine into a string
//const bangladeshDate = `${dayName}, ${day} ${monthName} ${year}`;

// Display the date
//console.log(bangladeshDate);