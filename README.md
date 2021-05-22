To run this application 
clone it.
npm install
node server.js
-------------------------
to add a blog----click New Articles
to read more about any singl blog -click Read More
to edit the blog---------click on edit
to delete --------click on delete
to post comment----------comment and then click on post
------------------------------
end points
all articles----localhost:3000/ (get)
new article-----localhost:3000/article/new   (post)
read more-------localhost:3000/article/:id(get)
edit------------localhost:3000/article/edit/:id  (put)
delete----------localhost:3000/article/delete  (post)
post comment --localhost:3000/article/addcomments/:id  (post)
all comments---localhost:3000/article/:id  (get)
---------------
nosql database is used 
------------
schema-->  { title:{type :String},
             content : {type :String},
             comments :{type : Array}  }
