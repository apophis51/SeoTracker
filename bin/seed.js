const { db, KeywordData } = require('../server/db')





// Requiring the module
const reader = require('xlsx')
  
// Reading our test file
const file = reader.readFile('./rocky.csv',{cellDates: true})
//file reading refferance https://www.geeksforgeeks.org/how-to-read-and-write-excel-file-in-node-js/
  
let data = []
  
const sheets = file.SheetNames
  
for(let i = 0; i < sheets.length; i++)
{
   const temp = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]])
   temp.forEach((res) => {
      data.push(res)
   })
}
  
// Printing data
console.log(data)














// const data = [
//   {
//     keyword: 'best bongs on amazon 2021',
//     serpFeatures: 'Sitelinks',
//     volume: 200,
//     kd: 9,
//     previousOrganicTraffic: 19,
//     currentOrganicTraffic: 10,
//     organicTrafficChange: -9,
//     currentPaidTraffic: 0,
//     previousPosition: 4,
//     currentPosition: 7,
//     positionChange: -3,
//     previousURL: 'https://rockygreenking.com/blogs/bongs/how-to-find-bongs-on-amazon',
//     currentURL: 'https://rockygreenking.com/blogs/bongs/how-to-find-bongs-on-amazon',
//     previousDate: 45013.47670138889,
//     currentDate: 45041.227476851855
//   },
//   // Add more objects as needed
// ];
//  data.sort((a, b) => b.Volume - a.Volume);

async function seedDatabase() {
  try {
    await db.sync({ force: true }); // Drop and recreate the table

    // Insert data into the table
    const map = await Promise.all(data.map(obj => KeywordData.create(obj)));4
    db.close()


    console.log('Database seeded successfully!');
    process.exit(0); // Exit the script
  } catch (error) {
    console.error('Error seeding the database:', error);
    process.exit(1); // Exit the script with an error
  }
}

seedDatabase();
