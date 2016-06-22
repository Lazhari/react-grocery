'use strict';
module.exports = function (app) {
    let items = [
        {
            "purchased": false,
            "name": "Adela Reese"
        },
        {
            "purchased": false,
            "name": "Ferguson Estrada"
        },
        {
            "purchased": true,
            "name": "Ingram Burton"
        },
        {
            "purchased": false,
            "name": "Nanette Anderson"
        },
        {
            "purchased": false,
            "name": "Celeste Britt"
        }
    ];
    app.route('/api/items')
        .get((req, res) => {
            return res.send(items);
        })
        .post((req, res) => {
            let item = req.body;
            items.push(item);
            return res.send('You item has been added!');
        });
};
