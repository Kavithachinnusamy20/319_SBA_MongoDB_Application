1.Use atleast 3 different data collections within the database( such as users, BookEntry, checkout 
2.Utilize reasonable data modeling practices for users,BookEntry,Checkout
**using CRUD API for BookEntry**
3.Create GET routes for all data that should be exposed to the client, using appropriate BookEntry to retrieve the data from the database.
4.Create POST routes for data, as appropriate, using appropriate insertion author,title,genre to add data to the database.

5.Create DELETE routes for data, as appropriate, using appropriate delete commands to remove data from the database using id. At least one data collection should allow for client deletion via a DELETE request.
6.Create PATCH routes for data, as appropriate, using appropriate update commands to updating data in the database. At least one data collection should allow for client manipulation via a PATCH request.
7.Use try/catch and status for API.
***Modelling **
*****BookEntry.js**
***crud operations:***
get/api -find all the Book Entry
post/api/posts-create new BookEntries
get/api/posts -view the newly created users
delete/api/posts/:id-delete selected user by id
patch/api/posts/:id-upadate selected user by id
get/api/posts --view the updated users
**user.js****
 
 post/api/users-Users schema POST APIs

**checkout.js**
post/api/CheckOut --schema POST APIs
patch/api/checkout/:id -updating selecting id


