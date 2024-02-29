const express = require("express");
const router = express.Router();

const {getContacts,postContact,getContact,updateContact,deleteContact} = require("../controlleres/contactControllers"); 

router.route('/').get(getContacts).post(postContact);

router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;