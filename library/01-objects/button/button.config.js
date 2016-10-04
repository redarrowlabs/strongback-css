module.exports = {
    title: "Button",
    status: "prototype",
    tags: ["objects", "author:ben"],
    //preview: '@preview-layout',
    context: {
        //"button-text": "Click me!",
        //"is-sparkly": true,
        "text": "Continue",
        "cssClasses": {
            "base": "o-button"
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
                text: "Get Some Info"
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
                text: "Don't Go That Way"
            }
        }
    ]
};
