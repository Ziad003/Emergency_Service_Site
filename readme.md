1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: 
getElementById: It grabs one element with the specific id. It only returns a single element.
getElementsByClassName: It grabs all elements with that class. It returns an HTMLCollection.
querySelector: It grabs the first element that matches any CSS selector
querySelectorAll: It grabs all elements that match the selector and returns a NodeList.


2. How do you create and insert a new element into the DOM?
i.g.
const parentDiv=document.getElementById('mainDiv');
const newDiv = document.createElement("div");
newDiv.innerHTML=`
  <div class="text-gray-500 heartIcon cursor-pointer">
      <i class="fa-regular fa-heart"></i>
   </div>
`
parentDiv.appendChild(newDiv);

3. What is Event Bubbling and how does it work?
Event Bubbling is when an event starts at the target element and then bubbles up through its parent elements.

4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is when we attach an event listener to a parent element instead of each individual child.Then inside the listener, we check which child triggered the event. For example:

document.getElementById("parent").addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
        alert("Button clicked: " + e.target.textContent);
    }
});

5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault(): Stops the default browser action. For example, stopping a form from submitting or a link from opening.
stopPropagation(): Stops the event from bubbling up to parent elements.