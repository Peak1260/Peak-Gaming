import React from 'react';
import './hardware.css';

export const Hardware = () => {
  const hardwareData = [
    {
      pricePoint: "Tier 1 - Budget Entry ~$800",
      cpu: "Intel Core i7-12700KF 3.6 GHz 12-Core",
      cpuImg: "https://ae01.alicdn.com/kf/S38328adce34c4b69b0f4b58c11207253s/Intel-Core-i7-12700KF-NEW-i7-12700KF-3-6-GHz-Twelve-Core-Twenty-Thread-CPU-10NM.jpg",
      ram: "16GB DDR5-5200",
      motherboard: "B760 Board",
      graphicsCard: "NVIDIA GeForce RTX 4060 8 GB",
      gpuImg: "https://m.media-amazon.com/images/I/712xE975t1L.jpg",
      misc: "500GB NVMe SSD, 650W PSU"
    },
    {
      pricePoint: "Tier 2 - Best Bang For Your Buck ~$1200",
      cpu: "AMD Ryzen 7 7700 3.6 GHz 8-Core",
      cpuImg: "https://m.media-amazon.com/images/I/61j2pdQJ16L.jpg",
      ram: "32GB DDR5-6400",
      motherboard: "B650 Board",
      graphicsCard: "NVIDIA GeForce RTX 4070 SUPER 12 GB",
      gpuImg: "https://m.media-amazon.com/images/I/71LmcE5KJ+L.jpg",
      misc: "1TB NVMe SSD, 750W PSU"
    },
    {
      pricePoint: "Tier 3 - I Hate Money ~$2500",
      cpu: "AMD Ryzen 9 7950X3D 4.2 GHz 16-Core",
      cpuImg: "https://images.hothardware.com/contentimages/article/3284/content/small_ryzen-7-7950x3d-top.jpg",
      ram: "64GB DDR5-6600",
      motherboard: "X760 Board",
      graphicsCard: "NVIDIA GeForce RTX 4080 SUPER 16 GB",
      gpuImg: "https://www.zotac.com/download/files/styles/org/public/product_main_image/graphics_cards/zt-d40820f-10p-image01_0.jpg?itok=fcKXauqx",
      misc: "2TB NVMe SSD, 1000W PSU"
    }
  ];

  return (
    <div className="hardware">
      <h2>Creating the Ultimate PC Experience</h2>
      {hardwareData.map((hardware, index) => (
        <div className="hardware-guide" key={index}>
          <h3>{hardware.pricePoint}</h3>
          <div className="hardware-details">
            <div className="hardware-info">
              <p><strong>CPU:</strong> {hardware.cpu}</p>
              <p><strong>RAM:</strong> {hardware.ram}</p>
              <p><strong>Motherboard:</strong> {hardware.motherboard}</p>
              <p><strong>Graphics Card:</strong> {hardware.graphicsCard}</p>
              <p><strong>Misc:</strong> {hardware.misc}</p>
            </div>
            <div className="hardware-images">
              <img src={hardware.cpuImg} alt={`${hardware.cpu}`} />
              <img src={hardware.gpuImg} alt={`${hardware.graphicsCard}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hardware;