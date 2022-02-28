import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Tesla } from './Tesla';
import { Bmw } from './Bmw';
import { Benz } from './Benz';
import { Tata } from './Tata';
import { Hyundai } from './Hyundai';
import { Jaguar } from './Jaguar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';


export default function App() {
const history =useHistory();
  return (
    <div className="App">
      <Router>
        
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/tesla">TESLA</Link></li>
          <li><Link to="/bmw">BMW</Link></li>
          <li><Link to="/benz">BENZ</Link></li>
          <li><Link to="/jaguar">JAGUAR</Link></li>
          <li><Link to="/tata">TATA</Link></li>
          <li><Link to="/hyundai">HYUNDAI</Link></li>
          <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={()=>history.push("/")}>HOME</Button>
          <Button color="inherit" onClick={()=>history.push("/tesla")}>TESLA</Button>
          <Button color="inherit" onClick={()=>history.push("/bmw")}>BMW</Button>
          <Button color="inherit" onClick={()=>history.push("/benz")}>BENZ</Button>
          <Button color="inherit" onClick={()=>history.push("/jaguar")}>JAGUAR</Button>
          <Button color="inherit" onClick={()=>history.push("/tata")}>TATA</Button>
          <Button color="inherit" onClick={()=>history.push("/hyundai")}>HYUNDAI</Button>
        </Toolbar>
      </AppBar>
     
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/tesla"><Tesla/></Route>
          <Route path="/bmw"><Bmw/></Route>
          <Route path="/benz"><Benz/></Route>
          <Route path="/jaguar"><Jaguar/></Route>
          <Route path="/tata"><Tata/></Route>
          <Route path="/hyundai"><Hyundai/></Route>
          
        </Switch>
      </Router>
    </div>
  );
}

function Home(){
  const all=[{
    profile:"https://cdn.mos.cms.futurecdn.net/xz4NVQhHaHShErxar7YLn.jpg"
  },
{
  profile:"https://www.clipartkey.com/mpngs/m/189-1893837_mercedes-benz-logo-round.png"
},
{
  profile:"https://c4.wallpaperflare.com/wallpaper/114/631/730/logo-emblem-propeller-wallpaper-preview.jpg"
},
{
  profile:"https://c4.wallpaperflare.com/wallpaper/53/271/602/brand-chrome-classic-design-wallpaper-preview.jpg"
},
{
  profile:"https://logo-all.ru/uploads/posts/2016-03/0_tata_logo.jpg"
},
{
  profile:"https://www.freepnglogos.com/uploads/hyundai-logo-10.jpg"
}]
const leo= { textAlign: 'center' };
  return(
    <div className='home'>
    <div className='kill'>
      <h1><b>WANT TO KNOW ABOUT CARS...</b></h1>
<h2>THEN SIMPLY SEARCH!</h2>
</div>
<h2 style={leo}>OUR BRAND OF PARTNERS</h2>
   <div className='brand-list'>
     {all.map((nm)=>< Brandey profile={nm.profile}/>)}
   </div>

</div>
  
  )
}

function Brandey({profile}){
  return(
    <div className='allbrands'>
<img src={profile} alt="profile" className='brand-poster'></img>
</div>
  );
}
 

