const pcs= [{
    id: "macbookpro2022",
    image: "../Images/producs-images/Laptops/Macbook Pro 2022.png",
    name: "Macbook Pro 2022",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "999",
}, {
    id: "macboookair2019",
    image: "../Images/producs-images/Laptops/Macbook Air 2019.png",
    name: "Macbook Air 2019",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "699",
},  {
    id: "macbook pro 2020",
    image: "../Images/producs-images/Laptops/Macbook Pro 2020.png",
    name: "Macbook Pro 2020",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "750",
},  {
    id: "macbookair2022",
    image: "../Images/producs-images/Laptops/Macbook Air 2022.png",
    name: "Macbook Air 2022",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "999",
},  {
    id: "samsunggalaxybook3",
    image: "../Images/producs-images/Laptops/Samsung Galaxy Book 3.jpeg",
    name: "Samsung Galaxy Book 3 360",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "1099",
},  {
    id: "macboookair2020",
    image: "../Images/producs-images/Laptops/Apple MacBook air 2020.jpeg",
    name: "Apple Macbook Air 2020",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "1399",
},  {
    id: "hpnotebook15",
    image: "../Images/producs-images/Laptops/hp notebook-15.jpeg",
    name: "hp Notebook 15",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "800",
},  {
    id: "delllatitude5300",
    image: "../Images/producs-images/Laptops/DELL Latitude 5300 core i7.jpeg",
    name: "Dell Latitude 5300 core i7",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "599",
},  {
    id: "hppavilion2022",
    image: "../Images/producs-images/Laptops/hp Pavilion Laptop 14 2022.jpeg",
    name: "hp Pavilion 2022",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "850",
},  {
    id: 'macbook pro 13"',
    image: "../Images/producs-images/Laptops/MacBook pro 13 inch.jpeg",
    name: 'Macbook Pro 13"',
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "869",
},  {
    id: "samunggalaxybook3",
    image: "../Images/producs-images/Laptops/Samsung Galaxy Book 3.jpeg",
    name: "Samsung Galaxy Boook 3",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "899",
},  {
    id: "Lenovothinkbook16gen4",
    image: "../Images/producs-images/Laptops/Lenovo ThinkBook 16 Gen 4.jpeg",
    name: "Lenovo Thinkbook 16 Gen 4",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "699",
},  {
    id: "dellinspiron14x360",
    image: "../Images/producs-images/Laptops/DELL INSPIRON 14 x36o core i5.jpeg",
    name: "Dell Inspiron 14 X360 core i5",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "599",
},  {
    id: "galaxynotebook9pro",
    image: "../Images/producs-images/Laptops/Samsung Notebook 9 Pro.jpeg",
    name: "Samsung Galaxy Notebook 9 Pro",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "899",
},  {
    id: "lenovoideapad3i",
    image: "../Images/producs-images/Laptops/Lenovo IdeaPad 3i.jpeg",
    name: "",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "699",
},  {
    id: "macbookpro16'",
    image: "../Images/producs-images/Laptops/Macbook Pro 16-inch.jpeg",
    name: 'Macbook Pro 16"',
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "999",
},  {
    id: "dellvostro3400",
    image: "../Images/producs-images/Laptops/",
    name: "Dell Vostro 3400",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "659",
},  {
    id: "galaxybooks",
    image: "../Images/producs-images/Laptops/",
    name: "Samsung Galaxy Book S",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "899",
},  {
    id: "macbookpro14'2023",
    image: "../Images/producs-images/Laptops/",
    name: 'Macbook Pro 14" 2023',
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "1599",
}];


let pcsHTML = '';
pcs.forEach((pc)=>{
    pcsHTML += `
    <div class="product">
        <div class="product-under">
            <figure class="product-image">
                <img src=${pc.image} 
                alt="popular devices and computers"/>
                <div class="product-over">
                    <button
                        class="btn btn-small addToCart"
                        data-product-id="1"
                    >
                        <i class="fas fa-cart-plus"></i>Add
                        to cart
                    </button>
                    <a
                        href="detail_page.html"
                        class="btn btn-small"
                        >More Info</a
                    >
                </div>
            </figure>
            <div class="product-summary">
                <h4 class="productName">${pc.name}</h4>
                <span class="stars"></span>
                <p>
                    ${pc.description}
                </p>
                <h6 class="price">
                    $<span class="priceValue">${pc.price}</span>
                </h6>
            </div>
        </div>
    </div>
    `;
});