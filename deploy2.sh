#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd .vuepress/dist

# if you are deploying to a custom domain
echo 'wikiespirita.com.br' > CNAME

git init
git add -A
git commit -m 'Deploy by the local Script'

git push -f git@github.com:wikiespirita/wikiespirita.github.io.git master