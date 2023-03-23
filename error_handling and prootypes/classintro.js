class Product{
    
    //properties ->variables->data member
    // name;
    // price;
    // rating;

    #rating;

    constructor(n, p, r)
    {
        console.log("calling the coustructor");
        this.name=n;
        this.price=p;
        this.#rating=r;
          // return 10;//if you are returning a primitive then it will be avoided in constructor
        
          //   return {x:10,y:20}; 
        
          //return this;//if you return non primitive then it will be return 
    }

    static custom()
    {
        console.log("calling a static function");
    }


    get RatingGatter()
    {
        console.log(this.#rating);
    }

    set RatingSetter(r)
    {
        if(r<0) return;
        this.#rating=r;
    }

    // // behaviour->function ->member function
    display()
    {
        // return this;
        // console.log("This refers to :",this);
        console.log("Displaying the current product:",this.name,this.price,this.#rating);
      
    }
}

let p=new Product("iphone",10000,5);//new -> create an empty plain object
console.log(p);

// p.rating=10;


// p.setRating(10);
// p.getRating()

p.RatingSetter = 10;
p.RatingGatter;
n
// console.log(p.rating);
p.display();

Product.custom();//we can call static function with the help of class name
