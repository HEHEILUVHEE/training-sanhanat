import React, { useState } from 'react';
import Layout from '../components/Layout';

const News = () => {
  // ข้อมูลสินค้า
  const products = [
    {
      id: 1,
      title: "One Piece วันพีซ เล่ม 100",
      price: 175,
      imageUrl: "https://storage.naiin.com/system/application/bookstore/resource/product/202110/534954/6000052700_front_XXL.jpg"
    },
    {
      id: 2,
      title: "โกคุราคุไก สุขาวดีสีเลือด Gokurakugai",
      price: 175,
      imageUrl: "https://www.phoenixnext.com/pub/media/wysiwyg/Blog2/MG0584-01.jpg"
    },
    {
      id: 3,
      title: "เกิดใหม่ในต่างโลก ลูกสาวยากูซ่าขอสร้างแก๊งสุดเก๋าอาละวาดในต่างโลก เล่ม 01",
      price: 166.25,
      oldPrice: 175,
      imageUrl: "https://du.lnwfile.com/_webp_max_images/600/600/hd/rv/8q.webp"
    },
    {
      id: 4,
      title: "ราชาวีรชน เกิดใหม่เพื่อขัดเกลาวิถีต่อสู้ และ กลายเป็นอัศวินฝึกหัดที่แกร่งสุดในโลก 1",
      price: 190,
      imageUrl: "https://dw.lnwfile.com/_/dw/_raw/1b/fd/mk.jpg"
    },
    {
      id: 5,
      title: "เกิดใหม่เป็นลูกโอชิ",
      price: 550,
      imageUrl: "https://jumpg-assets.tokyo-cdn.com/secure/title/300006/title_thumbnail_portrait_list/311608.jpg?hash=Bl2ThzruMYX6k3VC7bgWfg&expires=2145884400"
    }
  ];

  // สถานะของตะกร้าสินค้า
  const [cart, setCart] = useState([]);

  // ฟังก์ชันเพิ่มสินค้าลงในตะกร้า
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // ฟังก์ชันสำหรับการสั่งซื้อ
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("ไม่มีสินค้าในตะกร้า");
      return;
    }

    // แสดงข้อความสั่งซื้อสำเร็จ
    alert("สั่งซื้อสำเร็จ!");

    // ล้างตะกร้าหลังจากการสั่งซื้อ
    setCart([]);
  };

  return (
    <Layout>
      <div className="manga-list">
        <h2>มังงะใหม่</h2>
        <div className="manga-grid">
          {products.map((product) => (
            <div key={product.id} className="manga-card">
             
              <img src={product.imageUrl} alt={product.title} className="product-image" />
              <div className='h-[150px]'>
              <h3>{product.title}</h3>
              {product.oldPrice && <p className="old-price">฿{product.oldPrice}</p>}
              <p className="price">฿{product.price}</p></div>
              <button className="add-to-cart-button" onClick={() => addToCart(product)}>
                เพิ่ม - ฿{product.price}
              </button>
            </div>
          ))}
        </div>

        {/* แสดงตะกร้าสินค้า */}
       
      </div>
    </Layout>
  );
};

export default News;
