function StudentProfiles(){
  return (
    <div>StudentProfiles</div>
  );
}

export default StudentProfiles
// import Link from 'next/link'
// import useSWR from 'swr'

// const args = {
//     method: "GET",
//     headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json;charset=UTF-8",
//     },
// };

// const fetcher = (...args) => fetch(...args).then((res) => res.json())


// function RecommendedReviewMaterials() {

//     const url = "http://localhost:1337/api/students";

//     const { data, error } = useSWR([url, args], fetcher)

//     if (error) return <div>Failed to load</div>
//     if (!data) return <div>Loading...</div>
//     console.log(data.data)


//     // Render review materials
//     return (
//     <div>
//       {data.data.map((item) => 
//         <div key={item.id}>
//           <Link href={`/student-profiles/${item.id}`}>
//           <h4><a>{item.id}</a></h4>
//           </Link>
//         </div>
//         )}
        
//     </div>
//     );
//   }

// export default RecommendedReviewMaterials