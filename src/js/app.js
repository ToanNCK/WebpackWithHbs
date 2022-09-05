import "../scss/app.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

// bootstrap
// import { Popover } from "bootstrap";
// Import just what we need

// import 'bootstrap/js/dist/alert';
// import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/carousel';
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/dropdown";
// import "bootstrap/js/dist/modal";
// import 'bootstrap/js/dist/popover';
// import 'bootstrap/js/dist/scrollspy';
import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/toast';
// import 'bootstrap/js/dist/tooltip';
/* Your JS Code goes here */

//   b-lazy
import Blazy from "./../../node_modules/blazy/blazy";
const bLazy = new Blazy({
  offset: 150,
});

/* Demo JS */
import "./home.js";