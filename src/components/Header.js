import React from "react";
export default function Header() {
  return (
    <>
    <div id="baar">
      <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="#">Gohar</a>
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="#home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#projects">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#services">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#about">About</a>
              </li>
            </ul>
        </div>
      </nav>
    </div>

    </>
  );
}
