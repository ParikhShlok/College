import ProductCard from './ProductCard';
function ProductList() {
    const products = [
        {
            title: "Panigale v4",
            price: "$999",
            rating: 4.8,
            image: "b3.jpg"
        },
        {
            title: "BMW s1000rr",
            price: "$899",
            rating: 4.5,
            image: "b2.jfif"
        },
        {
            title: "BMW",
            price: "$799",
            rating: 4.6,
            image: "b1.JPG"
        }
    ];
    return (
        <div>
            <h1>Our Products</h1>
            <ProductCard productList={products} />
        </div>
    );
}
export default ProductList;