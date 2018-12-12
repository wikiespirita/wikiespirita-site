#!/bin/bash -e

#
# CI for GitHub Pages using CircleCI
#

# Exit on Error
set -e

# Variables
DIST_FOLDER=site
REMOTE_GIT_REPO=git@github.com:wikiespirita/wikiespirita-site.git
LAST_COMMIT_MESSAGE=$(git log -1 --pretty=%B)

# Build Application
yarn run --silent build
yarn update
#npm run build

if [ "$(git status --porcelain | wc -l | xargs)" -eq 0 ]; then
  echo "Nenhuma modificação identificada..."
  exit 0
fi

cp -R .circleci $DIST_FOLDER
cd $DIST_FOLDER
echo 'wikiespirita.com.br' > CNAME

git config --global user.name "Circle CI"
git config --global user.email "<>"
git config --global push.default simple
git init
git add -A
git commit -m "[$LAST_COMMIT_MESSAGE] Deploy by CI"
git checkout -b gh-pages

git push -f $REMOTE_GIT_REPO gh-pages:gh-pages