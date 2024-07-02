// const amount = 16

// if (amount < 10)
// {
//         console.log('Its a Small Number')
// }
// else{
//         console.log('Its a  Large Number')
// }

// console.log('Hey its My First Node App !!!')

// console.log(__dirname)
// setInterval(()=>{
//     console.log('Hello Mahdi');
// },1000)

// const names=require('./names');
// const sayHi = require ('./utils')
// const data = require('./alternative-flavour')
// // console.log(data)
// require('./granade')
// console.log(names);

// sayHi('Klassen')
// sayHi(names.Mahdi)
// sayHi(names.Ihsan)

// const { readFileSync } = require('fs');
// const os = require('os')

// // info about current user
// const user =os.userInfo()
// console.log(user);

// // methods returns system uptime in seconds

// console.log(`The System Uptime is ${os.uptime()} seconds`);

// const currentOS ={
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem(),
// }
// console.log(currentOS);


// const path= require('path')

// console.log(path.sep);

// const filePath = path.join('/content/','subfolder','test.txt')
// console.log(filePath);

// const base= path.basename(filePath)
// console.log(base);


// const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
// console.log(absolute);

const { readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/subfolder/first.txt','utf8')
const second = readFileSync('./content/subfolder/second.txt','utf8')

// console.log(first,second);
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first},  ${second}` ,
    {flag:'a'}
)