import useSWR from 'swr'

const args = {
    method: "GET",
    headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
    },
};

const fetcher = (...args) => fetch(...args).then((res) => res.json())


function RecommendedReviewMaterials() {

    const url = "http://localhost:1337/api/recommended-review-materials?populate=*";

    const { data, error } = useSWR([url, args], fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    console.log(data.data)


    // Render review materials
    return (
    <div>
      {data.data.map((item) => 
        <div key={item.id}>
            <h4><a href={`${item.attributes.url}`}>{item.attributes.student.data.id}</a></h4>
            <a href={`${item.attributes.review_material.data.attributes.url}`}>{item.attributes.review_material.data.attributes.name}</a>
            <p>{item.attributes.recommendationScore}</p>
        </div>
        )}
        
    </div>
    );
  }

export default RecommendedReviewMaterials