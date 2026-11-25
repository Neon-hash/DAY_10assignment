JS.lab

0 of 0 lessons done

# Functions & the DOM

Everything essential about JavaScript functions and DOM manipulation that works in modern browsers today. Short lessons, real-world examples, and live code you can break and fix.

✏️ Edit any code▶ Run (or Ctrl/⌘ + Enter)↺ Reset to original🎯 Try each challenge✅ Mark lessons done

**Part 1**

## Functions

Functions · 01

## What is a function?

🍹 **Think blender:** you put stuff in (**parameters**), it does a job, and gives something back (**return**). You build the blender once and use it as many times as you want.

- **Declare** it once with `function name(params) { ... }`
- **Call** it with `name(arguments)`. The values you pass in are called arguments.
- `return` sends a value back *and stops the function*. With no return, you get `undefined`.

🌍 **Real world:** every app is made of small functions: `calculateTotal()` in a shopping cart, `formatDate()` on a blog, `validateEmail()` on a sign-up form.

#### 🎯 Your turn

Write `calcTotal(price, qty)` that returns `price * qty`. Log `calcTotal(1500, 3)`. You should get **4500**.

Hint

Same shape as `greet`, just with two parameters separated by a comma.

Functions · 02

## 3 ways to write a function

All three do the same job. In modern code you'll mostly see **arrow functions**.

- **Declaration**: `function add(a, b) { ... }`
- **Expression**: `const add = function (a, b) { ... }`
- **Arrow**: `const add = (a, b) => a + b`. On one line, the result is returned automatically (an *implicit return*).

See the backticks `` `${n} is ${type}` ``? That's a **template literal**. It's the modern way to put variables inside strings.

🌍 **Real world:** React components are often arrow functions (`const Navbar = () => ...`), and arrows are everywhere as short callbacks: `button.addEventListener("click", () => ...)`.

#### 🎯 Your turn

Rewrite `function isAdult(age) { return age >= 18; }` as a one-line arrow function. Test it with 15 and 21.

Functions · 03

## Parameter superpowers

- **Default values**: `qty = 1` is used when nothing is passed in.
- **Rest**: `...nums` collects any number of arguments into an array.
- **Spread**: `...array` unpacks an array into separate values. It's the same dots doing the opposite job.
- **Destructuring**: `({ name, city })` pulls properties straight out of an object.

🌍 **Real world:** libraries take "options objects" like this all the time, for example `fetch(url, { method: "POST", headers })`. In React, props are destructured: `function Card({ title, price }) {...}`.

#### 🎯 Your turn

Write `average(...nums)` that returns the average of any amount of numbers. `average(10, 20, 30)` should give **20**.

Hint

Use the `sum` idea, then divide by `nums.length`.

Functions · 04

## Scope & closures

**Scope** means *where a variable can be seen*. Variables made inside `{ }` with `let` or `const` stay inside those braces.

🎒 **Closure = backpack.** When a function is created inside another function, it carries a backpack holding the outer variables. It keeps that backpack even after the outer function has finished running.

⚠️ **Use `const` by default and `let` when the value needs to change. Avoid `var`.** It ignores block scope and causes confusing bugs. You'll still see it in old tutorials.

🌍 **Real world:** closures keep data private (like a bank balance nobody can edit directly). React's `useState`, debounce helpers and event handlers all depend on closures.

#### 🎯 Your turn

Make `makeWallet(start)` that returns an object with two functions: `deposit(amount)` and `balance()`. The money should stay private.

Functions · 05

## Hoisting (why order sometimes matters)

JavaScript moves **function declarations** to the top before running, so you can call them before the line where they're written. **Arrow functions and expressions are not usable early**, because they're just variables.

Which one can you call BEFORE the line where it's written?

Only function **declarations** are hoisted fully. Arrow functions and expressions are stored in `const` variables, which can't be used until their line runs.

Functions · 06

## Callbacks & higher-order functions

In JS, functions are values, so you can **pass a function into another function**. The function you pass in is a **callback**. A function that takes or returns a function is a **higher-order function**.

The array methods below are among the most-used tools in real JS:

| Method | What it does | Returns |
| --- | --- | --- |
| `forEach` | run code for each item | nothing |
| `map` | transform each item | new array (same length) |
| `filter` | keep items that pass a test | new array (shorter or equal) |
| `find` | first item that passes | one item / undefined |
| `reduce` | combine everything into one value | anything |
| `some` / `every` | does any / all pass? | true / false |
| `sort` | reorder (changes the original!) | same array |

🌍 **Real world:** `filter` powers search bars and category filters, `map` turns data into HTML cards (React does this constantly), and `reduce` adds up cart totals and stats.

#### 🎯 Your turn

Chain `filter` + `map` to get the **names** of products that are in stock **and** cost under 20000. Expected: `["Hoodie"]`.

Hint

`products.filter(p => p.inStock && p.price < 20000).map(...)`

Functions · 07

## `this`, methods & classes

- A function stored inside an object is a **method**. Inside a method, `this` means "the object that called me".
- **Arrow functions don't have their own `this`**. They borrow it from where they were written. That makes them great *inside* methods, but bad *as* methods.
- `bind` locks `this` in place. `call` and `apply` run a function right away with a `this` you choose.
- **Classes** are blueprints for making many similar objects.

🌍 **Real world:** game characters, shopping carts and API clients are often built as objects or classes with methods. You'll run into `this` bugs when you pass methods around as event handlers, and `bind` or an arrow function fixes them.

#### 🎯 Your turn

Create a `cart` object with an `items` array and an `addItem(name)` method that pushes the item and returns how many items are in the cart.

Functions · 08

## Async functions: Promises & `async/await`

Some tasks take time, like loading data, waiting for a timer or uploading a file. JS **doesn't freeze while it waits**. It moves on to the next line and comes back when the result is ready.

🧾 **A Promise is like a restaurant buzzer.** You order, get a buzzer (the Promise), and go sit down. Later it either buzzes with your food (**resolve**) or tells you they ran out (**reject**). `await` means "pause this function until it buzzes".

**Fetching data from an API** is the async task you'll do most. This page is sandboxed with no internet, so we use `fakeFetch()`. It works exactly like the real `fetch()`.

🌍 **Real world:** loading posts in a feed, logging in, sending a payment, getting weather data. Every app that talks to a server uses `async/await` + `fetch` + `try/catch`.

#### 🎯 Your turn

Call `loadUser(99)` (it doesn't exist) inside an `async` function with `try/catch`, and log a friendly message like *"Sorry, couldn't find that user"*.

Functions · 09

## Pro patterns you'll actually use

- **Pure function**: same input always gives the same output, and it changes nothing outside itself. Easy to test and trust.
- **Recursion**: a function that calls itself. It needs a stopping point (the base case).
- **Debounce**: wait until the user *stops* doing something (like typing) before running the code.
- **IIFE**: a function that runs immediately. It's an older pattern, but you'll see it in existing code.

🌍 **Real world:** debounce stops a search bar from calling the server on every single keypress. Recursion walks nested comments and folder trees. Pure functions make up most of a well-built codebase.

#### 🎯 Your turn

Write a recursive `factorial(n)`. `factorial(5)` = 5×4×3×2×1 = **120**.

### ⚡ Quick check

What does `[1, 2, 3].map(n => n * 2)` return?

`map` always returns a **new array** with the same number of items, each one transformed.

Why use `try/catch` with `await`?

If the awaited Promise rejects (network error, 404 handled with throw), `catch` lets you show a friendly message instead of crashing.

What will `const f = () => { 5 }; f()` return?

Once you add `{ }`, implicit return is gone, so you need to write `return 5`.

**Part 2**

## DOM Manipulation

DOM · 01

## What is the DOM? + Selecting elements

When the browser loads your HTML, it builds a **tree of objects** called the **DOM** (Document Object Model). JavaScript can read and change this tree, and the page updates instantly.

🌳 `document` is the root of the tree. Every tag is a branch (a **node**). Before you can change something, you have to **select** it.

| Method | Use |
| --- | --- |
| `document.querySelector(css)` | ⭐ first match for any CSS selector |
| `document.querySelectorAll(css)` | ⭐ all matches (a NodeList, supports `forEach`) |
| `document.getElementById("id")` | one element by id (fast, classic) |
| `el.closest(css)` | walk UP to the nearest matching ancestor |

🌍 **Real world:** grabbing a navbar to make it sticky, every "Add to cart" button, a modal you want to open. Almost every DOM task starts with `querySelector`.

#### 🎯 Your turn

Select **all** `.event` items and make each one bold (`style.fontWeight = "bold"`) and give it a 🎉 at the start.

DOM · 02

## Changing content

- `textContent` reads or sets plain text. ⭐ Safe, so use it by default.
- `innerHTML` reads or sets HTML (tags get rendered). Powerful, but risky when the content comes from users.
- `value` reads or sets what's typed in an input, select or textarea.

⚠️ **Security:** putting user-typed text into `innerHTML` opens the door to **XSS attacks**, where an attacker injects code that runs on your page. Use `textContent` for anything a user typed.

#### 🎯 Your turn

Read the input's value and set `#msg` to *"Welcome, Ada!"* (using whatever name is in the input). Delete the line that changes the input first.

DOM · 03

## Styles & classes

⭐ **Best practice:** write the styles in CSS classes, then add or remove those classes with JS. Inline `style` is fine for values that keep changing, like positions or progress widths.

- `el.classList.add / remove / toggle / contains / replace`
- `el.style.backgroundColor = "red"`. CSS names become camelCase in JS.
- `el.style.setProperty("--accent", "pink")` sets a CSS variable.

🌍 **Real world:** dark mode toggles, opening a mobile menu (`menu.classList.toggle("open")`), highlighting the active tab, showing errors on form fields.

#### 🎯 Your turn

Make the card shrink back to normal size when it's clicked (remove the class `big`), and grow again on the next click.

DOM · 04

## Attributes & `data-*`

- `getAttribute / setAttribute / removeAttribute / hasAttribute`
- Many attributes also exist as properties: `link.href`, `btn.disabled`, `img.src`
- `data-*` attributes store your own info on an element. Read them with `el.dataset`. Note that `data-product-id` becomes `dataset.productId`.

🌍 **Real world:** `data-product-id` on "Add to cart" buttons tells your code *which* product was clicked. You'll also use attributes to disable a button while a form submits, or swap an image's `src` in a gallery.

DOM · 05

## Create, insert & remove elements

| `document.createElement("li")` | make a new element |
| --- | --- |
| `parent.append(el)` / `prepend(el)` | add as last / first child |
| `el.before(x)` / `el.after(x)` | insert next to an element |
| `el.insertAdjacentHTML("beforeend", html)` | add an HTML string without wiping what's already there |
| `el.remove()` | delete it |
| `el.replaceChildren(...)` | clear or replace all children |
| `el.cloneNode(true)` | deep copy |

🌍 **Real world:** showing search results, adding chat messages, loading more posts, building product cards from API data. The pattern is always the same: **data → loop → create element → append**.

#### 🎯 Your turn

Clear the list with `list.replaceChildren()`, then render this array as `<li>`s showing name and price: `[{name:"Cap",price:5000},{name:"Hoodie",price:18000}]`.

DOM · 06

## Events: making pages react

`el.addEventListener("event", callback)`. When the event happens, your function runs and receives an **event object** (`e`) with the details.

| Type | Common events |
| --- | --- |
| Mouse / touch | `click`, `dblclick`, `pointerdown`, `pointermove`, `mouseenter` |
| Keyboard | `keydown`, `keyup` (use `e.key`) |
| Forms | `input` (every keystroke), `change`, `submit`, `focus`, `blur` |
| Page | `DOMContentLoaded`, `scroll`, `resize` |

⚠️ **Outdated:** `<button onclick="...">` in HTML still works, but it mixes JS into your HTML. Use `addEventListener`. To stop listening, call `removeEventListener` with *the same named function* you added.

🌍 **Real world:** like buttons, live search, keyboard shortcuts in games and editors, closing a modal with Escape, and image sliders.

#### 🎯 Your turn

Add a listener so pressing **Escape** resets the counter to 0 and updates the text.

Hint

Check for `e.key === "Escape"` inside the keydown listener.

DOM · 07

## Event bubbling & delegation

When you click a button, the event **bubbles up**: first the button gets it, then its parent, then the parent's parent, all the way up to `document`.

**Delegation** takes advantage of this: put **one** listener on the parent and check `e.target` to see what was clicked. It even works for elements added later. `e.stopPropagation()` stops the bubbling if you ever need to.

🌍 **Real world:** to-do lists, comment sections, tables with edit and delete buttons, product grids. Any list that changes over time should use delegation instead of hundreds of separate listeners.

DOM · 08

## Forms: reading & validating input

- Listen for `submit` on the **form**, not click on the button. That way pressing Enter works too.
- `e.preventDefault()` stops the page from reloading.
- `new FormData(form)` collects every field that has a `name` attribute.
- HTML validation (`required`, `type="email"`, `minlength`) works alongside your JS checks.

🌍 **Real world:** login and sign-up pages, checkout, contact forms, search. In a real app you'd then send `data` to a server with `fetch(url, { method: "POST", body: JSON.stringify(data) })`.

#### 🎯 Your turn

Add a check: if the email doesn't contain `"@"`, show *"Enter a valid email"* in red. (Remove `required` from the HTML to test your JS check.)

DOM · 09

## Moving around the tree

Once you have an element, you can move to the elements around it:

`parentElement` · `children` · `firstElementChild` · `lastElementChild` · `nextElementSibling` · `previousElementSibling` · `closest()`

🌍 **Real world:** FAQ accordions (click a question, open the answer right after it with `nextElementSibling`), "next/previous" buttons in sliders, finding the card a button sits inside with `closest(".card")`.

DOM · 10

## Modern browser APIs (scroll animations & more)

- **IntersectionObserver**: run code when an element scrolls into view. Use it for scroll-reveal animations and lazy loading. It's much faster than listening to `scroll`.
- **requestAnimationFrame**: smooth 60fps animation loops for games, canvas and custom motion.
- **setInterval**: repeat something every X milliseconds (clocks, countdowns).
- **localStorage**: save small data in the browser so it survives a page refresh.

🌍 **Real world:** fade-in sections on landing pages and portfolios, 3D scroll product sites, infinite scroll, countdown timers for sales, remembering a user's dark mode choice.

Best way to animate cards when they scroll into view?

`IntersectionObserver` is built for exactly this. The browser does the work efficiently instead of running your code on every scroll pixel.

A user types a comment. How should you display it?

`textContent` shows it as plain text, which blocks XSS. `document.write` is outdated, so never use it.

**Project**

## Put it all together

Final project

## Build a mini task board

This uses **everything**: functions, arrays (`filter`/`map`), closures, a form, rendering from data, event delegation, classes and localStorage. Read the comments, run it, then try the upgrades.

#### 🚀 Upgrade challenges (pick any)

- **Easy:** add a "Clear done" button that removes all finished tasks (`filter`).
- **Medium:** double-click a task to edit its text (`dblclick` event + an `input`).
- **Medium:** add a search box that filters tasks as you type (the `input` event, plus debounce!).
- **Hard:** load starter tasks from `fakeFetch("/api/users")` with `async/await` and turn each user into a task.

🌍 **This exact structure** (state → render → events) is how React, Vue and most modern apps think. Once you understand this project, frameworks become much easier to learn.

Reference

## Cheat sheet: modern vs outdated

| ✅ Use today | ❌ Avoid / outdated |
| --- | --- |
| `const` / `let` | `var` |
| Arrow functions for callbacks | `var self = this` hacks |
| `async/await` + `fetch` | nested callbacks, `XMLHttpRequest` |
| `querySelector` / `querySelectorAll` | `getElementsByClassName` loops (still works, just clunky) |
| `addEventListener` | `onclick="..."` in HTML |
| `textContent` for user data | `innerHTML` with user input |
| `classList` | editing `className` strings by hand |
| `append`, `prepend`, `before`, `after`, `remove` | `appendChild`/`removeChild` (still fine, just longer) |
| `IntersectionObserver` | heavy `scroll` listeners |
| Vanilla JS | jQuery for new projects |
| — | `document.write()` (never) |

📚 Keep [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) bookmarked. It's the most reliable JS reference.