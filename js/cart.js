var prodcuts=[
    {image:"image/productdetailsimg.jpg",
    discrption:"nikon itii",
price:300,
title:"camara"

},
{image:"image/productdetailsimg.jpg",
discrption:"Pc gameing",
price:400,
title:"pc"
},
{image:"image/productdetailsimg.jpg",
discrption:"i phone",
price:500,
title:"phone"
}
,
{image:"image/productdetailsimg.jpg",
discrption:"lab",
price:600,
title:"dell"
}
]
var totalprice=0
function getData()
{

    for(let i=0;i<prodcuts.length;i++)
{
    var total_price=document.getElementById('totalprice');
    var div=document.createElement('div');
    var img=document.createElement('img');
    var title=document.createElement("h2");
    var price=document.createElement('p');
    var des=document.createElement("p");
    var button=document.createElement("button");
    var parent =document.getElementById('orderdetailscontainer')
    img.src=prodcuts[i].image;
    title.innerText=prodcuts[i].title;
    price.innerText=prodcuts[i].price+"$";
    des.innerText=prodcuts[i].discrption;
    totalprice=totalprice+prodcuts[i].price;
    total_price.innerText='Total Price ='+totalprice;
    div.classList.add('card');
    // img.classList.add('cartimg');
    price.classList.add('price')
    button.innerText='Remove From Cart';
    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(price);
    div.appendChild(des);
    div.appendChild(button)
    parent.appendChild(div);


    //  //function for remove item from cart
    div.addEventListener('click', function(){
        // console.log('prodcuts[i].price ='+ prodcuts[i].price)
        // console.log('before '+totalprice)
        totalprice=totalprice-prodcuts[i].price;
        // console.log('after'+totalprice)
        total_price.innerText='Total Price ='+totalprice;
        this.remove();
        //code for removing total price   
        if(totalprice==0)
        {
            var totalpriceremove=document.getElementById('totalprice')
            //change text in paragraph 
            totalpriceremove.innerText='Cart Is Empty Now  '
            // totalpriceremove.remove()
            console.log('total price now  removed')

        }

    })

    
    
}
}






/* anothwe way */
// // tare2a tane lw 3ayzen n4t8l bel localstorage  

// function getData()
// {
//     if(localStorage.getItem('cart')==null||localStorage.getItem('cart')=='[]')
//     {
//         // console.log('create new local storage')
//         localStorage.setItem('cart',JSON.stringify([]));
//         var totalpriceremove=document.getElementById('totalprice')
//         //change text in paragraph 
//         totalpriceremove.innerText='Cart Is Empty Now'
//         return;


//     }
//     var totalprice=0
   
//     var cartitems =localStorage.getItem('cart')
//     cartitems=JSON.parse(cartitems)
//     // console.log(cartitems.length)
//     // console.log(cartitems)


//     for (var i = 0; i < cartitems.length; i++)
//      {
//         var itemprice=cartitems[i].product_price
//         console.log('itemprice '+itemprice)
//             var total_price=document.getElementById('totalprice');
//         let div=document.createElement('div');
//         // 4elna var w7tene let m3a el div 7aletlna mo4klet en eldiv m4 bytms7 lma bn3mel remove from cart
//         var img=document.createElement('img');
//         var title=document.createElement("h2");
//         var price=document.createElement('p');
//         var des=document.createElement("p");
//         var button=document.createElement("button");
//         var parent =document.getElementById('orderdetailscontainer')
//         img.src=cartitems[i].productdetailspage__img;
//         title.innerText=cartitems[i].product_name;
//         price.innerText=cartitems[i].product_price+" EGP";
//         des.innerText=cartitems[i].product_type;
//         totalprice=totalprice+parseInt(cartitems[i].product_price) ;
//         console.log('total price for '+(i+1)+' item = '+totalprice+'\n')
//         div.classList.add('card');
//         // img.classList.add('cartimg');
//         price.classList.add('price')
//         button.innerText='Remove From Cart';
//         div.appendChild(img);
//         div.appendChild(title);
//         div.appendChild(price);
//         div.appendChild(des);
//         div.appendChild(button)
//         parent.appendChild(div);
    
    
//         //  //function for remove item from cart
//         button.addEventListener('click', function(){
//             // console.log('prodcuts[i].price ='+ prodcuts[i].price)
//             // console.log('before '+totalprice)
            
//             totalprice=totalprice-itemprice;
//             // console.log('after'+totalprice)
//             total_price.innerText='Total Price ='+totalprice;
//             div.remove();
//             //code for removing total price   
//             if(totalprice==0)
//             {
//                 var totalpriceremove=document.getElementById('totalprice')
//                 //change text in paragraph 
//                 totalpriceremove.innerText='Cart Is Empty Now  '
//                 // totalpriceremove.remove()
//                 console.log('total price now  removed')
//                 localStorage.removeItem('cart')

    
//             }
    
//         })
    
        
//     }

//     total_price.innerText='Total Price ='+totalprice;   
// }
