const ContactInfo = require('../models/Contact-info');
const ContactContent = require('../models/Contact-content');

//Create a new contact or/and new comment
exports.createContactComment = (req, res) => {
    const { name, email, comment, agree } = req.body;

    ContactInfo.findOne({ email })
    .then(contact => {
        if(contact) {
            const newContactContent = new ContactContent({
                contact: contact._id,
                comment
            })
            newContactContent.save()
            .then(() => res.status(200).json({ message: 'Comment saved !'}))
            .catch(error => res.status(400).json({ message: 'Error saving comment', error }));
        } else {
            const newContact = new ContactInfo({ name, email, agree });
            newContact.save()
            .then((contact) => {
                const newContactContent = new ContactContent({
                    contact: contact._id,
                    comment
                })
                newContactContent.save()
                .then(() => res.status(200).json({ message: 'Contact and comment saved !'}))
                .catch(error => res.status(400).json({ message: 'Error saving contact and comment', error }));
            })
            .catch(error => res.status(400).json({ message: 'Error saving contact', error }));
        }
    })
    .catch(error => res.status(400).json({ message: 'Error processing request', error }));
}

//Return all contact info documents
exports.getAllContact = (req, res) => {
    ContactInfo.find()
    .then(contacts => {
        res.status(200).json(contacts);
    })
    .catch(error => {
        res.status(400).json(error);
    });
};

//Return all comment documents for a given contact
exports.getAllCommentOfContact = (req, res) => {
    const contactId = req.params.contactId;

    ContactContent.find({ contact: contactId })
    .then(comments => {
        res.status(200).json(comments);
    })
    .catch(error => {
        res.status(400).json(error);
    });
};

//Update an existing contact info document
exports.updateContactInfo = (req, res) => {
    const { name, email, agree } = req.body;
    const contactId = req.params.contactId;

    ContactInfo.findByIdAndUpdate(contactId, { name, email, agree }, { new: true })
        .then(updatedContact => {
            res.status(200).json(updatedContact);
        })
        .catch(error => {
            res.status(400).json(error);
        });
};

//Update an existing comment document
exports.updateComment = (req, res) => {
    const { comment } = req.body;
    const commentId = req.params.commentId;

    ContactContent.findByIdAndUpdate(commentId, { comment }, { new: true })
    .then(updatedComment => {
        res.status(200).json(updatedComment);
    })
    .catch(error => {
        res.status(400).json(error);
    });
};

// Delete an existing contact info document and all associated comment documents
exports.deleteContact = (req, res) => {
    const contactId = req.params.contactId;

    ContactContent.deleteMany({ contact: contactId })
    .then(() => {
        ContactInfo.findByIdAndDelete(contactId)
        .then(() => {
            res.status(200).json({ message: 'Contact deleted!' });
        })
        .catch(error => {
            res.status(400).json(error);
        });
    })
    .catch(error => {
        res.status(400).json(error);
    });
};

//Delete an existing comment document
exports.deleteComment = (req, res) => {
    const commentId = req.params.commentId;

    ContactContent.findByIdAndDelete(commentId)
    .then(() => {
        res.status(200).json({ message: 'Comment deleted!' });
    })
    .catch(error => {
        res.status(400).json(error);
    });
};
