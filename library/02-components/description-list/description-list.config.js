const faker = require('faker/locale/en_US');

module.exports = {
    title: "Description List",
    status: "prototype",
    tags: ['components', 'author:adam'],
    collated: true,
    context: {
        term: "Name",
        description: faker.name.findName(),
        cssClasses: {
            "base": "c-description-list"
        }
    },
    variants: [
        {
            name: "inline",
            status: "prototype",
            context: {
                term: "Phone",
                description: faker.phone.phoneNumberFormat(),
                cssClasses: {
                    modifier: "inline"
                }
            }
        },
        {
            name: "inline",
            status: "prototype",
            context: {
                term: "Address",
                description: faker.address.streetAddress(),
                cssClasses: {
                    modifier: "inline"
                }
            }
        },
        {
            name: "monospace",
            status: "prototype",
            context: {
                term: "IP address",
                description: faker.internet.ip(),
                descriptionClass: "u-monospace"
            }
        }
    ]
};
