ssh root@60.131.24.88 "docker stop books-backend;docker stop mongodb2;rm -r ./books;mkdir books"
scp -r ./dist/* root@60.131.24.88:/root/books/
ssh root@60.131.24.88 "cd ./books&&npm run docker:compose"
