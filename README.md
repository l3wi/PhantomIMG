# Phantom IMG

A simple API for serving dynamic images.

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/l3wi/PhantomIMG)

### Overview

Phantom IMG is a simple api for serving dynamic images as if they existed. It achieves this by lauching Phantom JS when a get request is called, rendering a webpage in memory and then serving it back to the client as a file.

The server is passed query string parameters such as url, viewport, crop & format. It then returns an image of the webpage requested.

### Use Case

We needed to generate 3,240,000 unique images for Open Graph social shares. 

A web app has a randomiser that serves up unique pages whenever a user accesses it. We were required to have correctly sized images for soical shares.

Usually you'd generate the images before hand. In this case, that would've result in roughly 486,000 GB of 150kB .JPGs. That would've take a while to generate and also cost a ton to host and serve. Not to mention the fact that only a few % of these images would ever be served, best case.

Instead, I put together a simple service that, when issued a HTTP request, will render a correctly formatted page of the webapp and return it as a jpg without actually saving it. Scapers from Facbook, Twitter, Slack, etc all cache these images, therefor the command will have to once (usually) before the data is cached.

### Technology

The server is built with the following technologies:

- [Micro](https://github.com/zeit/micro) - Async/Await microservices framework
- [Phantom](https://github.com/amir20/phantomjs-node) - A Node.JS wrapper for PhantomJS
- [Phantom Pool](https://github.com/binded/phantom-pool) - A tool to generate PhantomJS instances for reducing overhead while serving requests
- [URL Parse](https://github.com/unshiftio/url-parse) - Simple tool to turn URLs into Objects
- [Query String](https://github.com/sindresorhus/query-string) - Takes a query sring and converts them to an object
- [Validator](https://github.com/chriso/validator.js) - Validating URLs with params.



### Usage

**Url - Required**

This asks the service to return Google as an image

`/image.png?url=https://google.com `



**Width & Height - Not required (one can be passed alone)**

This sets the viewport height and width (defaults to 1200x800)

`/image.png?url=https://google.com&width=1920&height=200`



**Crop - Not required **

this crops the page to the viewport height & width (defaults to false)

`/image.png?url=https://google.com&crop=true`



**Format - Not required**

This crops the page to the viewport height & width (defaults to png)

`/image.png?url=https://google.com&format=png`


**UserAgent - Yet to be implimented**

This sets the user agent specified device (defaults to Mac w/ Chrome)

`/image.png?url=https://google.com&useragent=iphone7`

### Install

``` javascript
git clone https://github.com/l3wi/PhantomIMG.git
cd PhantomIMG
yarn
yarn start
```