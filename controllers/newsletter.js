const Newsletter = require('../models/Newsletter');

//Create a new newsletter document
exports.createNewsletter = (req, res) => {
    const { email } = req.body;

    const newsletter = new Newsletter({ email });

    newsletter.save()
    .then(() => {
        res.status(200).json({ message: 'Newsletter saved!' });
    })
    .catch(error => {
        res.status(400).json(error);
    });
};

//Return all newsletter documents
exports.getAllNewsletters = (req, res) => {
    Newsletter.find()
    .then(newsletters => {
        res.status(200).json(newsletters);
    })
    .catch(error => {
        res.status(400).json(error);
    });
};

//Return a single newsletter document by its ID
exports.getNewsletterById = (req, res) => {
    const newsletterId = req.params.newsletterId;

    Newsletter.findById(newsletterId)
    .then(newsletter => {
        res.status(200).json(newsletter);
    })
    .catch(error => {
        res.status(400).json(error);
    });
};

//Update an existing newsletter document
exports.updateNewsletter = (req, res) => {
    const { email } = req.body;
    const newsletterId = req.params.newsletterId;

    Newsletter.findByIdAndUpdate(newsletterId, { email }, { new: true })
    .then(updatedNewsletter => {
        res.status(200).json(updatedNewsletter);
    })
    .catch(error => {
        res.status(400).json(error);
    });
};

//Delete an existing newsletter document
exports.deleteNewsletter = (req, res) => {
    const newsletterId = req.params.newsletterId;

    Newsletter.findByIdAndDelete(newsletterId)
    .then(() => {
        res.status(200).json({ message: 'Newsletter deleted!' });
    })
    .catch(error => {
        res.status(400).json(error);
    });
};
