


const shirtss = (title, description, date_created, ) => {
  return { 
    title: title,
    description: description, 
    date_created: date_created,
    
    details() {
      console.log("Brand: " + this._title + " | " +
                  "Type: " + this.description + " | " +
                  "Color: " + this.date_created + " | " 
                   );
    } 
  }
};
    
let todo = shirtss("ass","cool","yer",['exercise', ' fitness', ' routines'])
todo.details()


    // Create an Factory Function and give this function a suitable name
    // Have it's parameters add these parameter values: 'title', 'description', 'date_created', 
    // Within your function create private variables that are set to the same name as the parameter values above
    // Have your property values be equal to the respective parameters they have been named after
    // e.g. description: description
    
    const shirts = (brand, type, color, price) => {
      return { 
        brand: brand,
        type: type, 
        color: color,
        price: price,
        details() {
          console.log("Brand: " + this.brand + " | " +
                      "Type: " + this.type + " | " +
                      "Color: " + this.color + " | " +
                      "Price: " + this.price );
        } 
      }
    };
    const product111 = shirts('Polo', 'Golf-shirt', 'Light blue', 500);
    product111.details()





    
    // Declare a variable of 'todo' and have it equal to an instantiation of your Factory Function name, using the arguments in brackets below
    // Your 'todo' variable should now be equal to an object, which allows you to use concatenation on it.
    // To avoid confusion, going forward we are going to refer to the 'todo' variable as an object
=
    
    // Using the 'todo' object declared above:
    // Console.log the property value title
    // Feel free to try and console log.all your other property values declared within the Factory Function
    
    
    // After having successfully completed the instrutions above, add these changes to your code above:
    // Remove the parameter and argument of 'description' from your factory function, as well as from the 'todo' object
    // Replace your description property within your factory function, to equal a function which neatly returns all the properties
    // e.g. description: function() {
    //       return("Task Name: " + this.title + " | " +
    //         "Date Created: " + this.date_created + " | " +
    //         "Date Due: " + this.date_due + " | " +
    //         "Tags: " + this.tagname );
    //      },
    
    // Using the 'todo' object, console.log the description property

