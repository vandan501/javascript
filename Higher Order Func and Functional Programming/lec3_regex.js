let pattern='pw';
let regExOne= new RegExp(pattern)

let flag='gi'
let regExTwo=new RegExp(pattern,flag)

let regExThree=/pw/gi;

const strToCheck="pw is growing at a repid speed and recently they are working on pwskills to create skills based pwcontent."

const result=regExThree.test(strToCheck);
// console.log(result);

const anotherResult=strToCheck.match(regExThree);
// const oneanotherResult=strToCheck.replace(regExThree,'p-w');
// console.log(oneanotherResult);

const webUrl="https://github.com/vandan501";
const ans=webUrl.replace(/501/gi,'555');
console.log(ans);


const webUrl2 = "https://pwskills.com/hitesh%220choudhary"

const useableUrl = webUrl2.replace(/%\d\d0/, '-')
console.log(useableUrl);