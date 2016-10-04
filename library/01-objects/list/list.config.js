const faker = require('faker/locale/en_US');
console.log(faker.helpers.createCard());

function createUsers() {
    var users = [];
    for (var i = 0; i < 12; i++) {
        users.push(faker.helpers.createCard());
    }
    return users;
}

module.exports = {
    title: "List",
    status: "prototype",
    tags: ['objects', 'author:ben'],
    context: {
        text: faker.lorem.sentences(),
        users: createUsers(),
        cssClasses: {
            "base": "o-list"
        }
    },
    variants: [
        {
            name: "inline",
            status: "prototype",
            context: {
                text: faker.lorem.sentences(),
                cssClasses: {
                    modifier: "inline"
                }
            }
        }
    ]
};
