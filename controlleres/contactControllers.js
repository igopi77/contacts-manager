const Contact = require("../models/contactModels");
const asyncHandler = require("express-async-handler");

// @desc Get all contacts
// @route GET
// @acces public

const getContacts = asyncHandler(async(req,res) =>{
    const contacts =  await Contact.find();
    res.status(201).json(contacts);
});

// @desc Post the contacts
// @route POST
// @access public

const postContact = asyncHandler(async(req,res) =>{
    console.log("this is the body part of post contact ",req.body);
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All the feilds are mandatorey");
    }
    const contacts = await Contact.create({
        name,
        email,
        phone
    });
    res.status(201).json(contacts);
});

// @desc get the contacts (particular one)
// @route GET
// @access public

const getContact = asyncHandler(async(req,res) =>{
    const contacts = await Contact.findById(req.params.id)
    res.status(201).json(contacts);
});

// @desc update the contacts
// @route PUT
// @access public

const updateContact = asyncHandler(async(req,res) =>{
    const contacts = await Contact.findById(req.params.id);
    if(!contacts){
        res.status(402);
        throw new Error("Its empty");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    );
    res.status(201).json(updatedContact);
});

// @desc delete the contacts
// @route DELET
// @access public

const deleteContact = asyncHandler(async(req,res) =>{
    const contacts = await Contact.findById(req.params.id);
    if(!contacts){
        res.status(402);
        throw new Error("Its empty");
    }
    await Contact.deleteOne()
    res.status(201).json(contacts);
});

module.exports = {
    getContacts,
    postContact,
    getContact,
    updateContact,
    deleteContact
};