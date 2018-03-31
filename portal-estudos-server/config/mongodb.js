var mongoose = require('mongoose'),
    subjectCategoryModel = require('../model/SubjectCategory'),
    subjectTypeModel = require('../model/SubjectType'),
    subjectModel = require('../model/Subject');

module.exports = function (config) {
    mongoose.connect(config.database);
    var db = mongoose.connection;

    db.once('open', function callback() {
        subjectCategoryModel.createDefaultSubjectCategories().then(function () {
            subjectTypeModel.createDefaultSubjectTypes().then(function () {
                subjectModel.createDefaultSubjects();
            });
        });
    });
};