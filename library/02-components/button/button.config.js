module.exports = {
    title: "Button",
    status: "prototype",
    tags: ["components", "author:abv"],
    collated: true,
    //preview: '@preview-layout',
    context: {
        //"button-text": "Click me!",
        //"is-sparkly": true,
        "text": "Standard Button",
        "cssClasses": {
            "base": "c-button"
        }
    },
    variants: [
        {
            name: "primary",
            status: "prototype",
            context: {
                cssClasses: {
                    modifier: "primary"
                },
                text: "Primary Button"
            }
        },
        {
            name: "link",
            status: "prototype",
            context: {
                cssClasses: {
                    modifier: "link"
                },
                text: "Link Button"
            }
        },
        {
            name: "danger",
            status: "prototype",
            context: {
                cssClasses: {
                    modifier: "danger"
                },
                text: "Delete Account"
            }
        },
    ]
};
