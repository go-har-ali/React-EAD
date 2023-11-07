import React from 'react';

const Project = () => {
  const styleObject = {
    backgroundColor: "white",
    color: 'blue',
    fontSize: '16px',
  };

  return (
    <div style={styleObject}>
      <h5>HTML</h5>
      <div class="progress">
        <div class="progress-bar" id='pb1' role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <br />
        <h5>CSS</h5>
      <div class="progress">
        <div class="progress-bar" id='pb2' role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <br />
        <h5>Javascript</h5>
      <div class="progress">
        <div class="progress-bar" id='pb3' role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>

      <br />
        <h5>React JS</h5>
      <div class="progress">
        <div class="progress-bar" id='pb4' role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>

      <br />
        <h5>Next JS</h5>
      <div class="progress mb-5">
        <div class="progress-bar" id='pb5' role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>

      {/* style={styleObject} */}

    </div>
  );
};

export default Project;
