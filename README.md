# ApneaElearning 2701ICT Griffith University

This application was created as an assessment piece for Griffith University, Interactive Application Development Course.
This is my first application created using a combination of Ionic/Angular.

This was a great learning experience, while the final application is functional as intended there were ways I could have simplified the process.

Data Typing, My data was stored in arrays, initially this was not an issue. But when it came time for deleting and recalculating indexes combined with async functions, managing this data became difficult.
My fix was to change from using arrays to mapping key:value pairs for each user, using string interpolation to read/write to individual users.

Data Structuring, The data is stored in JSON within a user file and all permissions/courses etc are built into this. Initially I wanted to use a relational database but had not encountered solutions for this yet.
The solution I thought better to implement would work the same way as a relational database, and modelled in the same way. With each Database table as one key:value pair with the data stored as objects as changed earlier.

Starting with these two options initially would have made for much easier, creation/reading/updating/deleting of all the data and encountering these problems here has given positive insights for future projects.
This has taught me the value of utilising proper planning with UML(or equivelant) diagrams before starting the coding process, and wireframing before even starting the coding process.
Doing this will cut down on the required time to code the project, and increase planning time allowing for a much smoother end product with likely less bugs to fix along the way
