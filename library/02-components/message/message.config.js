const faker = require('faker/locale/en_US');

module.exports = {
    title: "Message",
    status: "prototype",
    tags: ['components', 'author:ben'],
    context: {
        text: faker.lorem.sentences(),
        cssClasses: {
            "base": "c-message"
        }
    },
    variants: [
        {
            name: "success",
            status: "prototype",
            context: {
                text: faker.lorem.sentences(),
                cssClasses: {
                    modifier: "success"
                }
            }
        }
    ]
};
