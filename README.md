# ersfilter
Website - 2022

:warning: Important!
- You need to have a file called .nojekyll in your public folder for github pages to allow the directory _next/ to be accessible. 

## Deployment
- `git checkout main`
- `npm run clean` // removes `./docs/` and `./out` directories if they exist
- `npm run export` // this will build a static version of your app and copy the `./out` dir to `./docs`
- `git add .`
- `git commit -m 'commit msg'`
- `git push`git 