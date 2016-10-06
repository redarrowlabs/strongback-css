const faker = require('faker/locale/en_US');

function createUsers() {
    var users = [];
    var recordCount = 16
    for (var i = 0; i < recordCount; i++) {
        users.push(faker.helpers.createCard());
    }
    return users;
}

module.exports = {
    title: "List",
    status: "prototype",
    tags: ['objects', 'list', 'author:ben'],
    context: {
        text: faker.lorem.sentences(),
        users: createUsers(),
        cssClasses: {
            "base": "c-list"
        }
    },
    variants: [
        {
            name: "some-variant",
            status: "prototype",
            preview: '@preview-special-test',
            context: {
                text: faker.lorem.sentences(),
                cssClasses: {
                    modifier: "inline"
                }
            }
        }
    ]
};
