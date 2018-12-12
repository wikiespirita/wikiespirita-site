#!/bin/bash -e

# Exit on Error
set -e

# Variables
DIST_FOLDER=site
# Save the Commit Message
LAST_COMMIT_MESSAGE=$(git log -1 --pretty=%B)

# Prepare the environment
#git worktree add site gh-pages
#git worktree add $DIST_FOLDER gh-pages

# Save the '.git' file
#mv ./$DIST_FOLDER/.git .git-$DIST_FOLDER

# Remove worktree folder
#rm -rf ./$DIST_FOLDER

# Build Application
#yarn run --silent build
npm run build

if [ "$(git status --porcelain | wc -l | xargs)" -eq 0 ]; then
  echo "Nenhuma modificação identificada..."
  exit 0
fi

cd $DIST_FOLDER
echo 'wikiespirita.com.br' > CNAME

git config --global user.name "Circle CI"
git config --global user.email "<>"
git init
git add -A
git commit -m "[$LAST_COMMIT_MESSAGE] Deploy by CI"

git push -f $(git config --get remote.origin.url) gh-pages:gh-pages
#git push -f $(git config --get remote.origin.url) master:master
#git push -f git@github.com:wikiespirita/wikiespirita.github.io.git master