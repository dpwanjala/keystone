import HeaderContentFooter from '../../layouts/header-content-footer';
import { Table } from 'antd';
import axios from 'axios';

// import useSWR from 'swr'

// import StrapiClient from '../../lib/StrapiClient';


// const Strap_Client = new StrapiClient()

// fetch args
// const args = {
//     // credentials: 'include',
//     method: "GET",
//     headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json;charset=UTF-8",
//     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ0NTU0NjUwLCJleHAiOjE2NDcxNDY2NTB9.aQY-O1cc_vLQtV-9KvOlspMw1oqBfBiW08YPz0eUdmQ", // Notice Bearer not JWT and no credentials include
//     },
// };

// const fetcher = (...args) => fetch(...args).then((res) => res.json())


// axios args
const args = {
  // credentials: 'include',
  //method: "get",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ0NTU0NjUwLCJleHAiOjE2NDcxNDY2NTB9.aQY-O1cc_vLQtV-9KvOlspMw1oqBfBiW08YPz0eUdmQ", // Notice Bearer not JWT and no credentials include
  },
};

// const fetcher = (...args) => fetch(...args).then((res) => res.json())



// function getRecommendedReviewMaterials(){

//   const url = "http://localhost:1337/api/recommended-review-materials?populate=*";

//   const { data, error } = useSWR([url, args], fetcher)

//   if (error) return <div>Failed to load</div>
//   if (!data) return <div>Loading...</div>

//   const recommendedDataObjArray = data.data.map((item) => ({
//     id: item.id,
//     key: item.id,
//     reviewMaterial: item.attributes.review_material.data.attributes.name,
//     recommendationScore: item.attributes.recommendationScore
//   }))

//   console.log(data.data)

// }


// function getStudentConceptAssessments(){
  
//   const url = "http://localhost:1337/api/student-concept-assessments?populate=*";

//   const { data, error } = useSWR([url, args], fetcher)

//   if (error) return <div>Failed to load</div>
//   if (!data) return <div>Loading...</div>

//   const conceptAssessmentDataObjArray = data.data.map((item) => ({
//     id: item.id,
//     key: item.id,
//     concept: item.attributes.concept.data.attributes.name,
//     assessment: item.attributes.assessment,
//     type: item.attributes.type,
//   }))

//   console.log(data.data)
// }


// In getStaticPaths(), you need to return the list of
// ids of product pages (/products/[id]) that you’d
// like to pre-render at build time. To do so,
// you can fetch all products from a database.

// export async function getStaticPaths() {
//     const products = await getProductsFromDatabase()
  
//     const paths = products.map((product) => ({
//       params: { id: product.id }
//     }))
  
//     // fallback: false means pages that don’t have the
//     // correct id will 404.
//     return { paths, fallback: false }
//   }
  
//   // params will contain the id for each generated page.
//   export async function getStaticProps({ params }) {
//     return {
//       props: {
//         product: await getProductFromDatabase(params.id)
//       }
//     }
//   }
  
//   const conceptAssessmentColumns = [
//     {
//       title: 'Concept',
//       dataIndex: 'concept',
//       key: 'concept'
//     },
//     {
//       title: 'Assessment',
//       dataIndex: 'assessment',
//       key: 'assessment'
//     },
//     {
//       title: 'Type',
//       dataIndex: 'type',
//       key: 'type'
//     }
//   ]
  
//   const recommendedMaterialColumns = [
//     {
//       title: 'Review Material',
//       dataIndex: 'reviewMaterial',
//       key: 'reviewMaterial'
//     },
//     {
//       title: 'Recommendation Score',
//       dataIndex: 'recommendationScore',
//       key: 'recommendationScore'
//     },
//   ]
  

//   const { data, error } = await Strap_Client.fetchData('/recommended-review-materials?populate=*')

//   const recommendedDataObjArray = data.data.map((item) => ({
//     id: item.id,
//     key: item.id,
//     reviewMaterial: item.attributes.review_material.data.attributes.name,
//     recommendationScore: item.attributes.recommendationScore
//   }))


export default function StudentProfile({recommendedMaterialColumns, recommendedDataObjArray}) {

  const response = axios.get('/recommended-review-materials?populate=*')

  // Render student profile
  return (<HeaderContentFooter>
            <p>Top Recommended Review Materials</p>

            <Table columns={recommendedMaterialColumns} dataSource={recommendedDataObjArray} />

            {/* <p>Student Concept Assessment</p>

            <Table columns={conceptArecommendedMaterialColumnsssessmentColumns} dataSource={recommendedDataObjArray} /> */}

            <hr></hr>
            <p>coming soon features</p>

            <p>Student Review Materials Ratings</p>

            <p>Student Preference Ratings </p>

            <p>Student Saved Review Materials</p>

          </HeaderContentFooter>
          );
}

export async function getStaticPaths() {

    // try {
    //   const response = await axios.get('/recommended-review-materials?populate=*', ...args)
    //   const paths = response.data.map((item) => ({
    //     params: { id: item.id }
    //   }))
    //   // fallback: false means pages that don’t have the
    //   // correct id will 404.
    //  return { paths, fallback: false }

    // } catch (error) {
    //   console.log(error)
    // }

    // const response = axios.get('/recommended-review-materials?populate=*')
    // const paths = response.data.map((item) => ({
    //   params: { id: item.id }
    // }))

    const paths = []
    // fallback: false means pages that don’t have the
    // correct id will 404.
   return { paths, fallback: false }

}

// // This function gets called at build time on server-side.
// // It won't be called on client-side, so you can even do
// // direct database queries.

export async function getStaticProps({ params }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time

  // getStudentConceptAssessments()
  // getRecommendedReviewMaterials()

  try {
    const response = await axios.get('/recommended-review-materials?populate=*', ...args)

    const recommendedDataObjArray = data.data.map((item) => ({
      id: item.id,
      key: item.id,
      reviewMaterial: item.attributes.review_material.data.attributes.name,
      recommendationScore: item.attributes.recommendationScore
    }))

  } catch (error) {

    console.log(error)
  }

  return {
    props: {
      recommendedDataObjArray: recommendedDataObjArray,
      conceptAssessmentDataObjArray: recommendedDataObjArray,
      conceptAssessmentColumns,
      recommendedMaterialColumns
    },
  }
}



// const Home = ({ recommended_review_materials, error }) => {
//   if (error) {
//     return <div>An error occured: {error.message}</div>;
//   }
//   return (
//     <ul>
//       {recommended_review_materials.map(recommended_review_material => (
//         <li key={recommended_review_material.id}>{recommended_review_material.attributes.name}</li>
//       ))}
//     </ul>
//   );
// };

// Home.getInitialProps = async ctx => {
//   try {
//     const res = await axios.get('http://localhost:1337/api/recommended-review-materials?populate=*');
//     const recommended_review_materials = res.data;
//     return { recommended_review_materials };
//   } catch (error) {
//     return { error };
//   }
// };

// export default Home;
