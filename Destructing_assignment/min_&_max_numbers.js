    /*You are building a program that needs to find the maximum and minimum values in an array of numbers. You decide to write a function that can accomplish this task by taking an array of numbers as input and using the spread operator with the Math methods max() and min(). The function should return an object with two properties, max, and min, representing the maximum and minimum values in the input array, respectively. For example, if the input array is [5, 2, 7, 1, 9], the function should return an object { max: 9, min: 1 }.*/

    const array=[3,5,43,21,1,43,54,65];
    function Min_max(array)
    {
    const max=Math.max(...array);
    const min=Math.min(...array);
    console.log(`Maximum number is:${max}`)
    console.log(`Minimum number is:${min}`)
    }
    Min_max(array);