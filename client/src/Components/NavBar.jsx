import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Achievement from "./Achievement";
import Contect from "./Contect";
import Department from "./Department";
import Gallary from "./Gallary";
import Home from "./Home";

const NavBar = () => {
  return (
    <Router>
      <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content ">
        <div class="flex-none  lg:flex lg:hidden">
          <button class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div class="flex-1  px-2 mx-2 lg:flex">
          <span class="text-lg font-bold">GECB</span>
        </div>

        <div class="flex-1 px-2 mx-2">
          <div class="items-stretch hidden lg:flex">
            <Link to="/ " class="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/dep" class="btn btn-ghost btn-sm rounded-btn">
              Departments
            </Link>
            <Link to="/gallary" class="btn btn-ghost btn-sm rounded-btn">
              Gallary
            </Link>
            <Link to="/achievement" class="btn btn-ghost btn-sm rounded-btn">
              Achievement
            </Link>
            <Link to = "/con" class="btn btn-ghost btn-sm rounded-btn">
              Contect Us
            </Link>
          </div>
        </div>

        <div class="flex-1 lg:flex-none">
          <div class="form-control">
            <input type="text" placeholder="Search" class="input input-ghost" />
          </div>
        </div>
        <div class="flex-none">
          <button class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
        <div class="flex-none">
          <button class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
          </button>
        </div>
 
        <div class="flex-none">
          <div class="avatar">
            <div class="rounded-full w-10 h-10 m-1">
              <img src="https://i.pravatar.cc/500?img=32" alt="userimage" />
            </div>
          </div>
        </div>
      </div>
      <Switch>
        <Route path= "/con" >
          <Contect />
        </Route>
        <Route path="/dep">
          <Department />
        </Route>
        <Route path="/gallary">
          <Gallary />
        </Route>
        <Route path="/achievement">
          <Achievement />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default NavBar
