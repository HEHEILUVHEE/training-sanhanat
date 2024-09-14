import React from 'react'
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom'

const About = () => {
  const params = useParams();
  return (
    <Layout>
    <main className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-purple-500">เกี่ยวกับเว็ปไซต์ของเรา</h1>
      <hr />
      <p className="text-lg">เกี่ยวกับเว็ปไซต์ของเราr</p>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque explicabo voluptates sit ad! Eligendi iste et aliquid fugiat, atque explicabo sunt architecto accusantium libero est expedita nobis nulla, dolores porro?Lorem ipsum dolor sit amet consectetur adipisicing elit. At, iusto! Perferendis omnis adipisci similique dolor temporibus cum voluptate, cumque tempore doloribus quam sunt facere id, officia maxime a veniam quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consequatur saepe, hic expedita nobis at ad placeat quia vero similique accusamus quaerat necessitatibus. Amet, commodi. Culpa voluptatibus minima recusandae adipisci.</p>
      
    </main>
    </Layout>
    
  )
}

export default About