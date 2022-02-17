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
      <p> Personaltutor gathers, structures and analyzes student data from local communities to personalize learning experiences.
          our platforms provides, personalized recommendations of review and practice materials that takes into
          consideration individual student needs. we leverage the latest technologies, including artificial intelligence and machine learning to personalize learning to the needs and preferences of the learners and instructors</p>
        <p>READMORE IN THIS KEYSTONE</p>
    </div>
     </HeaderContentFooter>
    );
}