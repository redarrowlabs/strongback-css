module.exports = {
    title: "Button",
    status: "prototype",
    tags: ['objects', 'author:ben'],
    //preview: '@preview-layout',
    context: {
        //"button-text": "Click me!",
        //"is-sparkly": true,
        "text": "Done"
    },
    variants: [
      {
        name: "primary",
        status: "prototype",
        context: {
          modifier: "primary"
        }
      },
      {
        name: "secondary",
        status: "prototype",
        context: {
          modifier: "secondary"
        }
      },
      {
        name: "info",
        status: "prototype",
        context: {
          modifier: "info"
        }
      },
      {
        name: "success",
        status: "prototype",
        context: {
          modifier: "success"
        }
      },
      {
        name: "warning",
        status: "prototype",
        context: {
          modifier: "warning"
        }
      },
      {
        name: "danger",
        status: "prototype",
        context: {
          modifier: "danger"
        }
      }
    ]
};
