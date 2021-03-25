---
title: The Ultimate HTML 2 PDF Service
description: The story of how I implemented a cheap html converter using cloud technology.
date: 2021-03-25 22:06:10
photos: 
- https://i.imgur.com/pVMgGch.jpg
tags:
- docker
- development
- software
- google-cloud
- scaling
---

Reporting is a common business problem that most software problems inevitably need to solve. At our company we decided to use HTML reports, as we could construct them quickly and view them in the browser easily. But little did we know, there would be many challenges that we'd face in scaling, previewing and cost!

<!-- more --> 

# v1 - App Engine (Python & WebKit)

Initially we went with a Google App Engine instance, which ran a small Python script. It simply listened for HTML requests and return a PDF response. 

<img src="/images/html2pdf/sequence1.svg" alt="PDF Creation Flow" class="img-med"/>

## Limitation: Old CSS

- Only compatible with CSS 2, cannot use modern layout features like flexbox and grid layout.

# v2 - App Engine (NodeJs & Puppeteer)

The second version was implemented in NodeJs and Puppeteer, which meant we could use the same CSS in the browser and get predictable results. It was still lacking in other areas and we

## Limitation: Always Running

- Google App Engine only scales to a minimum of 1 instance (costly).

# v3 - Cloud Run (NodeJs & Puppeteer)

We noticed that Google released Cloud Run, which is a simple container platform, which scales to 0 instances! So we implemented our html to pdf converter in Docker and deployed to Cloud Run! This drastically reduced costs by around 98%! As it could scale to 0 when not in use.

## Limitation: Unpredictable Conversion Times

- Slow and unreliable, due to concurrent conversions and varying image sizes.

# v4 - Cloud Run (NodeJs, Puppeteer & SharpJs)

The last problem we solved was unpredictable conversion times. We determined that bandwidth was a bottleneck when there were hundreds of images in a report. It would also vary drastically depending on the download size of the images.

To alleviate this, we created an image shrinking service, which uses [sharp](https://github.com/lovell/sharp) an image library for NodeJs.

This meant we could append a shrinking prefix url to the image url and have a predictable download size to every image in a report. This could also use Cloud Run and concurrently spin up infinite instances as needed!

