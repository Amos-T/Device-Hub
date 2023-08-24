const mobiles = [{
    id: "samsunggalaxya12",
    image: "../Images/producs-images/Mobiles/Galaxy A12.jpeg",
    name: "Samsung Galaxy A12",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "399",
},  {
    id: "galaxyzflip",
    image: "../Images/producs-images/Mobiles/Galaxy Z Flip 4.jpeg",
    name: "Samsung Galaxy Z Flip 4",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "899",
},  {
    id: "zfold4",
    image: "../Images/producs-images/Mobiles/Galaxy Z Fold 4.jpeg",
    name: "Samsung Galaxy Z Fold 4",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "1500",
},  {
    id: "galaxynote20",
    image: "../Images/producs-images/Mobiles/Galaxy Note 20.jpeg",
    name: "Samsung Galaxy Note 20",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "899",
},  {
    id: "s22ultra",
    image: "../Images/producs-images/Mobiles/",
    name: "Samsung Galaxy S22 Ultra",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "1099",
},  {
    id: "14promax",
    image: "../Images/producs-images/Mobiles",
    name: "Iphone 14 Pro Max",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "1399",
},  {
    id: "galaxynote10",
    image: "../Images/producs-images/Mobiles",
    name: "Samsung Galaxy Note 10",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "800",
},  {
    id: "12promax",
    image: "../Images/producs-images/Mobiles",
    name: "Iphone 12 Pro Max",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "599",
},  {
    id: "13promax",
    image: "../Images/producs-images/Mobiles",
    name: "Iphone 13 Pro Max",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "850",
},  {
    id: "13pro",
    image: "../Images/producs-images/Mobiles",
    name: "Iphone 13 Pro",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "769",
},  {
    id: "galaxya24",
    image: "../Images/producs-images/Mobiles",
    name: "Samsung Galaxy A24",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "769",
},  {
    id: "galaxym33",
    image: "../Images/producs-images/Mobiles",
    name: "Samsung Galaxy M33",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "769",
},  {
    id: "huaweiy9lite",
    image: "../Images/producs-images/Mobiles",
    name: "Huawei Y9 Lite",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "769",
},  {
    id: "huaweip50pro",
    image: "../Images/producs-images/Mobiles",
    name: "Huawei P50 Pro",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "549",
},  {
    id: "infinixhot11pro",
    image: "../Images/producs-images/Mobiles",
    name: "Infinix Hot 11 Pro",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "299",
},  {
    id: "infinixzero2023",
    image: "../Images/producs-images/Mobiles",
    name: "Infinix Zero 2023",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "499",
},  {
    id: "Oppoa76",
    image: "../Images/producs-images/Mobiles",
    name: "Oppo A76",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "469",
},  {
    id: "huaweip40pro",
    image: "../Images/producs-images/Mobiles",
    name: "Huawei P40 Pro",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "469",
},  {
    id: "infinixhot30i",
    image: "../Images/producs-images/Mobiles",
    name: "Infinix Hot 30i",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "239",
},  {
    id: "infinixsmart7plus",
    image: "../Images/producs-images/Mobiles",
    name: "Infinix Smart 7 Plus",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "369",
},  {
    id: "tecnophantomx2pro",
    image: "../Images/producs-images/Mobiles",
    name: "Tecno Phantom X2 Pro",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "699",
},  {
    id: "tecnosparkgo",
    image: "../Images/producs-images/Mobiles",
    name: "Tecno Spark Go",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "249",
},  {
    id: "huaweiY9a",
    image: "../Images/producs-images/Mobiles",
    name: "Huawei Y9a",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "459",
},  {
    id: "Opporeno3",
    image: "../Images/producs-images/Mobiles",
    name: "Oppo Reno 3",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "450",
},  {
    id: "galaxys10+",
    image: "../Images/producs-images/Mobiles",
    name: "Samsung Galaxy S10+",
    rating: "",
    description: "luctus quis et est. Integer pretium purus",
    price: "799",
}];


let mobilesHTML= '';
mobiles.forEach((mobile) => {
    mobilesHTML += `
        <div class="product">
            <div class="product-under">
                <figure class="product-image">
                    <img src=${mobile.image} 
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
                    <h4 class="productName">${mobile.name}</h4>
                    <span class="stars"></span>
                    <p>
                        ${mobile.description}
                    </p>
                    <h6 class="price">
                        $<span class="priceValue">${mobile.price}</span>
                    </h6>
                </div>
            </div>
        </div>
    `;
});