# BreedSelect Homework Assignment

## Context
We currently have a list of 1500 dog breeds, and we've built a BreedSelect component to allow users to search through all of them in a relatively simple and intuitive manner.  However, some breeders have expressed concerns about pure breeds being interleaved with mixed breeds and have suggested that we visually group them into "Pure Breeds" and "Mixed Breeds" in the search results.  So let's get started!

## Getting started
- Install [Yarn](https://yarnpkg.com/en/docs/install#mac-stable)
- Run `yarn install` in the base directory
- Run `yarn server` to start the Express server for making calls to the API
- Run `yarn client` to start the Webpack server for compiling React/JSX
- Go to `http://localhost:3000` and start developing!

To run tests, use the `yarn test` command.

## Project Structure
This is a bare-bones project with a [simple Express server](server.js) with a single endpoint at `/breeds` that returns all the breeds we have available in [breeds.json](breeds.json).  [index.html](index.html) has a mount point (`<div id="mount"></div>`) into which the React application is rendered, so there's no need to touch it!

**For the assignment, you'll need to update the [`BreedSelect`](components/BreedSelect/index.jsx) component (and potentially the [`App`](components/App/index.jsx) component) to make the requested feature updates.**

## Evaluation
We're looking for how you'd go about addressing this feature request for a live site, so attention to detail and care for the code ecosystem are part of our criteria.  The feature also, of course, has to work. :)

These are some other areas we'll be looking at, with some specific examples of what they mean:
- Code clarity
  - Does the code make sense?
  - Are there comments clarifying future TODOs or caveats?
- Testing
  - Does the correct rendered state under different circumstances + different inputs
  - Handling of empty, edge-case states
- Optimizations
  - How can the client-side performance be improved?
  - How can the server performance be improved?

The end result should look similar the following:

![Two Groups](img/pure_and_mixed.png?raw=true "Two Groups")

They don't need to be styled (just visually grouped), but bonus points if you add CSS into the mix -- see below!

Additionally, we've added a [failing test cases](components/BreedSelect/test/BreedSelect.test.jsx) that we'd like you to fix once you have your solution.  There's also an optional one regarding the display of non-live breeds if you want to tackle that as well.

## Bonus
If you're feeling up to it, you can try tackling the following tasks for some bonus/brownie points.  They're not required, so don't feel pressured to get them in.

- Add some CSS to get the finished product as close to the mockups above!
  - Adding [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) or [fast-sass-loader](https://github.com/yibn2008/fast-sass-loader) could be a good place to start.  We're unfortunately not on Webpack v4...otherwise you'd be able to use [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin).
- Add a third group, "Non-Live Breeds", for the non-live breeds (`live: false`):

  ![Three Groups](img/pure_mixed_non-live.png?raw=true "Three Groups")

  (This means that all non-live breeds -- mixed or not -- should be moved to this new third group!  No duplicates!)

## Development
The following dependencies are included as part of this project:
- `babel`
- `webpack`
- `express`
- `isomorphic-fetch`
- `react`
- `classnames`
- `jest`

**Dependencies can be added for testing or CSS but not for JavaScript/React implementation.**

## Submission
The submit your solution, open up a pull request against the master branch.  If you want to explain your solution, fill out [IMPLEMENTATION_NOTES](IMPLEMENTATION_NOTES) -- you can also add in some ideas for future extensions or optimizations if you don't get to them in your implementation.

### SUBMISSION CHECKLIST
- [ ] Is my solution working?
- [ ] Did I fill out IMPLEMENTATION_NOTES with details about my solution?
  - [ ] (Optional) Did I add notes about extensions and optimizations for my solution?
- [ ] Did I fix the failing test case?
  - [ ] (Optional) Did I enable and fix the test case about non-live breeds?

If you get stuck or have any questions/comments, don't hesitate to reach out to any one of us:
- stephen[at]gooddog.com
- peleg[at]gooddog.com
- pat.mcgee[at]gooddog.com
