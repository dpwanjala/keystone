//import { getAllReviewMaterials } from '../lib/reviewMaterials'
import Link from 'next/link'
import useSWR from 'swr'

const args = {
    method: "GET",
    mode: 'cors',
    headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
    "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ0NTU0NjUwLCJleHAiOjE2NDcxNDY2NTB9.aQY-O1cc_vLQtV-9KvOlspMw1oqBfBiW08YPz0eUdmQ",
    },
};

const fetcher = (...args) => fetch(...args).then((res) => res.json())


function ReviewMaterials() {

    const url = "http://localhost:1337/api/review-materials";

    const { data, error } = useSWR([url, args], fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    // Render review materials
    return (
    <div>
      {data.map((item) => 
        <div key={item.id}>
            <h1><Link href={`${item.id}`}><a>{item.name}</a></Link></h1>
            <p>{item.description}</p>
        </div>
        )}
    </div>
    );
  }

// export async function getStaticProps() {

//     console.log("hello world")

//     const url = "http://localhost:1337/api/review-materials";
  
//     const options = {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json;charset=UTF-8",
//       },
//     };

//        // Fetch data from external API
//        const res = await fetch(url, options)

//        const data = await res.json()

//   //const reviewMaterials = getAllReviewMaterials()

//   return {
//     props: {
//       data
//     }
//   }
// }

export default ReviewMaterials

// // pages/index.js
// function Homepage({ newestContent, popularContent }) {
//   // Both props are arrays of objects, with post metadata.
//   // I can map through them, and render a React component
//   // for each one.
// }

// export async function getStaticProps() {
//   // This code runs at compile-time!
//   // The stuff I return will be passed as props to
//   // my Homepage component.
//   const newestContent = await getLatestContent({ limit: 20 });
//   const popularContent = await getPopularContent({ limit: 10 });
//   return {
//     props: { newestContent, popularContent },
//   };
// }