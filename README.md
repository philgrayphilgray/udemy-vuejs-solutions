# udemy-vuejs-solutions

> Solutions for <https://www.udemy.com/vuejs-2-the-complete-guide>

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Assignment Explanation
[​https://github.com/philgrayphilgray/udemy-vuejs-solutions/tree/Assignment-8​​](​https://github.com/philgrayphilgray/udemy-vuejs-solutions/tree/Assignment-8​​)

This was fairly straightforward after watching the lessons. I created the component files, imported them as components, included the components in my app template, each with a single-child heading, and then inserted "slot" in the template for each component.

Next, I created the buttons, the data property, and added the click handler to the buttons. I forgot the data property needs to be function with a returned object, so I got some errors and I thought I was doing something wrong. I went back and looked at the setup in the dynamic components video and quickly realized my error and fixed the data property. Once, I was able to properly return the selectedComponent string in my app template, I swapped out the components in the template with a single "component" with the ":is" property and a child element bound to the selectedComponent string.

​
