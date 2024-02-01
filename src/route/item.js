const { Router } = require("express");
const router = Router();

products = [{id: 1, name: "shirts",
        price: 2200
    },
    {
        id: 2,
        name: "shoes",
        price: 2200
    },
    {
        id: 3,
        name: "pants",
        price: 2200
    }
];

router.get('/', (req,res) => {
    res.cookie("cookiename", "thisisacookier", {maxAge : 5000, signed: false, httponly: true});
    res.send(products);
});

router.get('/:price', (req,res) => {
    const price = req.params.price;
    product = products.find((p) => p.price == price)
    res.send(product);
});

router.post('/', (req,res) => {
    console.log(req.body);
    products.push(req.body);
    res.sendStatus(201);
    res.send(products);

})

module.exports = router