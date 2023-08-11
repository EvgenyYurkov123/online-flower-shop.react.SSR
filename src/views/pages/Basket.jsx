const React = require('react');
const Layout = require('../Layout');

module.exports = function Basket({ userEmail, allCard }) {
    const productsInCart = [
        { id: 1, title: 'Product 1', price: 10.00, quantity: 2, imageUrl: '/img/product1.jpg' },
    ];

    return (
        <Layout userEmail={userEmail}>
            <div className='d-flex justify-content-center' style={{ marginTop: '200px' }}>
                <table className="tableBask table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsInCart.map((product, index) => (
                            <tr key={product.id}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <img src={product.imageUrl} alt={product.title} className="product-image" />
                                    <span>{product.title}</span>
                                </td>
                                <td>${product.price.toFixed(2)}</td>
                                <td>
                                    <button className="btn btn-sm btn-secondary">-</button>
                                    <span>{product.quantity}</span>
                                    <button className="btn btn-sm btn-secondary">+</button>
                                </td>
                                <td>${(product.price * product.quantity).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}