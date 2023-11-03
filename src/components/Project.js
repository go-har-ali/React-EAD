import React from 'react';

const Project = () => {
  const styleObject = {
    backgroundColor: "white",
    color: 'blue',
    fontSize: '16px',
  };

  return (
    <div style={styleObject}>
      
      <div class="progress">
        <div class="progress-bar" id='pb1' role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>

      {/* style={styleObject} */}

    </div>
  );
};

export default Project;
