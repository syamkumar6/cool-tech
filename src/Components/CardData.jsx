import image1 from "./../assets/images/glass.jpg";
import image2 from "./../assets/images/aluPartition2.jpg";
import image3 from "./../assets/images/kitchen.jpg";
import image4 from "./../assets/images/showcase.jpeg";
import image5 from "./../assets/images/window.jpg";
import image6 from "./../assets/images/acp.jpg";
import acpBg from "./../assets/images/acpBg.png"
import glassBg from "./../assets/images/glassBg.png"
import partitionBg from "./../assets/images/partitionBg.png"
import netBg from "./../assets/images/netBg.png"
import pleatedBg from "./../assets/images/pleatedBg.png"
import showcaseBg from "./../assets/images/showcaseBg.png"
import kitchenBg from "./../assets/images/kitchenBg.png"
import windowBg from "./../assets/images/windowBg.png"
import acp2 from "./../assets/images/acp2.jpg";
import acp3 from "./../assets/images/acp3.jpg";
import acp4 from "./../assets/images/acp4.jpg";
import gImg1 from "./../assets/images/kitchen1.jpg";
import window2 from "./../assets/images/window2.png"
import partition2 from "./../assets/images/partition2.jpg"
import glass3 from "./../assets/images/glass3.jpg"
import net from "./../assets/images/netWindow.png"
import pleated from "./../assets/images/pleated1.jpg"
import ward2 from "./../assets/images/ward2.jpg"
import wpc from "./../assets/images/wpc.jpg"
import tv from "./../assets/images/tv.jpg"
import gImg2 from "./../assets/images/kitchen2.jpg";
import gImg3 from "./../assets/images/kitchen3.jpg";
import door2 from "./../assets/images/door2.png"
import partition3 from "./../assets/images/partition3.jpg"
import partition4 from "./../assets/images/partition4.jpg"
import glass4 from "./../assets/images/glass4.jpg"
import glass5 from "./../assets/images/glass6.png"
import net2 from "./../assets/images/netWindow2.jpg"
import net3 from "./../assets/images/netWindow3.jpg"
import pleated2 from "./../assets/images/Pleated2.jpg"
import pleated3 from "./../assets/images/pleated3.jpg"
import ward from "./../assets/images/ward.jpg"
import ward3 from "./../assets/images/ward3.png"
import ward4 from "./../assets/images/ward4.jpg"
import ward5 from "./../assets/images/ward5.jpg"
import wpc2 from "./../assets/images/wpc2.png"
import wpc3 from "./../assets/images/wpc3.png"
import wpc4 from "./../assets/images/wpc4.jpg"
import wpc5 from "./../assets/images/wpc5.png"
import tv2 from "./../assets/images/tv2.jpg"
import tv3 from "./../assets/images/tv3.jpg"
import tv4 from "./../assets/images/tv4.jpg"

const cardData = [
    {
      img: image1,
      bg: glassBg,
      title: "Glass Partition",
      description: [
        "Our glass partitions, built with SS304 channels and premium fittings, are designed to add elegance and functionality to your spaces. Known for their durability and modern aesthetic, these partitions provide a seamless and stylish solution for both residential and commercial interiors. The use of Taffon glass ensures clarity, strength, and resistance to everyday wear, making them a reliable choice for long-lasting performance.",
        "We offer a range of door types to suit your specific requirements, including sliding, swing, and fixed designs. Sliding doors maximize space efficiency, while swing doors provide a classic touch. Combined with SS304 fittings, these doors ensure smooth operation and a sleek finish. Whether it's for offices, living areas, or retail spaces, our glass partitions with versatile door options cater to all functional and aesthetic needs."
      ],
      id: 1,
      gImg: [image1, glass5, glass3, glass4],
      bNote: ["Durability", "Clarity and Strength", "Space Optimization", "Modern Aesthetic", "Versatility"],
    },
    {
      img: image3,
      bg: kitchenBg,
      gImg: [image3, gImg1, gImg2, gImg3],
      title: "Kitchen Cabinet",
      description: [
        "Our aluminium kitchen cabinets are designed to combine durability with modern aesthetics, making them a perfect choice for contemporary homes. Constructed using high-quality aluminium channels, these cabinets are rust-resistant, sturdy, and built to last. The sleek finish of aluminium enhances the overall look of your kitchen while ensuring long-term durability and low maintenance.",
        "We use only top-grade materials, including Sunmica Hylam sheets, to provide an impeccable finish and ensure resistance to moisture, heat, and daily wear. The high-quality fittings and hardware enhance functionality and durability, offering a seamless and elegant addition to your kitchen."
      ]
      ,
      id: 3,
      bNote: ["Termite Resistance", "Low Maintenance", "Moisture & Heat Resistance", "Durability", "Modern Aesthetic"],
    },
    {
      img: net,
      gImg: [net, net2, net3],
      bg: netBg,
      title: "Mosquito Net Windows And Doors",
      description: [
        "Our mosquito net windows and doors are designed to provide a seamless solution for keeping insects out while ensuring proper ventilation and maintaining aesthetic appeal. Crafted with durable SS304 nets, they offer exceptional strength, corrosion resistance, and long-lasting performance. Combined with high-quality Alfence 1\" aluminium channels for windows, our products deliver a sleek and sturdy finish suitable for any home or commercial space.",
        "Our mosquito net systems are tailored to blend functionality with style. The SS304 nets provide unobstructed views and excellent airflow, while the Alfence aluminium channels ensure a robust frame that enhances the overall look of your windows and doors. Available in various sizes and configurations, these systems are easy to install, operate, and maintain."
      ],
      id: 12,
      bNote: ["Effective Protection", "Durability", "Corrosion Resistance", "Aesthetic Appeal", "Low Maintenance"],
    },
    {
      img: pleated2,
      gImg: [pleated2, pleated, pleated3],
      bg: pleatedBg,
      title: "Pleated Mesh For Windows And Doors",
      description: [
        "Pleated mesh systems are a modern and efficient solution for enhancing your windows and doors. These systems combine functionality with style, offering superior protection against insects while maintaining excellent ventilation and visibility. The pleated design ensures smooth operation and adds a sleek, contemporary touch to any space.",
        "Our pleated mesh systems are crafted from high-quality materials, making them durable and long-lasting. The foldable mesh design allows for seamless opening and closing, making them easy to operate and maintain. Ideal for windows and doors of various sizes, these systems provide flexibility and a compact solution for spaces with limited room."
      ],
      id: 13,
      bNote: ["Space-Saving Design", "Enhanced Ventilation", "Aesthetic Appeal", "Easy Maintenance", "Durability"],
    },
    {
        img: ward3,
        gImg: [ward3, ward, ward2, ward4, ward5],
        bg: pleatedBg,
        title: "Wardrobe",
        description: [
          "We specialize in crafting wardrobes that combine functionality with superior aesthetics, using only the highest quality materials. Our designs are built with robust aluminium channels that ensure structural strength, lightweight functionality, and resistance to wear and tear. The use of premium-grade Sunmica sheets adds a sleek and elegant finish, available in a wide range of colors, patterns, and textures to complement any interior style. With precision-engineered hardware, including durable hinges, smooth sliding mechanisms, and soft-close fittings, our wardrobes are designed for effortless operation and lasting performance.",
          "Every wardrobe is customized to meet your unique needs, whether it’s maximizing storage in compact spaces or creating an expansive solution for larger rooms. The use of high-quality materials not only enhances the visual appeal but also ensures resistance to moisture, termites, and daily wear. From adjustable shelves and pull-out drawers to thoughtfully designed compartments, our wardrobes offer an optimal blend of practicality and style, making them a perfect addition to your home."
        ],
        id: 14,
        bNote: ["Space-Saving Design", "Termite Resistance", "Modern Appeal", "Low Maintenance", "Durability"],
      },
      {
        img: wpc2,
        gImg: [wpc, wpc2, wpc3, wpc4, wpc5],
        bg: pleatedBg,
        title: "Wall Paneling (WPC)",
        description: [
          "WPC (Wood Plastic Composite) wall paneling is a modern and versatile solution for enhancing the aesthetics and functionality of your interiors and exteriors. Known for its durability and eco-friendly composition, WPC combines the natural elegance of wood with the strength of polymers, resulting in a highly resilient and low-maintenance material. Its wide range of designs, textures, and colors allows you to create stunning walls that complement any decor style, from contemporary minimalism to classic elegance.",
          "Our WPC wall paneling is designed to resist moisture, termites, and weathering, making it an excellent choice for both indoor and outdoor applications. Whether you’re looking to elevate the ambiance of living rooms, offices, or commercial spaces or add a sophisticated touch to exteriors, WPC panels offer unmatched durability and visual appeal. Easy to install and maintain, these panels are a long-lasting solution for walls that require minimal upkeep while providing a rich, stylish finish."
        ],
        id: 15,
        bNote: ["Durability", "Termite Resistance", "Eco-Friendly", "Low Maintenance", "Versatility in Design"],
      },
      {
        img: tv3,
        gImg: [tv, tv3, tv2, tv4],
        bg: pleatedBg,
        title: "TV Units",
        description: [
          "Our TV units are designed to blend functionality with style, offering a seamless solution to organize your entertainment setup while elevating the aesthetics of your space. Crafted with premium materials like high-quality aluminium channels and precision-engineered hardware, these units ensure long-lasting performance and a sleek, modern look. Whether you prefer a minimalist floating design, a spacious wall-mounted unit, or a traditional floor-standing style, we create custom TV units tailored to suit your needs and interior decor.",
          "Our designs include ample storage options such as cabinets, open shelves, and concealed compartments to accommodate all your electronics, accessories, and decor items. With cable management features and robust construction, our TV units provide a clutter-free and visually appealing centerpiece for your living room or entertainment area. Available in a variety of finishes, colors, and configurations, our TV units offer the perfect blend of utility, style, and durability for modern homes."
        ],
        id: 16,
        bNote: ["Durability", "Termite Resistance", "Modern Appeal", "Low Maintenance", "Versatility in Design"],
      },
    {
      img: image2,
      bg: partitionBg,
      title: "Partition",
      description: [
        "Our aluminium partitions are designed to bring a perfect balance of functionality and style to your spaces. Made using high-quality aluminium channels, they are strong, rust-resistant, and built to last. These partitions provide a modern aesthetic while ensuring durability and low maintenance, making them ideal for both residential and commercial environments.",
        "We use only the finest materials, including durable panels and premium-grade fittings, to ensure a seamless finish and reliable performance. Our aluminium partitions are resistant to moisture, termites, and corrosion, offering long-lasting durability. Whether you need partitions for offices, homes, or retail spaces, our aluminium partitions deliver unmatched quality with a sleek and professional appearance"
      ],
      gImg: [image2, partition2, partition3, partition4],
      id: 2,
      bNote: ["Customizable & Versatile", "Low Maintenance", "Durability", "Modern Aesthetic", "Termite Resistance"],
    },
    {
      img: image4,
      bg: showcaseBg,
      title: "Showcase",
      description: [
        "We offer a wide variety of designs to suit diverse preferences and applications. Choose from glass doors for a modern, transparent look that highlights your displayed items, or Hylam doors and partitions for a more sophisticated and sturdy appeal. Our glass partitions add a touch of elegance, making them suitable for homes, offices, and retail spaces.",
        "Our showcases are designed to elevate the aesthetics of your space while offering practical functionality. With options like glass doors, glass partitions, or Hylam doors and partitions, these showcases combine durability with elegance. Crafted with high-quality materials, they provide a sleek finish and robust performance, ensuring they stand the test of time."
      ],
      id: 4,
      bNote: ["Customizable Options", "Modern Appeal", "Durability", "Versatility", "Wide Variety of Designs"],
    },
    {
      img: image5,
      bg: windowBg,
      title: "Doors & Windows",
      description: [
        "Our aluminium doors and windows are designed to combine durability, functionality, and modern aesthetics. Manufactured using premium-grade aluminium channels and fittings, they offer exceptional strength and resistance to corrosion, ensuring long-lasting performance. With a sleek finish, they are a perfect addition to both residential and commercial spaces, enhancing the overall appeal of your property.",
        "We provide a variety of designs, including sliding, casement, and fixed styles, to meet your specific requirements. Aluminium doors and windows are lightweight yet robust, making them easy to operate while maintaining structural integrity. Their excellent thermal insulation and soundproofing properties add comfort and efficiency to your spaces."
      ],
      gImg: [image5,door2, window2],
      id: 5,
      bNote: ["Low Maintenance", "Modern Aesthetics", "Customizable Options", "Lightweight", "Termite Resistance"],
    },
    {
      img: image6,
      bg: acpBg,
      title: "Composite Panel System",
      description: [
        "Our Composite Panel Systems (ACP) are the perfect solution for industrial and commercial applications, offering durability, versatility, and a sleek finish. Whether for interiors or exteriors, our ACP work is crafted with precision to meet the highest quality standards. These panels provide exceptional strength and weather resistance, making them ideal for modern architectural needs.",
        "We offer a wide range of composite panels in various finishes, colors, and textures to suit diverse design preferences. From metallic and wooden textures to solid colors and high-gloss finishes, our ACPs enhance the aesthetic appeal of your space. Whether it's cladding for building exteriors, partitions, ceilings, or interior wall panels, we cater to all your industrial and commercial requirements."
      ],
      gImg: [acp4,image6, acp2, acp3],
      id: 6,
      bNote: ["Weather Resistance", "Lightweight and Durable", "Low Maintenance", "Versatility", "Customizable Designs"],
    },
  ];












export default cardData;
