esercizi
/* EXERCISE 1
Create and array with the first 5 positive numbers
*/

/* WRITE YOUR CODE HERE */
let numeripositivi=[1,2,3,4,5];
/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/* WRITE YOUR CODE HERE */
let person= {
    name: yassin,
    surname: caramico,
    email: ycaramico1202@gmail.com,
    age:23

};
/* EXERCISE 3
Add to the previously created object a boolean value to represent whether you have or not a driving license
*/

/* WRITE YOUR CODE HERE */
let person={
    name: yassin,
    surname:caramico,
    email:email@gmail.com,
    age:23
    hasDrivingLicense:true
};
/* EXERCISE 4
Remove from the previously created object the age
*/
let person={
    name:yassin,
    surname:caramico,
    email:emqail@gmail.com,
    HasDrivingLicense:true
};
/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/

/* WRITE YOUR CODE HERE */
let person2={
    name:yassin,
    surname:caramico,
    email:bro@gmail.com
    if(person2.email!== person.email){
        console.log("l'indirizzo email dell'oggetto person2 è diverso dall'indirizzo email dell'oggetto person");
    } else{
        console.log ("l'indirizzo email dell'oggetto secondPErson è uguale all'indirizzo email dell'Oggetto person"),
    };
}
/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

/* WRITE YOUR CODE HERE */
let totalShoppingCard = 60;
let shippingcost = 0;
if (totalShoppingCard > 50) {
  shippingcost = 0;
} else {
  shippingcost = 10;
}
let totalCost = totalShoppingCard + shippingcost;
console.log("il costo totale è:" + totalCost + "euro");
/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a "20"% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/

/* WRITE YOUR CODE HERE */