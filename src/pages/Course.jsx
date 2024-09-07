import React from 'react'
import Layout from '../components/Layout';
import Card from '../components/Card';
const About = () => {
  const CardList = [
    { 
    image: "basic-react-native.png",
    name: "Basic React Navtive",
    description: "ระยะเวลา วัน()5",
    price: "ราคา 7500 บาท"
    },
    {
    image: "cross-platform-with-flutter.png",
    name: "Cross Platform with Flutter",
    description: "ระยะเวลา ()5",
    price: "ราค้า 6500 บาท"
    },
    {
    image: "powerbi-dashboard.png",
    name: "Power BI Dashboard",
    description: "ระยะเวลา ()4วัน.",
    price: "5500 บาท"
    },
    {
    image: "ui-design-with-figma.png",
    name: "Ui Design with Figma",
    description: "ระยะเวลา ()3วัน",
    price: "1500 บาท"
    },
    
  
    ];
  return (
    <Layout>
        <h1 className="text-2xl font-bold text-teal-700">หลักสูตรที่เปิดสอน</h1>
    
  <div className='grid grid-cols-1 space-x-5 sm:grid-cols-2 lg:grid-cols-4'>
      {
   CardList.map((b)=>(
  <Card key={b.name} {...b} />
))
}
    </div>    

    </Layout>
  )
}

export default About