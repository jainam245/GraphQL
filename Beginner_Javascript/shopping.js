const shoppingForm = document.querySelector(".shopping");
const list = document.querySelector(".list");

//We need an array to hold our state
let items = [];

function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted!!!!");
    const name = e.currentTarget.item.value;

    // if it's empty, then don't submit it.
  if (!name) return;

    const item = {
      name,
      id: Date.now(),
      complete: false,
    };
    // push the items into our state
    items.push(item);
    console.log(`There are now ${items.length} in your state`);
    // clear the form
    e.target.reset();

    list.dispatchEvent(new CustomEvent('itemsUpdated'));
    
  }

  function displayItems() {
    console.log(items);
    const html = items
  .map(
    (item) => `<li class="shopping-item">
      <input
        type="checkbox"
        value="${item.id}"
        ${item.complete && 'checked'}
        >
      <span class="itemName">${item.name}</span>
      <button
        aria-label="Remove ${item.name}"
        value="${item.id}"
      >&times;</button>
    </li>`
  )
  .join("");
    list.innerHTML = html;
  }

  function mirrorToLocalStorage() {
    localStorage.setItem(items, JSON.stringify(items));
    console.info("Saving items to localstorage");
  }

  function restoreFromLocalStorage() {
    console.info("restoring from LS");
    const lsItems = JSON.parse(localStorage.getItem("items"));
    if (lsItems.length) {
        // items = lsItems;
        // lsItems.forEach(item=> items.push(item));
        items.push(...lsItems);
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
      }
  }
  function deleteItem(id) {
    console.log("DELETING ITEM!!!", id);
    items = items.filter((item) => item.id !== id);
    list.dispatchEvent(new CustomEvent("itemsUpdated"));
  }

  function markAsComplete(id) {
    console.log("Marking as complete!", id);
    const itemRef = items.find((item) => item.id === id);
    
    itemRef.complete = !itemRef.complete;
list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
  shoppingForm.addEventListener('submit', handleSubmit);
  list.addEventListener('itemsUpdated', displayItems);
  list.addEventListener('itemsUpdated', mirrorToLocalStorage);

  // event delegation: We listened for the click on the list <ul> but then delegate the click over to the button if that is what was clicked.
  list.addEventListener("click", function(e) {
    const id = parseInt(e.target.value);
    if (e.target.matches("button")) {
      deleteItem(id);
    }
    if (e.target.matches('input[type="checkbox"]')) {
      markAsComplete(id);
    }
  });

restoreFromLocalStorage();

 

 

 