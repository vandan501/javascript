let myHeros=["thor","spiderman"];
let dcHeros=["batman","flash","superman"]

    let heropower={
        thor:"hammer",
        spiderman:"sling",

        getSpidermanPower: function()
        {
            console.log(`spidy power is ${this.spiderman}`);
        }
    }

    Object.prototype.vandan=function()
    {
        console.log("vandan is present in all objects");
    }

    console.log(myHeros.vandan());
    console.log(heropower.vandan());

    Array.prototype.heyVandan=function()
    {
        console.log("vandan jiii");
    }

    // console.log(myHeros.heyvandan());
    // console.log(heropower.heyvandan());



    //inheritance

    const User={
        eame:"vandan",
        email:"vandan2002@gmail.com"
    }
    const Teacher={
        makeVideos:true
    }
    const TeachingSupport={
        isAvailable:false
    }
    const TAAssistant={
        makeAssignment:"JS assignment",
        fulltime:true,
        __proto__:TeachingSupport

    }

    // Teacher.__proto__=User;

    // Object.setPrototypeOf(TeachingSupport,Teacher)


    String.prototype.truelength = function()
    {   
        console.log(`True length is ${this.trim().length}`);
    }

"vandan.   ".truelength()
"ram.".truelength()

    // console.log(TAAssistant.isAvailable);
    