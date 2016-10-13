module.exports = {
    title: "Button",
    status: "prototype",
    tags: ["components", "author:ben"],
    collated: true,
    //preview: '@preview-layout',
    context: {
        //"button-text": "Click me!",
        //"is-sparkly": true,
        "text": "Edit",
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
                text: "Do a thing"
            }
        },
        {
            name: "secondary",
            status: "prototype",
            context: {
                cssClasses: {
                    modifier: "secondary"
                },
                text: "Or Maybe Something Else"
            }
        },
        {
            name: "info",
            status: "prototype",
            context: {
                cssClasses: {
                    modifier: "info"
                },
                text: "Info"
            }
        },
        {
            name: "success",
            status: "prototype",
            context: {
                cssClasses: {
                    modifier: "success"
                },
                text: "You Did It!"
            }
        },
        {
            name: "warning",
            status: "prototype",
            context: {
                cssClasses: {
                    modifier: "warning"
                },
                text: "Careful Now"
            }
        },
        {
            name: "danger",
            status: "prototype",
            context: {
                cssClasses: {
                    modifier: "danger"
                },
                text: "Remove"
            }
        }
    ]
};
