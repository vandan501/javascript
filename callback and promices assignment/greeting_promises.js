function greet(name)
{
    return new Promise((resolve)=>
    {
        const greeting=`Hello ,${name}!`;
        resolve(greeting);
    });
}

greet("Vandan").then((message)=>console.log(message));