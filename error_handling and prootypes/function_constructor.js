function Product(n,p,r)
{
    this.name=n;
    this.price=p;
    this.rating=r;
    // return {x:10};
    return this;
}

const p=new Product("macbook",180000,5);
console.log(p);

let x={
    p : Product
}
x.p("vivo",2000,3)
console.log(x);




/*

1  this keyword in js is diff than other languages 

2  this kayword refers to the context from were ChannelSplitterNode

3  in the fun con also 
  1--if u return primitive it is ignored
  2--if you return custome Object,then custom obj will return
  3--if you dont return anything then obj refered by this is returned 

*/