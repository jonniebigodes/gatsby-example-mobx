# MOBX
[Using mobx with gatsby](https://dazzling-meninsky-6f4ac3.netlify.com/)


Gatsby example site that shows use of mobx.

# Overview

To use mobx in a Gatsby site you'll need to hook in to two of Gatsby's extension points.

Once in wrapRootElement which runs during Gatsby's server rendering process, and once in wrapRootElement which is part of Gatsby's browser APIs.

Check out [./gatsby-ssr.js](./gatsby-ssr.js) and [./gatsby-browser.js](./gatsby-browser.js) to see how this is implemented in this example.


## More information

mobx-react-devtools package is now deprecated and was removed. As it could generate [this error](https://github.com/mobxjs/mobx-react-devtools/issues/117).

To allow access to some form of development tools, install the plugin for your browser of choice like mentioned [here](https://github.com/mobxjs/mobx-devtools).


[Official Documentation](https://mobx.js.org/)



License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

