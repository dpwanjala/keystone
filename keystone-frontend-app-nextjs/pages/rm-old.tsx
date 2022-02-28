import { Table, Tag } from 'antd';
import HeaderContentFooter from '../layouts/header-content-footer';

import axios from 'axios';

// Axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL + "/api";
// Axios.defaults.withCredentials = true;


// const fetcher = async (url) => {
//   try {
//     const res = await Axios.get(url);
//     return res.data;
//   } catch (err) {
//     throw err.response.data;
//   }
// };


// const args = {
//     method: "GET",
//     headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json;charset=UTF-8",
//     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ0NTU0NjUwLCJleHAiOjE2NDcxNDY2NTB9.aQY-O1cc_vLQtV-9KvOlspMw1oqBfBiW08YPz0eUdmQ", // Notice Bearer not JWT and no credentials include
//     },
// };

// const fetcher = (...args) => fetch(...args).then((res) => res.json())

function ReviewMaterials() {
  
 // const reviewMaterialsList = [];

  const [reviewMaterialsList, setReviewMaterialsList] = useState([])

 

//   const columns = [];
//  // const dataObjArray = [];

//     const url = "http://localhost:1337/api/review-materials?populate=*";

//     // const { data, error } = useSWR([url, args], fetcher)

//     // if (error) return <div>Failed to load</div>
//     // if (!data) return <div>Loading...</div>

//     axios
//     .get(url)
//     .then((res) => {


//     //  console.log(res.data.map((item) => "hello"))
//       setReviewMaterialsList(res.data)
//     })
//     .catch(err => console.log(err))


//     console.log(reviewMaterialsList)
    // const { data } = await axios.get(url)

    //console.log(data)

    // Render review materials
    return (
      // <HeaderContentFooter>
      //       <Table columns={columns} dataSource={dataObjArray} />
      // </HeaderContentFooter>
      <p>review materials</p>

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





// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     filters: [
//       {
//         text: 'Joe',
//         value: 'Joe',
//       },
//       {
//         text: 'Jim',
//         value: 'Jim',
//       },
//       {
//         text: 'Submenu',
//         value: 'Submenu',
//         children: [
//           {
//             text: 'Green',
//             value: 'Green',
//           },
//           {
//             text: 'Black',
//             value: 'Black',
//           },
//         ],
//       },
//     ],
//     // specify the condition of filtering result
//     // here is that finding the name started with `value`
//     onFilter: (value, record) => record.name.indexOf(value) === 0,
//     sorter: (a, b) => a.name.length - b.name.length,
//     sortDirections: ['descend'],
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     defaultSortOrder: 'descend',
//     sorter: (a, b) => a.age - b.age,
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     filters: [
//       {
//         text: 'London',
//         value: 'London',
//       },
//       {
//         text: 'New York',
//         value: 'New York',
//       },
//     ],
//     onFilter: (value, record) => record.address.indexOf(value) === 0,
//   },
// ];

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//   },
//   {
//     key: '4',
//     name: 'Jim Red',
//     age: 32,
//     address: 'London No. 2 Lake Park',
//   },
// ];

// function onChange(pagination, filters, sorter, extra) {
//   console.log('params', pagination, filters, sorter, extra);
// }

// ReactDOM.render(<Table columns={columns} dataSource={data} onChange={onChange} />, mountNode);