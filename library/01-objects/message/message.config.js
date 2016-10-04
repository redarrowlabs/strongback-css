const faker = require('faker');

module.exports = {
    title: "Message",
    status: "prototype",
    tags: ['objects', 'author:ben'],
    context: {
        text: faker.Lorem.sentences(),
        cssClasses: {
            "base": "o-message"
        }
    },
    variants: [
        {
            name: "success",
            status: "prototype",
            context: {
                text: faker.Lorem.sentences(),
                cssClasses: {
                    modifier: "success"
                }
            }
        }
    ]
};
