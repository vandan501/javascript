const Product=(n,p,r)=>{
    this.name=n;
    this.price=p;
    this.rating=r;

}

const p=new Product("MI",2000,3)
console.log(p);

//the theory of this keyword pointing to callingcontext is not applicable for arrow function