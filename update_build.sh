#! /usr/bin/bash

rm -rf ./backend/build
cd ./frontend/ 
pnpm build
cd ..
mv ./frontend/build ./backend/

