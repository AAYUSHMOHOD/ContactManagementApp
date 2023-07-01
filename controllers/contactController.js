const asyncHandler = require("express-async-handler");

//@desc Get contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler (async (req,res) => {
    res.status(200).json({message:"Get all Contacts"});
});

//@desc Get contact with id
//@route GET /api/contact/:id
//@access public
const getContact = asyncHandler (async (req,res) => {
    res.status(200).json({message: `Get Contact ${req.params.id}`});
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler (async (req,res) => {
    res.status(200).json({message: `Update Contact ${req.params.id}`});
});

//@desc Create contact
//@route POST /api/contacts/:id
//@access public
const createContact = asyncHandler (async (req,res) => {
    res.status(201).json({message:"Create Contact"});
    console.log(req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields required !");
    }
});

//@desc Delete contact by id
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler (async (req,res) => {
    res.status(200).json({message:`Delete Contact ${req.params.id}`});
});

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};