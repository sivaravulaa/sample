import React,{useState} from "react"

const About = (props) => {

    return(
<div>
<nav class="nav">
  <a id="list" class="nav-link active" href="#"><img src="https://www.ramojifilmcity.com/homeimages/logo-r.png" /></a>
  <a id="list"class="nav-link" href="#">Link</a>
  <a id="list"class="nav-link" href="#">Link</a>
  <a id="list"class="nav-link disabled" href="#">Disabled</a>
</nav>
<div class="container">
  <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>

  <button type="button" class="btn btn-primary">Primary</button>
</div>
</div>
    )
}
export default About