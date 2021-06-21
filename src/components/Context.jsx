import React, { Component } from 'react';

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "IPHONE 12",
                "src": "https://www.gizmochina.com/wp-content/uploads/2020/11/iphone-12.png",
                "description": "IPHONE 12   Black -Gray ",
                "content": "Brand	Apple Model	iPhone 12,    Price in India ₹70,900 , Release date	13th October 2020 , Launched in India	Yes  , Form factor	Touchscreen ,  Dimensions (mm)	146.70 x 71.50 x 7.40.   Weight (g)	164.00 ,   Removable battery	No  , Fast charging	Proprietary ,  Wireless charging	Yes   ,  Screen size (inches)	6.10  ,  Resolution	1170x2532 pixels",
                "price": 80000,
                
            },
            {
                "_id": "2",
                "title": "Nike Blazer Mid '77 Vintage",
                "src": "https://i.pinimg.com/originals/fb/50/00/fb500082510c87f1a37097605b0b1929.jpg",
                "description": "Size 9  , Color - White , TYPE - Casual Shoes",
                "content": " In the '70s, Nike was the new shoe on the block. So new in fact, we were still breaking into the basketball scene and testing prototypes on the feet of our local team. Of course, the design improved over the years, but the name stuck. The Nike Blazer Mid '77 Vintage—classic from the beginning.",
                "price": 1799,
                
            },
            {
                "_id": "3",
                "title": "CEAT BAT",
                "src": "https://www.khelmart.com/Cricket/zoomer_Image/CEAT_CB_0003_A_large.jpg",
                "description": "CEAT Pro R 10 Short Handle Kashmir Willow Cricket Bat",
                "content": "Avail No Cost EMI on select cards for orders above ₹3000 Details Cashback: 5% back with Amazon Pay ICICI Bank credit card for Prime members. 3% back for others. Get ₹300 back on card approval. DetailsCashback: 5% back with Amazon Pay ICICI Bank credit card for Prime members. 3% back for others. Get ₹300 back ",
                "price": 2500,
               
            },
            {
                "_id": "4",
                "title": "Louis Philippe Suite",
                "src": "https://image.made-in-china.com/202f0j00IoLGUEWzJZbF/Wholesale-Men-s-Custom-Made-Suit-Men-s-Wedding-3-Piece-Suit.jpg",
                "description": "Men Navy Blue Solid Slim-Fit Formal Three-Piece Suit",
                "content": "100% Original Products Pay on delivery might be available  Easy 7 days returns and exchanges  Try & Buy might be available  BEST OFFERS   This product is already at its best price   EMI option available   EMI starting from Rs.540/month",
                "price": 27000,
               
            },
            {
                "_id": "5",
                "title": "Ghagra",
                "src": "https://i.pinimg.com/736x/57/ac/1f/57ac1fc9c0f9feb9eae165141b3d4522.jpg",
                "description": "Traditional Red Lehenga",
                "content": "Color: Pink ,  Fabric: Velvet  , Embroidery: Embroidery Work  ,Garment Type: Lehenga , Shop By Look: Classics ,The Product Price is inclusive of: Semistitched lehenga, Unstitched blouse piece and Dupatta.",
                "price": 13000,
                
            },
            {
                "_id": "6",
                "title": "HP Laptop",
                "src": "https://www.techadvisor.com/cmsdata/reviews/3795969/hp_envy_13_2020_review_10_thumb1200_4-3.jpg",
                "description": "HP 14s Laptop (11th Gen Intel Core i3-1115G4/8GB/256GB ",
                "content": "HP 14s-DQ2101TU Laptop (11th Gen Intel Core i3-1115G4/8GB/256GB PCIe-SSD/Intel UHD Graphics/Windows 10/MSO/HD), 35.6 cm (14 inch)",
                "price": 55999,
                
            },

            
            {
                "_id": "7",
                "title": "TROLLEY BAG SUITCASE",
                "src": "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,w_800,c_scale/v1/NA/Style/ECOMM/U7452940-BLS-ALT1",
                "description": "DAPPER WHEELS-LEATHER TROLLEY BAG",
                "content": "Handcrafted in Genuine Leather , 4 wheel cabin size luggage ,Polyster lining for easy cleaning ,Smooth and Sturdy long adjustable handles ,Front side leather pocket ,Dimension : 20 x 14.5 x 8 ,Adjustable Long Handle: Maximum length 21.5",
                "price": 3999,
                
            },

            {
                "_id": "8",
                "title": "Casual Shirt",
                "src": "https://webmerx.sgp1.cdn.digitaloceanspaces.com/khankudi/product_images/1618464480.AP005A.jpg",
                "description": "Regular Fit Printed Casual Shirt",
                "content": "Blue printed casual shirt, has a button-down collar, button placket, long sleeves, and curved hem , Size & Fit ,Regular Fit ,The model (height 6') is wearing a size 40",
                "price": 1299,
                
            },


            {
                "_id": "9",
                "title": "Louis Philippe  Belt and Wallet",
                "src": "https://4.imimg.com/data4/WX/SD/ANDROID-47041725/product-500x500.jpeg",
                "description": "Feel confident with belt and wallet combo  Louis Philippe",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 999,
               
            }
        ],
      
        
    };

  
   

    render() {
        const {products} = this.state;
        
        return (
            <DataContext.Provider 
            value={{products}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}