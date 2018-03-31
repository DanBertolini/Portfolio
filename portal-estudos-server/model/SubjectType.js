const mongoose = require('mongoose');
const SubjectCategory = require('mongoose').model('SubjectCategory');

const subjectTypeSchema = mongoose.Schema({
    name: String,
    subjectCategory: SubjectCategory.schema,
    color: String,
    defaultView: Boolean
});

const SubjectType = mongoose.model('SubjectType', subjectTypeSchema);

function createDefaultSubjectTypes() {
    return new Promise(function (resolve, reject) {
        SubjectType.find({}).exec(function (err, collection) {
            if (collection.length === 0) {
                SubjectCategory.findOne({ name: 'Escolar' }).exec(function (err, subjectCategory) {
                    Promise.all([
                        SubjectType.create({ name: 'Ciências Humanas', subjectCategory: subjectCategory, color: '', defaultView: true }),
                        SubjectType.create({ name: 'Ciências Biológicas', subjectCategory: subjectCategory, color: '', defaultView: true }),
                        SubjectType.create({ name: 'Ciências Exatas', subjectCategory: subjectCategory, color: '', defaultView: true }),
                        SubjectType.create({ name: 'Linguagens', subjectCategory: subjectCategory, color: '', defaultView: true })
                    ]).then(function () {
                        resolve();
                    }, function (reason) {
                        reject(reason);
                    });
                });
            } else {
                resolve();
            }
        });
    });
}

exports.createDefaultSubjectTypes = createDefaultSubjectTypes;