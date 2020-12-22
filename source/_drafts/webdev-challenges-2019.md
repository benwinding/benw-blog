# Web Dev Challenges - 2019

- Firebase client SDK was verbose and repetitive for our purposes, so we made a wrapper, which created; cleaner, easier to read code specialised for us. Listing, Getting Observables.

- Converting PDFs from HTML on the client. Initially we were rasterising HTML into an image, but the images became to large. Then we used a node server to render the HTML in a vector format. We ran into challenges using Docker on heroku's container platform, so we used Google's AppEngine, which worked well.

- Found that we were using tables to display information in many parts of the application, so I developed a standalone NPM package "ngx-autotable" which allowed for a declarative datatable to be produced with an intuitive abstraction.

- Angular Material is extremely verbose in creating simple forms, so I created a wrapper library, which has _sane defaults_ and automates a bunch of things commonly needed in form fields:
  - Disable autocomplete (not trivial anymore)
  - Choose from list
  - Declarative rather than imperitive, (which is what the current Angular Material feels like)
