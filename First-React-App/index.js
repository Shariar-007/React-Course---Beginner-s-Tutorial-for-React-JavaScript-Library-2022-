


// function Navbar() {
//     return (
//         <nav class="navbar navbar-expand-lg navbar-light bg-light">
//             <div class="container-fluid">
//                 <a class="navbar-brand" href="#">Navbar</a>
//                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                 <span class="navbar-toggler-icon"></span>
//                 </button>
//                 <div class="collapse navbar-collapse" id="navbarNav">
//                 <ul class="navbar-nav">
//                     <li class="nav-item">
//                     <a class="nav-link active" aria-current="page" href="#">Home</a>
//                     </li>
//                     <li class="nav-item">
//                     <a class="nav-link" href="#">Features</a>
//                     </li>
//                     <li class="nav-item">
//                     <a class="nav-link" href="#">Pricing</a>
//                     </li>
//                     <li class="nav-item">
//                     <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//                     </li>
//                 </ul>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// function MainContent() {
//     return (
//         <h1>I'm learning React!</h1>
//     )
// }

// ReactDOM.render(
//    <div>
//      <Navbar/>
//      <MainContent/>
//    </div>,
//    document.getElementById("root")
// );


// Challenge - recreate the above line of code in vanilla JS by creating and appending an h1 to our div#root
//  (without innerHTML)

// - create a new h1 element
// - Give it some textContent
// - Give it a class name of "Header"
// - append it as a child of the div#root


// const h1 = document.createElement("h1");
// h1.textContent = "This is an imperative way to program"
// h1.className = "header"
// document.getElementById("root").append(h1);

// JSX
// ReactDOM.render(<h1>Hello Everyone!</h1>, document.getElementById("root"));
// ReactDOM.render(<h1>Hello My Name is Shophar!</h1>, document.getElementById("like_button_container"));

const navbar = (
   <nav>
    <h1>Bob's Bistro</h1>
    <ul>
        <li>Menu</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
   </nav>
)

ReactDOM.render(
    navbar,
    document.getElementById("root")
)