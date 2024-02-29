// @desc Get all contacts
// @route GET
// @acces public

const getContacts = (req,res) =>{
    res.status(201).json({
        message : "collect all the contatcs"
    });
};

// @desc Post the contacts
// @route POST
// @access public

const postContact = (req,res) =>{
    console.log("this is the body part of post contact ",req.body);
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All the feilds are mandatorey");
    }
    res.status(201).json({
        message : "post all the contatcs"
    });
};

// @desc get the contacts (particular one)
// @route GET
// @access public

const getContact = (req,res) =>{
    res.status(201).json({
        message : `collect all the contatcs ${req.params.id}`
    });
};

// @desc update the contacts
// @route PUT
// @access public

const updateContact = (req,res) =>{
    res.status(201).json({
        message : `update all the contatcs ${req.params.id}`
    });
};

// @desc delete the contacts
// @route DELET
// @access public

const deleteContact = (req,res) =>{
    res.status(201).json({
        message : `delete all the contatcs ${req.params.id}`
    });
};

module.exports = {
    getContacts,
    postContact,
    getContact,
    updateContact,
    deleteContact
};