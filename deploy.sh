#! /bin/bash

content_path="$WEBSERVER_ROOT/dist"

git pull

npm run build

if test -d content_path; then
  echo 'Webserver content already exists, removing.'
  rm -r content_path
fi

echo "Copying static files to server root."
cp -r dist content_path

echo "Restarting nginx."
systemctl restart nginx