require('@babel/register');
const express = require('express');
const { Card, Category } = require('../../db/models');


const renderTemplate = require('../lib/renderTemplate');
const cardRouter = express.Router();

const Cards = require('../views/pages/Cards');


cardRouter.get('/card/:id', async (req, res) => {
    const { id } = req.params;

    const allCard = await Card.findAll({
        where: { categoryId: id },
        raw: true
    });
    renderTemplate(Cards, { allCard }, res);
});

module.exports = cardRouter;