import React from 'react'
import Layout from '../components/Layout';

const LightNovel = () => {
  // ข้อมูลสินค้า (อาจจะได้จาก API จริง)
  const products = [
    {
      id: 1,
      title: "ล่ามรักอาจารย์หมอ",
      price: 175,
      imageUrl: "https://cdn-th.tunwalai.net/files/story/731818/638196826252405170-story.jpg"
    },
    {
      id: 2,
      title: "ไอ้นิยายโศกนาฏกรรมน่ารำคาญพรรคนี้นะ ข้าจะเปลี่ยนมันให้กลายเป็นนิยายรักสุดแฮปปี้เอง]",
      price: 175,
      imageUrl: "https://storage.naiin.com/system/application/bookstore/resource/product/202201/539210/1000245766_front_XXL.jpg?imgname=%E0%B9%84%E0%B8%AD%E0%B9%89%E0%B8%99%E0%B8%B4%E0%B8%A2%E0%B8%B2%E0%B8%A2%E0%B9%82%E0%B8%A8%E0%B8%81%E0%B8%99%E0%B8%B2%E0%B8%8F%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%A3%E0%B8%B3%E0%B8%84%E0%B8%B2%E0%B8%8D%E0%B8%9E%E0%B8%A3%E0%B8%A3%E0%B8%84%E0%B8%99%E0%B8%B5%E0%B9%89%E0%B8%99%E0%B8%B0-%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%88%E0%B8%B0%E0%B9%80%E0%B8%9B%E0%B8%A5%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%99%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%99%E0%B8%B4%E0%B8%A2%E0%B8%B2%E0%B8%A2%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B9%81%E0%B8%AE%E0%B8%9B%E0%B8%9B%E0%B8%B5%E0%B9%89%E0%B9%80%E0%B8%AD%E0%B8%87!"
    },
    {
      id: 3,
      title: "ดอยหนาวมีดาวเหนือ",
      price: 166.25,
      imageUrl: "https://cdn-th.tunwalai.net/files/story/771117/638447717044130538-story.jpg"
    },
    {
      id: 4,
      title: "เส้นทางเศรษฐีว่าที่เชพเหรียญทอง",
      price: 210,
      imageUrl: "https://novel-lk.com/wp-content/uploads/2024/08/%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%A8%E0%B8%A3%E0%B8%A9%E0%B8%90%E0%B8%B5%E0%B8%82%E0%B8%AD%E0%B8%87_%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88_%E0%B9%80%E0%B8%8A%E0%B8%9F%E0%B9%80%E0%B8%AB%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%8D%E0%B8%97%E0%B8%AD%E0%B8%87.webp"
    },
    {
      id: 5,
      title: "Dangerous Queen #คนโปรดของควีน",
      price: 550,
      imageUrl: "https://ff.lnwfile.com/_/ff/_raw/tr/qx/a8.jpg"
    }
  ];

  return (
    <Layout>
    <div className="manga-list">
      <h2>นิยาย</h2>
      <div className="manga-grid">
        {products.map((product) => (
          <div key={product.id} className="manga-card">
            <img src={product.imageUrl} alt={product.title} className="product-image" />
            <div className='h-[150px]'>
            <h3>{product.title}</h3>
            {product.oldPrice && <p className="old-price">฿{product.oldPrice}</p>}
            <p className="price">฿{product.price}</p></div>
            <button className="add-to-cart-button">เพิ่ม - ฿{product.price}</button>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default LightNovel