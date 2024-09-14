import React from "react";
import Layout from "../components/Layout";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Home = () => {
  const products = [
    {
      id: 1,
      title: "(LN) Special Set สืบคดีปริศนา หมอยาตำรับโคมแดง เล่ม 9",
      price: 495.00,
      imageUrl: "https://www.phoenixnext.com/img/600/744/resize/catalog/product/_/l/_ln_kusuriya_no_hitorigoto_vol9_sp_set_sku_ln0591-02p.jpg"
    },
    {
      id: 2,
      title: "คนที่เธอปิ๊งความจริงไม่ใช่ผู้ชาย",
      price: 280.25 ,
      oldPrice:295.00,
      imageUrl: "https://www.phoenixnext.com/img/600/744/resize/catalog/product/f/r/free_postcard_kini.jpg"
    },
    {
      id: 3,
      title: "โกคุราคุไก สุขาวดีสีเลือด เล่ม 3",
      price: 175.00,
      imageUrl: "https://www.phoenixnext.com/img/600/744/resize/catalog/product/m/g/mg0783-01p.jpg"
    },
    {
      id: 4,
      title: "กคุราคุไก สุขาวดีสีเลือด (ฉบับปรับปรุงใหม่) เล่ม 2",
      price: 166.25 ,
      oldPrice: 175.00,
      imageUrl: "https://www.phoenixnext.com/img/600/744/resize/catalog/product/f/r/free_postcard_gokurakugai_2_1__1.jpg"
    },
    {
      id: 5,
      title: "WIND BREAKER วินด์เบรกเกอร์ เล่ม 11",
      price: 175.00,
      imageUrl: "https://www.phoenixnext.com/img/600/744/resize/catalog/product/m/g/mg0752-01p.jpg"
    }
  ];
  const LightNovel = [
    {
      id: 1,
      title: "(LN) มุมมองนักอ่านพระเจ้า เล่ม 3",
      price: 295.00,
      imageUrl: "https://www.phoenixnext.com/img/600/744/resize/catalog/product/_/3/_3_1_1.jpg"
    },
    {
      id: 2,
      title: "(LN) 86 -เอทตี้ซิกซ์- เล่ม 5",
      price: 299.25,
      oldPrice: 350.00,
      imageUrl: "https://www.phoenixnext.com/img/600/744/resize/catalog/product/_/l/_ln_86_vol5_cover.jpg"
    },
    {
      id: 3,
      title: "(LN) คุณอาเรียโต๊ะข้างๆพูดรัสเซียหวานใส่ซะหัวใจจะวาย เล่ม 2",
      price: 295.00,
      imageUrl: "https://www.phoenixnext.com/img/600/744/resize/catalog/product/a/l/alya_anime_celebration_pre-ads_ec_anime_postcard-02.jpg"
    },
    {
      id: 4,
      title: "(LN) คุณอาเรียโต๊ะข้างๆพูดรัสเซียหวานใส่ซะหัวใจจะวาย เล่ม 4.5 ",
      price: 295.00,
      imageUrl: "https://www.phoenixnext.com/img/600/744/resize/catalog/product/a/l/alya_anime_celebration_pre-ads_ec_anime_postcard-05.jpg"
    },
    {
      id: 5,
      title: "(LN) ชีวิตไม่ต้องเด่น ขอแค่เป็นเทพในเงา เล่ม 6",
      price: 340.00,
      imageUrl: "https://www.phoenixnext.com/img/600/744/resize/catalog/product/l/n/ln0687-01.jpg"
    }
   
  ];
  const News = [
    {
      id: 1,
      title: "แผน NTR แฟนรุ่นพี่ แค้นนี้ต้องชำระ Kanojo ga Senpai ni Netorareta node ",
      price: 175,
      imageUrl: "https://www.phoenixnext.com/pub/media/wysiwyg/Blog/My-Girlfriend-Cheated-on-Me-With-a-Senior-so-Im-Cheating-on-Her-With-His-Girlfriend_1_.jpg"
    },
    {
      id: 2,
      title: "(LN) แผน NTR แฟนรุ่นพี่ แค้นนี้ต้องชำระ เล่ม 4",
      price: 310.00,
      imageUrl: "https://www.phoenixnext.com/img/600/744/resize/catalog/product/l/n/ln0688-01.jpg"
    },
    {
      id: 3,
      title: "Complete Set คุณอาเรียโต๊ะข้างๆพูดรัสเซียหวานใส่ซะหัวใจจะวาย (การ์ตูน) เล่ม 4",
      price: 1200.00,
      imageUrl: "https://www.phoenixnext.com/img/600/744/resize/catalog/product/b/x/bx0594-01.jpg"
    },
    {
      id: 4,
      title: "ไลโคริส รีคอยล์ (การ์ตูน) เล่ม 2",
      price: 175.00,
      imageUrl: "https://www.phoenixnext.com/img/600/744/resize/catalog/product/m/g/mg0839-01p.jpg"
    },
    {
      id: 5,
      title: "(LN) ชีวิตไม่ต้องเด่น ขอแค่เป็นเทพในเงา เล่ม 6",
      price: 340.00,
      imageUrl: "https://www.phoenixnext.com/img/600/744/resize/catalog/product/l/n/ln0687-01.jpg"
    }
  ];
  
  return (
    <Layout>
    <img src="https://www.beartai.com/wp-content/uploads/2021/12/2-3.png" alt="" />
    <div className="manga-list">
      <h2 className="text-center">สินค้าแนะนำ</h2>
      <div className="manga-grid">
        {products.map((product) => (
          <div key={product.id} className="manga-card">
            <img src={product.imageUrl} alt={product.title} className="product-image" />
            <div className='h-[100px]'>
            <h3>{product.title}</h3>
            {product.oldPrice && <p className="old-price">฿{product.oldPrice}</p>}
            <p className="price">฿{product.price}</p>
            </div>
            <button className="add-to-cart-button">เพิ่ม - ฿{product.price}</button>
          </div>
        ))}
      </div>
    </div>
    <div className="manga-list">
      <h2 className="text-center">นิยายยอดฮิต</h2>
      <div className="manga-grid">
        {LightNovel.map((product) => (
          <div key={product.id} className="manga-card">
            <img src={product.imageUrl} alt={product.title} className="product-image" />
            <div className='h-[100px]'>
            <h3>{product.title}</h3>
            {product.oldPrice && <p className="old-price">฿{product.oldPrice}</p>}
            <p className="price">฿{product.price}</p>
            </div>
            <button className="add-to-cart-button">เพิ่ม - ฿{product.price}</button>
          </div>
        ))}
      </div>
    </div>
    <div className="manga-list">
      <h2 className="text-center">หนังสือใหม่ๆๆๆๆ</h2>
      <div className="manga-grid">
        {News.map((product) => (
          <div key={product.id} className="manga-card">
            <img src={product.imageUrl} alt={product.title} className="product-image" />
            <div className='h-[100px]'>
            <h3>{product.title}</h3>
            {product.oldPrice && <p className="old-price">฿{product.oldPrice}</p>}
            <p className="price">฿{product.price}</p>
            </div>
            <button className="add-to-cart-button">เพิ่ม - ฿{product.price}</button>
          </div>
        ))}
      </div>
    </div>
    </Layout>

  );
};

export default Home;
