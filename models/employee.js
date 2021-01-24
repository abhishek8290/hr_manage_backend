const mongo = require('mongoose');
const personal_schema = mongo.Schema({

    lastName: {
        type: String,
        required: false
    },
    firstName: {
        type: String,
        required: false,
    },
    fatherName: {
        type: String,
        required: false,
    },
    dob: {
        type: String,
        required: false,
    },
    country: {
        type: String,
        required: false,
    },
    identificationMark: {
        type: String,
        required: false,
    },
    bloodGroup: {
        type: String,
        required: false,
    },
    gender: {
        type: String,
        required: false,
    },
    maritalStatus: {
        type: String,
        required: false,
    },
});
const contact_schema = mongo.Schema({
    officialemail: {
        type: String,
        required: false,
    },
    personalEmail: {
        type: String,
        required: false
    },
    phonenumber1: {
        type: String,
        required: false,
    },
    phonenumber2: {
        type: String,
        required: false,
    },
});
const social_schema = mongo.Schema({

    linkdn: {
        type: String,
        required: false
    },
    facebook: {
        type: String,
        required: false,
    },
    twitter: {
        type: String,
        required: false

    }
});
const employement_schema = mongo.Schema({
    employeeCode: {
        type: String,
        required: false
    },
    reportingManager: {
        type: String,
        required: false,
    },
    dateOfJoining: {
        type: String,
        required: false

    },
    dateOfConfirmation: {
        type: String,
        required: false
    },
    department: {
        type: String,
        required: false
    },
    designation: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: false
    },

});
const bank_schema = mongo.Schema({
    accountType: {
        type: String,
        required: false
    },
    accountNumber: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: false

    },
    bankName: {
        type: String,
        required: false

    },
    operationType: {
        type: String,
        required: false

    },
    ifscCode: {
        type: String,
        required: false

    },

});
const employee_schema = mongo.Schema({
    employeeCode: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false,
    },
    personalInfo: [personal_schema],
    contactDetails: [contact_schema],
    socialDetails: [social_schema],
    employementDetail: [employement_schema],
    bankDetail: [bank_schema],
});
const employee = mongo.model('employees', employee_schema);
module.exports = employee;