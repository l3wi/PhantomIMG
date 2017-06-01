# Phantom IMG

A simple API for serving dynamic images.

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/l3wi/PhantomIMG)

### Overview

Phantom IMG is a simple api for serving dynamic images as if they existed. It achieves this by lauching Phantom JS when a get request is called, rendering a webpage in memory and then serving it back to the client as a PNG.

The server is passed query string parameters such as url, viewport, crop & format. It then returns an image of the webpage requested.

### Usaged

``` Javascript
// Url - Required
localhost:3000/image.png?url=google.com 
// this asks the service to return Google as an image

// Width & Height - Not required (one can be passed alone)
localhost:3000/image.png?url=https://google.com&width=1920&height=200
// this sets the viewport height and width (defaults to 1200x800)

// Crop - Not required 
localhost:3000/image.png?url='google.com'&crop=true
// this crops the page to the viewport height & width (defaults to false)

// Format - Not required
localhost:3000/image.png?url=google.com&format=png
// this crops the page to the viewport height & width (defaults to png)

// UserAgent - Yet to be implimented
localhost:3000/image.png?url=google.com&useragent=iphone7
// this sets the user agent specified device (defaults to Mac w/ Chrome)

```



### Install

``` javascript
git clone https://github.com/l3wi/PhantomIMG.git
cd PhantomIMG
yarn
yarn start
```