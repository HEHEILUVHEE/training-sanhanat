import React from 'react'
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom'

const Contact = () => {
  const params = useParams();
  return (
    <Layout>
    <main className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-purple-500">ติดต่อ</h1>
      <hr />
      <p className="text-lg">NVC Training Center</p>
      <br />
      <p>Address: 90 tesa Rd,Mueang, Nakhon Phatom,73000</p>
      <br />
      <p>Tel :064-406-6923</p>
      <p>E-mail: admin@gmail.com</p>
    </main>
    </Layout>
  )
}

export default Contact