# SNS: Streams and Stats

Personal experiment: streaming live videos from across the web, and delivering their stats.

## Intro

`SNS` is a SPA (short for Single Page App) that provides a list of streams based off JSON files. And at the same time.

Across the project I tried to make it as modular as possible, but of course there is plenty more that can be done regarding this.

## Logic

In this SPA there are 3 main pages: `Home`, `Live Now`, `Statistics` and one sub page `Single Video`

`Home` shows a Featured Livestream where ideally it would be chosen by people working in the backend.

`Live now` provides a list of livestreams that are currently providing content for people to watch.

`Statistics` lists some information about the streams in the form of charts.

And finally `Single Video` is a page that can be accessed by clicking on one of the videos' titles in `Live Now` page.
Where it shows the video scaled up in size.


## Code

The SPA is built with ReactJS framework, but has additional JavaScript code for modularity purposes.

The JavaScript code is mostly written using the ES6 specifications, and Babel is used to compile it down to JavaScript that browsers understand.

The React and modules code resides in `src/app/`.
Although the style of the components is in `src/public/style/`.

Content of app consists of:
1. `components`: ReactJS components like Headers, Navigation bars, etc..
2. `pages`: Whole ReactJS pages built out of the previously mentioned components.
3. `util`: The above-mentioned modules coded especially to deal with repetition of code in the SPA.

The data used in both rendering livestreams and building charts resides in `src/public/assets/JSON`.

We use WebPack to bundle all the code into one file `bundle.js` that is later imported with a script tag into the web page.

For production, code is not minified. is added into the WebPack config file so when the browser devtools propmt an error or a log, developer can debug right through the original files `app.js` and `HComment.js` instead of the final bundle.

## Try it out

To try the demo in this nodejs app:

1. Clone/Download this repo
2. Install the dependencies with `npm install` from within the directory
3. Make sure you have webpack installed globally, if not run `npm install -g webpack`
4. Run `npm start` which will run webpack, bundle the code altogether along with development version of react and run a local server to showcase the SPA.
5. Go to `http://localhost:3000`.

If you want the code to be minified and use production version of React instead of `npm start` you should run `npm run start:prod`.

## Screenshots

![Screenshot 1](screenshots/1.png)

![Screenshot 1](screenshots/2.png)

![Screenshot 1](screenshots/3.png)

## Challenges

### Where's bootstrap?

There is no doubt that bootstrap makes it way easier to quickly build UIs and animations. But the absence of bootstrap comes from a personal belief that if we're not going to use a hefty amount of the bootstrap within our code, it shouldn't be added because it doesn't make sense to weighten up an SPA with unnecessary code if we're going to use it only once or twice.

So because we aim for SPAs to be as light as possible, bootstrap wasn't added for this app.


### Unresolved issues.

Despite the app functioning, there are still unsolved problems I couldn't get right in time. Which is where teamwork comes to consult with teammates about such difficulties.

All bugs/issues faced are in the Issues section of the git repo.

This includes: the video player used (Clappr) sometimes does not recognize the livestream source and there doesn't seem to be any debug information.

## What could be done better/ What can we add to make it better

- Some sort of history tracking for the user to go to a history tab and browse through what they watched since they started using the app.

- Testing. The SPA once decided it should go to production, it would definitely make use of functional, integration, and Unit tests.

- Debug mode for logs to be excluded from the bundled file once we decide to build for production.
