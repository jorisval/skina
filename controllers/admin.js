const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

//Register a new admin and saves their information to the database
exports.registerAdmin = (req, res) => {
    const { name, email, password } = req.body;

    // Hash the password before storing it
    bcrypt.hash(password, 10)
    .then(hash => {
        const admin = new Admin({ name, email, password: hash });

        admin.save()
        .then(() => {
            res.status(200).json({ message: 'Admin registered!' });
        })
        .catch(error => {
            res.status(400).json(error);
        });
    })
    .catch(error => {
        res.status(400).json(error);
    });
};

//Authenticate an admin by verifying their email and password
exports.loginAdmin = (req, res) => {
    const { email, password } = req.body;

    // Find the admin by their email
    Admin.findOne({ email })
    .then(admin => {
        if (!admin) {
            return res.status(401).json({ message: 'Auth failed!' });
        }

        // Compare the given password with the hashed password
        bcrypt.compare(password, admin.password)
        .then(result => {
            if (!result) {
                return res.status(401).json({ message: 'Auth failed!' });
            }

            // Create a JSON web token with the admin's ID
            const token = jsonwebtoken.sign({ adminId: admin._id }, process.env.JWT_KEY);

            res.status(200).json({ token });
        })
        .catch(error => {
            res.status(400).json(error);
        });
    })
    .catch(error => {
        res.status(400).json(error);
    });
};

//Return all admin documents
exports.getAllAdmins = (req, res) => {
    Admin.find()
    .then(admins => {
        res.status(200).json(admins);
    })
    .catch(error => {
        res.status(400).json(error);
    });
};

//Return a single admin document by its ID
exports.getAdminById = (req, res) => {
    const adminId = req.params.adminId;

    Admin.findById(adminId)
    .then(admin => {
        res.status(200).json(admin);
    })
    .catch(error => {
        res.status(400).json(error);
    });
};

//Update an existing admin document
exports.updateAdmin = (req, res) => {
    const { name, email, password } = req.body;
    const adminId = req.params.adminId;

    // Hash the new password before storing it
    bcrypt.hash(password, 10)
    .then(hash => {
        Admin.findByIdAndUpdate(adminId, { name, email, password: hash }, { new: true })
        .then(updatedAdmin => {
            res.status(200).json(updatedAdmin);
        })
        .catch(error => {
            res.status(400).json(error);
        });
    })
    .catch(error => {
        res.status(400).json(error);
    });
};

//Delete an existing admin document
exports.deleteAdmin = (req, res) => {
    const adminId = req.params.adminId;

    Admin.findByIdAndDelete(adminId)
    .then(() => {
        res.status(200).json({ message: 'Admin deleted!' });
    })
    .catch(error => {
        res.status(400).json(error);
    });
};

