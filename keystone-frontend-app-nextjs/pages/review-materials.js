import { Table, Tag } from 'antd';
import HeaderContentFooter from '../layouts/header-content-footer';
import Link from 'next/link'
import useSWR from 'swr'

const args = {
    method: "GET",
    headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ2MDUyODA4LCJleHAiOjE2NDg2NDQ4MDh9.u69OfcYWMP1Eam78S-_nVjmQUhc6RdMebKjqxSXvErk", // Notice Bearer not JWT and no credentials include
    },
};

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function ReviewMaterials() {

    const url = "http://personaltutor.ca:1337/api/review-materials?populate=*";

    const { data, error } = useSWR([url, args], fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    const dataObjArray = data.data.map((item) => ({
      id: item.id,
      key: item.id,
      name: item.attributes.name,
      description: item.attributes.description,
      url: item.attributes.url,
      concepts: item.attributes.concepts.data.map((item) => item.attributes.name),
    }))

    console.log(dataObjArray)

    // Render review materials
    return (
      <HeaderContentFooter>
            <Table columns={columns} dataSource={dataObjArray} />
      </HeaderContentFooter>

    );
  }

  const columns = [
    {
      title: 'Concepts',
      dataIndex: 'concepts',
      key: 'concepts',
      render: concepts => (
        <>
          {concepts.map(concept => {
            let color = concept.length > 5 ? 'geekblue' : 'green';
            if (concept === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={concept}>
                {concept.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
      // filters: concepts.map(concept => ({
      //     text: concept,
      //     value: concept
      //   }))
    },

    {
      title: 'Review Material',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => <a href={record.url}>{text}</a>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    }
  ]
  

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