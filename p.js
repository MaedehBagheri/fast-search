const products =[
{title:"node js course"},
{title:"mastering react.js course"},
{title:"advanced javascript (js) course"},
{title:"git-git hub course"},

];

const input = document.querySelector("#search-product");

const productsDiv = document.querySelector("#products");

const filters ={
    searchItem :"",
}



function renderProducts (_product,_filters){
const filteredProducts =_product.filter((item) => {
    return item.title.toLowerCase().includes(_filters.searchItem.toLowerCase());
})


productsDiv.innerHTML ="";

filteredProducts.forEach((element) =>{
    
    const p =document.createElement("p");
    p.textContent =element.title;
    productsDiv.appendChild(p);
    
});

}

renderProducts(products,filters);









input.addEventListener("input",(e) => {
  filters.searchItem = e.target.value;
  renderProducts(products,filters);

})