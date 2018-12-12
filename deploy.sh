#!/bin/bash -e

# build
#yarn run --silent build
npm run build

if [ "$(git status --porcelain | wc -l | xargs)" -eq 0 ]; then
  echo "Nenhuma modificação identificada..."
  exit 0
fi

cd site
echo 'wikiespirita.com.br' > CNAME

git config --global user.name "Circle CI"
git config --global user.email "<>"
git init
git add -A
git commit -m "[ci skip] Deploy by CI"

git push -f $(git config --get remote.origin.url) origin gh-pages
#git push -f $(git config --get remote.origin.url) master:master
#git push -f git@github.com:wikiespirita/wikiespirita.github.io.git master