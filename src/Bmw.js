import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faChargingStation,  faGasPump, faGaugeHigh, faIndianRupee,faGaugeSimpleHigh } from "@fortawesome/free-solid-svg-icons";
export function Bmw() {
  const user1 = [
    {
      name: "BMW",
      poster: "https://cdn.bmwblog.com/wp-content/uploads/2018/03/Melbourne-Red-BMW-X5-M-HRE-Wheels-Image-2.jpg",
      series: "BMW X5",
      type: "petrol/diesel engine",
      price: "70.75 Lakhs",
      speed: "278 kmph",
      mileage: "8-13 km/l combined",
    },
    {
      name: "BMW",
      poster: "https://gumlet.assettype.com/evoindia%2F2020-07%2F4fcf8dbf-09fc-429b-83cb-e751c3b3c60b%2FP90373801_highRes_the_new_bmw_x6_m50i_.jpg?rect=0%2C138%2C2048%2C1152&auto=format%2Ccompress&fit=max&format=webp&w=480&dpr=2.6",
      series: "BMW X6",
      type: "petrol engine",
      price: "1.2 crore",
      speed: "250 kmph",
      mileage: "10 km/l combined",
    },
    
    {
      name: "BMW",
      poster: "https://www.financialexpress.com/wp-content/uploads/2022/01/BMW-X3-Facelift-3.jpg",
      series: "BMW X3",
      type: " petrol/diesel engine",
      price: "60 Lakhs",
      speed: "250 kmph",
      mileage: "13-17 km/l combined",
    },
    {
      name: "BMW",
      poster: "https://www.financialexpress.com/wp-content/uploads/2022/02/new-bmw-x4-m40i-facelift.jpg",
      series: "BMW X4",
      type: "petrol/diesel engine",
      price: "60.75 Lakhs",
      speed: "250 kmph",
      mileage: "11-15 km/l combined",
    },
   
    {
      name: "BMW",
      poster: " https://thumbor.forbes.com/thumbor/711x474/https://blogs-images.forbes.com/nargessbanks/files/2019/04/P90343695-highRes.jpg?width=960",
      series: "BMW X7",
      type: "petrol/diesel engine",
      price: "1.7 crore",
      speed: "250 kmph",
      mileage: "11-13 km/l combined",
    },
    {
      name: "BMW",
      poster: "https://images.hgmsites.net/lrg/2022-bmw-x1_100821675_l.jpg",
      series: "BMW X1",
      type: "petrol/diesel engine",
      price: "40 Lakhs",
      speed: "222 kmph",
      mileage: "15-20 km/l combined",
    },
  ];
  return (
    <div>
      <h1 className='world'><FontAwesomeIcon icon={faChargingStation}></FontAwesomeIcon> WELCOME TO BMW WORLD <FontAwesomeIcon icon={faChargingStation}></FontAwesomeIcon></h1>
      <img src="https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/all-models/x-series/x7/X7DarkShadow/X3-1680x756_05.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1642656232136.jpg"></img>
      
      <h1 className="brand">BRANDS OF CARS AVAILABLE <FontAwesomeIcon icon={faCar}></FontAwesomeIcon></h1>
      <div className='bmw-list'>
        {user1.map((nm) => <Bmwcar name={nm.name} series={nm.series} price={nm.price}
          speed={nm.speed} mileage={nm.mileage} type={nm.type} poster={nm.poster} />)}
          <div className="joy">
      <h1>About Bmw:</h1>
      <h2 className="tes1">BMW’s mission is to accelerate the world’s transition to sustainable energy.</h2>
      <h3>Mercedes-Benz makes perhaps the most advanced, luxurious, and
         performance-oriented automobiles on the planet, and that status 
         is not a fluke. They've been pumping out innovative and technologically
          groundbreaking vehicles since Karl Benz introduced what's considered the 
          first petrol-powered car in 1886</h3>
            </div>
          <img src="https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/all-models/x-series/X4/2021/1680x756_W_o_Text.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1645528673885.jpg"></img>
      </div>
    </div>
  );
}
function Bmwcar({ name, series, price, speed, mileage, type, poster }) {
  const styles={backgroundColor:"yellow", textAlign:'center'}
  const ji={textAlign:'center'}
  return (
    <div className='bmw'>
      <img src={poster} alt="img" className='bmw-poster'></img>
      <h3 style={styles}>{name}</h3>
      <h3 style={ji}>Car-series: {series}</h3>
      <h3 style={ji}><FontAwesomeIcon icon={faGasPump}></FontAwesomeIcon>: {type}</h3>
      <h3 style={ji}><FontAwesomeIcon icon={faIndianRupee}></FontAwesomeIcon>: {price}</h3>
      <h3 style={ji}><FontAwesomeIcon icon={faGaugeHigh}></FontAwesomeIcon>: {speed}</h3>
      <h3 style={ji}><FontAwesomeIcon icon={faGaugeSimpleHigh}></FontAwesomeIcon>:{mileage}</h3>
    </div>
  );
}
