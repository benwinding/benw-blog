title: Easiest Static Sites on Dokku!
date: 2020-12-23 6:55:24
tags:
- dokku
- development
- ssh
- deploy
- easy
photos:
- https://i.imgur.com/bL2R2qX.jpg
---

I love [dokku](https://github.com/dokku/dokku) but deploying a simple HTML site is actually quite annoying, so I made [`dokku-pages`](https://github.com/benwinding/dokku-pages).

## 1. Install 
`npm i -g dokku-pages`
## 2. Deploy Dokku Site
`dokku-pages deploy -g dokku@mysite.com:app -d dist --minimal`

That's it! 

## Optimization
And by using the minimal flag you can also save a tonne of space in your dokku instance.

| Deploy Command        | Dokku Type | Image Size  |
| ------------- | --- | ------------- |
| `deploy ...` | Herokuish Build Pack | 1.5 GB |
| `deploy ... --minimal` | Docker Build | 22 MB |

That's a saving of `98.5%`!

Anyway, hopefully someone else finds this useful.
