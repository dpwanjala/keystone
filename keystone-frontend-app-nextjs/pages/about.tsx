import HeaderContentFooter from '../layouts/header-content-footer';


// pages/about.js

// This page can can be pre-rendered without
// external data: It will be pre-rendered
// into a HTML file at build time.
export default function About() {
    return (
     <HeaderContentFooter>
      <div>
      <h1>About Personaltutor</h1>
      {/* ... */}
      <p> Personaltutor leverages the latest technologies, including AI and machine learning to help tailor
          learning experiences to the needs and preferences of learners and instructors. Personaltutor currently includes:</p>
          <ul><li> A
          recommendation system that gathers, structures and analyzes student assessments to recommend the best review materials to help
          improve individual student performances</li></ul>

        <p><a href='https://drive.google.com/file/d/13pDzmGwiubOnSOr3w-_R4B-EeHoD8y0J/view?usp=sharing'>READMORE</a></p>
    </div>
     </HeaderContentFooter>
    );
}