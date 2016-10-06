## General Standards

For any project:

* Consistency and conventions between team members is paramount.
* Solutions should be as simple and clear as possible.
* Solutions should serve a specific purpose.
* Clever code does not mean good code; _readability is critical_

A key hallmark of professional code includes a notion that while we are writing code that must reach a desired goal, we are also creating code that must be read and understood by others.

We encourage liberal use of whitespace, comments, and descriptive variable names as appropriate for writing easy-to-read code.

* There is no need to write code in an obfuscated or compressed way for the purpose of file-size savings.
* We will use automated server-side or other build processes to optimize files.
* This includes concatenating files, code minification, gzipping, and setting "Far Future Expires".

The ability for another developer to read the code is paramount above other concerns, especially if optimization can be handled another way. [1]

Use of tools like [editorconfig](http://editorconfig.org/), [eslint](http://eslint.org/), etc. should always include a corresponding project level config file (e.g.`.editorconfig`) that defines conventions agreed upon by team members. Team members should ensure their use by enabling in their IDE or other app.

1: [isobar-idev.github.io/code-standards](https://isobar-idev.github.io/code-standards/)
