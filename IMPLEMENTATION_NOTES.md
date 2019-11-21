# BreedSelect Homework Assignment

This was pretty fun. Here are some of the decisions I made along the way:

- I opted to build three `BreedList` components within `BreedSelect`. I think that reads far cleaner than including three list display implementations in the `BreedSelect` component.

- In terms of my actual filtering of the breeds, I decided that adding three new properties to `BreedSelect` state, populated by three `.filter()` calls in `getDerivedStateFromProps` would be the simplest and most legible solution.

- Since there are no dogs in `breeds.json` that would display under "mixed" as they were listed, I opted to make a second file, `breeds-with-mixed-live.json` to show that this category is working. Please note that the server is still responding with the new json file as I've left it.

- In terms of extensions, I only added those needed to use Sass styling: `fast-sass-loader`, `style-loader`, etc. That said, I could have just used some in line css, since styling requirement was minimal.
