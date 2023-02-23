// function declaration

function sumOfAllParameters()
{
    let sum=0;
    for(let i=0;i<arguments.length;i++)
    {
        sum=sum+arguments[i];

    }
    return sum;
}
let result=sumOfAllParameters(1,2,3,4,5);
console.log("sum=>",result);

// op-->sum=> 15


