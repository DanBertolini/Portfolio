const mongoose = require('mongoose');

const subjectCategorySchema = mongoose.Schema({
    name: String,
    color: String,
    defaultView: Boolean
});

const SubjectCategory = mongoose.model('SubjectCategory', subjectCategorySchema);

function createDefaultSubjectCategories() {
    return new Promise(function (resolve, reject) {
        SubjectCategory.find({}).exec(function (err, collection) {
            if (collection.length === 0) {
                Promise.all([
                    SubjectCategory.create({ name: 'Escolar', color: '', defaultView: true }),
                    SubjectCategory.create({ name: 'Faculdade', color: '', defaultView: false }),
                    SubjectCategory.create({ name: 'Profissional', color: '', defaultView: false })
                ]).then(function () {
                    resolve();
                }, function (reason) {
                    reject(reason);
                });
            } else {
                resolve();
            }
        });
    });
}

exports.createDefaultSubjectCategories = createDefaultSubjectCategories;