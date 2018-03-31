const mongoose = require('mongoose');
const SubjectType = require('mongoose').model('SubjectType');


const subjectSchema = mongoose.Schema({
    name: String,
    subjectType: SubjectType.schema,
    defaultView: Boolean
});

const Subject = mongoose.model('Subject', subjectSchema);


function createDefaultSubjects() {
    Subject.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            SubjectType.findOne({ name: 'Ciências Humanas' }).exec(function (err, subjectType) {
                Subject.create({ name: 'Artes', subjectType: subjectType, defaultView: true });
                Subject.create({ name: 'História', subjectType: subjectType, defaultView: true });
                Subject.create({ name: 'Geografia', subjectType: subjectType, defaultView: true });
                Subject.create({ name: 'Filosofia', subjectType: subjectType, defaultView: true });
                Subject.create({ name: 'Sociologia', subjectType: subjectType, defaultView: true });
            });

            SubjectType.findOne({ name: 'Ciências Biológicas' }).exec(function (err, subjectType) {
                Subject.create({ name: 'Biologia', subjectType: subjectType, defaultView: true });
                Subject.create({ name: 'Educação Física', subjectType: subjectType, defaultView: true });
            });

            SubjectType.findOne({ name: 'Ciências Exatas' }).exec(function (err, subjectType) {
                Subject.create({ name: 'Física', subjectType: subjectType, defaultView: true });
                Subject.create({ name: 'Química', subjectType: subjectType, defaultView: true });
                Subject.create({ name: 'Matemática', subjectType: subjectType, defaultView: true });
            });

            SubjectType.findOne({ name: 'Linguagens' }).exec(function (err, subjectType) {
                Subject.create({ name: 'Língua Portuguesa', subjectType: subjectType, defaultView: true });
                Subject.create({ name: 'Língua Inglesa', subjectType: subjectType, defaultView: true });
            });
        }
    });
}

exports.createDefaultSubjects = createDefaultSubjects;