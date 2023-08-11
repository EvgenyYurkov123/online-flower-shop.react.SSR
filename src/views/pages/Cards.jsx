const React = require('react');
const Layout = require('../Layout');

module.exports = function Cards({ allCard, userEmail }) {

    return (
        <Layout userEmail={userEmail} allCard={allCard}>
            <div className="cardFlag container-fluid   ">
                <div className="  BGcard" >
                    {allCard.map((el, key) => (
                        
                            <div className="cardR col-md-3 mb-3" key={key}>
                                <img src={el.image} className="card-img-top foto" alt="Тут картинка" />
                                <div className="card-body">
                                    <h5 className="card-title cardw mt-3">{el.title}</h5>
                                    <p className="card-text cardh mb-1">{el.quantity} шт.</p>
                                    <p className="card-text cardh">{el.price} руб.</p>
                                    <a href="#" className="BBB btn btn-primary cor">В корзину</a>
                                </div>
                            </div>
                        
                    ))}
                </div>
            </div>
        </Layout>
    );
};