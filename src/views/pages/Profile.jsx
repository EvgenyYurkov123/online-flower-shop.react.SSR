const React = require('react');
const Layout = require('../Layout');

module.exports = function Profile({ userEmail, allCard }) {
    return (
        <Layout userEmail={userEmail} allCard={allCard}>
            <div className="profile-container d-flex justify-content-center">
                <div className='d-flex flex-column justify-content-center ' style={{ marginTop: '140px' }}>
                    <h2 className='d-flex justify-content-center'>Профиль пользователя</h2>
                    <div className='d-flex justify-content-center'>
                        <div className="1 personal-info bordered-column">
                            {/* Отображение личной информации */}
                            <h3 className="bordered-header">Личная информация</h3>
                            <p>Имя: John</p>
                            <p>Фамилия: Doe</p>
                            <p>Email: john.doe@example.com</p>
                            <p>Телефон: (123) 456-7890</p>
                            <p>Адрес доставки: 123 Main St, City, Country</p>
                        </div>
                        <div className="2 order-history bordered-column">
                            {/* Отображение истории заказов */}
                            <h3 className="bordered-header">История заказов</h3>
                            <ul>
                                <li>Заказ от 01.08.2023: 3 товара
                                    <p>Статус: Доставлен</p>
                                    <p>Сумма: $100.00</p>
                                </li>
                                {/* Другие заказы */}
                            </ul>
                        </div>
                        <div className="3 favorite-products bordered-column">
                            {/* Отображение избранных товаров */}
                            <h3 className="bordered-header">Избранные товары</h3>
                            <ul>
                                <li>
                                    <img src="/path/to/product1.jpg" alt="Product 1" />
                                    <p>Цветок 1</p>
                                </li>
                                <li>
                                    <img src="/path/to/product2.jpg" alt="Product 2" />
                                    <p>Цветок 2</p>
                                </li>
                                {/* Другие избранные товары */}
                            </ul>
                        </div>
                        <div className="4 settings bordered-column">
                            {/* Форма для изменения личных данных и пароля */}
                            <h3 className="bordered-header">Настройки аккаунта</h3>
                            <form>
                                {/* Поля для изменения данных и пароля */}
                                <button type="submit">Сохранить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
