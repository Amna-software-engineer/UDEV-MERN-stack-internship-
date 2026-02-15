import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Container } from 'react-bootstrap';
import MainContent from './components/MainContent';
import './App.css';
function App() {
  const [activeCat, setActiveCat] = useState("Crops");
  const categories = [
    {
      title: "Crops",
      items: [
        {
          name: "Wheat (Gandum)",
          season: "Winter",
          description: "Wheat is the backbone of agriculture. It requires cool temperatures during growth and bright sunshine during harvest. Well-drained loamy soil is best."
        },
        {
          name: "Rice (Chawal)",
          season: "Summer",
          description: "Rice cultivation needs plenty of water and standing water in fields. It thrives in hot and humid climates with fertile clayey soil."
        },
        {
          name: "Cotton (Kapaas)",
          season: "Summer",
          description: "Known as 'Silver Fiber', cotton needs high temperatures and 180 to 210 frost-free days. Alluvial soil is ideal for its growth."
        },
        {
          name: "Maize (Makai)",
          season: "Spring/Autumn",
          description: "Maize is a versatile crop used for food and fodder. It requires moderate rainfall and nitrogen-rich soil for a healthy yield."
        }
      ]
    },
    {
      title: "Farming Tips",
      items: [
        {
          name: "Modern Irrigation",
          season: "Dry Periods",
          description: "Drip irrigation saves up to 50% water by delivering it directly to the roots. It reduces weed growth and improves crop quality."
        },
        {
          name: "Organic Fertilizer",
          season: "Pre-Sowing",
          description: "Using natural compost and manure improves soil texture and long-term fertility without damaging the environment."
        },
        {
          name: "Crop Rotation",
          season: "Yearly",
          description: "Planting different crops in sequence prevents soil nutrient depletion and breaks the life cycle of pests and diseases."
        },
        {
          name: "Soil Testing",
          season: "Post-Harvest",
          description: "Regular soil testing helps identify nutrient deficiencies, allowing farmers to apply exactly what the land needs, saving money."
        }
      ]
    },
    {
      title: "Market Prices",
      items: [
        {
          name: "Grain Market Info",
          season: "Weekly Update",
          description: "Stay informed about the latest mandi rates. Selling at the right time ensures maximum profit for your hard work."
        },
        {
          name: "Cotton Rates",
          season: "Daily",
          description: "Monitor daily fluctuations in cotton prices based on international demand and local ginning factory requirements."
        },
        {
          name: "Vegetable Mandi",
          season: "Morning",
          description: "Fresh produce prices vary daily. Check the morning auction rates to get the best value for your perishable goods."
        },
        {
          name: "Fertilizer Subsidy",
          season: "Seasonal",
          description: "Keep an eye on government-announced subsidies for DAP and Urea to reduce your input costs significantly."
        }
      ]
    },
    {
      title: "Modern Equipment",
      items: [
        {
          name: "Modern Tractor",
          season: "Land Prep",
          description: "Modern tractors come with GPS and fuel-efficient engines, making plowing and tilling faster and cheaper."
        },
        {
          name: "Combine Harvester",
          season: "Harvesting",
          description: "A machine that performs cutting, threshing, and cleaning the grain in one go, saving massive manual labor."
        },
        {
          name: "Agricultural Drones",
          season: "Spraying",
          description: "Drones can spray pesticides over large areas in minutes with precision, protecting the farmer's health and saving chemicals."
        },
        {
          name: "Laser Land Leveler",
          season: "Pre-Sowing",
          description: "Ensures the field is perfectly flat, which leads to uniform water distribution and better seed germination across the field."
        }
      ]
    }
  ];

  return (
    <div className='bg-light min-vh-100 d-flex flex-column gap-4'>
      <Header
        title="GREEN FIELDS"
        tagline="Kisan Ki Taraqqi, Mulk Ki Khushali"
      />
      <Container className='d-flex align-items-start flex-column flex-md-row gap-4 min-vh-100'>
        {/* side barr */}
        <div className="col-md-3 col-12 stikcy-sidebar" >
          <Sidebar categories={categories} activeCat={activeCat} setActiveCat={setActiveCat} />
        </div>
        {/* main content */}
        <div className="col-md-9">
          <MainContent category={categories.filter(cat => cat.title === activeCat)} activeCat={activeCat} />
        </div>
      </Container>
      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3">
        Green Fields Portal © 2026 | Built for Agriculture Education
      </footer>
    </div>
  )
}

export default App
