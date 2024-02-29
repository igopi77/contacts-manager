const express = require("express");
const router = express.Router();

router.route('/').get((req,res) =>{
    res.status(201).json({
        message : "collect all the contatcs"
    });
});

router.route('/').post((req,res) =>{
    res.status(201).json({
        message : "post all the contatcs"
    });
});

router.route('/:id').get((req,res) =>{
    res.status(201).json({
        message : `collect all the contatcs ${req.params.id}`
    });
});

router.route('/:id').put((req,res) =>{
    res.status(201).json({
        message : `update all the contatcs ${req.params.id}`
    });
});

router.route('/:id').delete((req,res) =>{
    res.status(201).json({
        message : `delete all the contatcs ${req.params.id}`
    });
});

module.exports = router;