# Front end exercise


## Environment:  
* HTML 5 + CSS3 + Bootstrap
* Javascript/Typescript
* You can use for example: **Angular**, React, Vue, jQuery, Vanilla JavaScript, ...

## Requirements: 
* We want to show a table with the same data structure used for the REST_API.txt exercise. 

* It should be possible to sort the data in the table by name and by id. 

* All data shall be in memory for the first step. Sample data is provided below:

Sample data:
```json
 [{
     "id": ​1,
     "name": "Felipe",
     "roles": [
            "standard",
        "admimn"
     ]
 }, {
     "id": ​2,
     "name": "Roberto",
     "roles": [
            "standard",
     ]
 }, {
     "id": ​3,
     "name": "Maria",
     "roles": [
            "standard",
     ]
 },{
     "id": ​4,
     "name": "Rebeca",
     "roles": [            
        "admin"
     ]
 }
 ]
 ```
* It should be possible to add new entries to the table storing these new entries in memory

* The start page of the application should be a login page.

* Everyone logged in user can list the users.

* Not logged in users should not be able to get any data from the application.

* Only admins can create new users.


Nice to have:
- If you were able to do this exercise and also the REST_API.txt exercise, it would be nice if you can really connect the two exercises. So instead of doing everything in memory, the REST API is really used.
- If you know how to do it, tests are welcome
- Use the cleanest and simplest code as possible
