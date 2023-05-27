// 

function manipulateString(inputstring,callback)
{
const manipulatedString=inputstring.toUpperCase();
callback(manipulatedString);
}

function logstring(manipulatedString)
{
    console.log(`the manipulated string is : ${manipulatedString}`)
}
manipulateString("hello,world!",logstring);