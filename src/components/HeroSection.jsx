import Project from "./Project";
var React = require("react");
//import pic from "../assets/pic.jpg";
function HeroSection() {
    return (
    <>
      <div class="container-fliud" id="hero">
        <div class="row">
          <div class="details col-lg-6 mb-5" id="col1">
            <h1 id="welcome">Welcome to my app</h1>
            <h1 id="myname">Gohar Ali</h1> 
          </div>
          <div class="picture col-lg-6 mb-5" id="col2">
            <div class="container">
              <img src="../assets/edited.png" id="mypic" class="img-circle rounded-circle" width="300" height="300" alt="Picture"/>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
      <h4>Coding Progress</h4>
        <div class="row" id="prog">
          <div class="col mt-5"></div>
            <h5>HTML</h5>
            {/* <div class="progress">
              <div class="progress-bar" id="pb1" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">
                25%
              </div>
            </div> */}

            {/* <div class="progress">
  <div class="progress-bar" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div> */}

<Project />

            <br />
            <h5>CSS</h5>
            <div class="progress">
              <div class="progress-bar bg-success" id="pb2" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">
                50%
              </div>
            </div>
            <br />
            <h5>Javascript</h5>
            <div class="progress mb-5">
              <div class="progress-bar bg-warning" id="pb3" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">
                75%
              </div>
            </div>
        </div>
      </div>
      
    </>
    );
  }

export default HeroSection;