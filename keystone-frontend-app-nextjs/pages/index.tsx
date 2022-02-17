import Link from 'next/link'
import HeaderContentFooter from '../layouts/header-content-footer';

// import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Index() {
  return (
    <HeaderContentFooter>
      <div className="grid grid-cols-12">
      <div className="col-span-9">
        <h1 className="text-3xl">Hi, Welcome to Personaltutor</h1>
      </div>

      <div>
        <h2>Recommender system</h2>
      </div>
      <div>
      <Link href="/review-materials">
       <a>View all review materials by concepts</a>
      </Link>
      </div>

      <div>
      <Link href={`/student-profiles/1`}>
      <a>Get tailored review material recommendations for concepts you need to cover</a>
      </Link>
      </div>
   </div>
    </HeaderContentFooter>

  );
}