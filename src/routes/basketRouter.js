const basketRouter = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');

const Basket = require('../views/pages/Basket');
const { Card } = require('../../db/models');


basketRouter.get('/basket', async (req, res) => {
    
    const isLoggedIn = req.session.userEmail ? req.session.userEmail : false;
    const allCard = await Card.findAll({ where: { categoryId: id }, raw: true });
    renderTemplate(Basket, { userEmail: isLoggedIn, allCard }, res);
});




basketRouter.post('/api/cart/add/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const card = await Card.findByPk(id);
        if (card) {
           
            res.json({ success: true, message: 'Товар добавлен в корзину' });
        } else {
            res.json({ success: false, message: 'Товар не найден' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Произошла ошибка' });
    }
});

module.exports = basketRouter;