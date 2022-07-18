import React from 'react';
import './Home.css';
import header from './images/Web capture_25-6-2022_232428_.jpeg'
import CartImg1 from './images/Taxi-Fotaxi-Budapest-cart.jpg';
import CartImg3 from './images/66591687-vector-flat-taxi-cart.webp'
import CartImg2 from './images/download-cart.jfif'
import { Link } from 'react-router-dom';
import { Button, Paper, TextField } from '@mui/material';
import Cart2Img1 from './images/images cart-2.jfif';
import Cart2Img2 from './images/download cart-2.jfif';
import Cart2Img3 from './images/night-city-princess-celebrity-cart-2.jpg';
import tockphoto from './images/istockphoto-xx.jpg';
import TaxiImages from './images/taxi-app-turkey xx.jpg';
import Imagess from './images/taxi-business ---.jpg';
import aboutUs from './images/images----.jfif';
import png from './images/png_taxi_23267.png'
// icon
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YardIcon from '@mui/icons-material/Yard';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SendIcon from '@mui/icons-material/Send';

const Home = () => {

    return (
        <div className='main'>
            <div className="container">
                <div className="contact">
                    <h3>Call us Anitame AT:</h3>
                    <h1>987-654-321 or</h1>
                    <h1>879-456-321</h1>
                    <button className='btn'> Call Now</button>
                </div>
                <div className="images">
                    <img src={header} alt="" />
                </div>
            </div>
            {/*  */}
            <div className="cart">
                <Paper elevation={24}>
                <div>
                    <img src={CartImg1} alt="" />
                    <h2>Taxi Company</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, dolorem aliquid itaque praesentium sapiente reprehenderit. Distinctio exercitationem odio in aliquid.</p>
                    <Link to="RearnMore"> REARN MORE </Link>
                </div>
                </Paper>
                <Paper elevation={24}>
                <div>
                    <img src={CartImg2} alt="" />
                    <h2>Application</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, dolorem aliquid itaque praesentium sapiente reprehenderit. Distinctio exercitationem odio in aliquid.</p>
                    <Link to="RearnMore"> REARN MORE </Link>
                </div>
                </Paper>
                <Paper elevation={24}>
                <div>
                    <img src={CartImg3} alt="" />
                    <h2>Taxi Services</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, dolorem aliquid itaque praesentium sapiente reprehenderit. Distinctio exercitationem odio in aliquid.</p>
                    <Link to="RearnMore"> REARN MORE </Link>
                </div>
                </Paper>
            </div>
            {/*  */}
            <div className="cart-2">
                <div className="cart-1">
                    <div className="cartImg">
                        <img src={Cart2Img1} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reprehenderit aliquam quaerat, minus illo dicta totam mollitia voluptate omnis blanditiis, adipisci obcaecati, necessitatibus non rem! Adipisci ipsam vitae odit tempore!
                        Odit molestiae vero, sed perspiciatis impedit asperiores nam quae quasi,</p>
                    </div>
                    <div>
                        <h1>TAXI Transfers From and to Airport</h1>
                        <h5> </h5>
                    </div>
                </div>
                <div className="cartImg-2">
                    <div className="cartImg-2-1">
                        <h4>Transfers From and to</h4>
                        <img src={Cart2Img3} alt="" />
                    </div>
                    <div className="cartImg-2-2"> 
                    <img src={Cart2Img2} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam earum nemo omnis velit dolorem, doloremque neque, nobis asperiores iste nesciunt facilis consectetur commodi quam accusantium, incidunt expedita. Est, dolorum quisquam.
                    Enim, voluptates esse.</p>
                    </div>
                </div>
            </div>
            {/*  */}
            {/* <div className=""> */}
            <div className="Container">
                <div className="ContainerText">
                    <img src={tockphoto} alt="" />
                    <h1>Yellow Cad NYC</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio asperiores cupiditate fugiat quod velit odio labore nostrum officiis, nihil corporis consequatur facere cumque sed suscipit ea similique perferendis dolorum reprehenderit.</p>
                </div>
                <div className="ContainerImages">
                    <img src={TaxiImages} alt="" /> 
                    <h3> </h3>
                </div>
            </div>
            <div className="mainc">

                <div className="Cart-3"> </div>

                <img className="imagess" src={Imagess} alt="" />

                <div className="text">
                    <h1>Book your trip online now</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus veritatis, quaerat reiciendis animi eos consequatur porro provident ullam dolore deleniti. Error voluptate iste, rem voluptates porro libero eligendi commodi repellat?</p>
                    <button className='textBtn'>BOOK NOW</button>
                </div>

                <div className="about-us">
                    <div className='about-usText'>
                        <h1>About us</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus veritatis, quaerat reiciendis animi eos consequatur porro provident ullam dolore deleniti.</p>
                    </div>
                  <img src={aboutUs} alt="" />
                </div>
            </div>
            {/* </div> */}
            <div className="administration">
                <div className='Dispatch'>
                    <div>
                        <img src={png} alt="" />
                    </div>
                    <div>
                        <h3>Administration</h3>
                        <h2>(702) 365-1900</h2>
                    </div>
                    <div>
                        <h3>Dispatch</h3>
                        <h2>(702) 369-5686</h2>
                    </div>
                    <div>
                        <h3>Lost and Found</h3>
                        <h2>(702) 365-1900</h2>
                    </div>
                </div>
            </div>
            <div className="futor">
                <div className="getInTouch">
                    <h1>GET IN TOUCH</h1>
                    <h4>We can ensure reliability, low cast <br /> fares and most important, with <br /> safety and camfort in mind.</h4>
                    <p>  Lorem ipsum dolor sit, amet consectetur adipisicing<br />
                    elit. Dolorum debitis nesciunt unde error nulla nemo,<br />
                    tempora atque similique molestias minima repellendus <br />
                    dicta ullam dolores consequatur quod sint <br />
                    exercitationem quaerat dolorem!</p>
                    {/* <div className='icon'>
                        <FacebookOutlinedIcon fontSize="large" sx={{marginRight:'20px'}}/>
                        <TwitterIcon fontSize="large" sx={{marginRight:'20px'}}/>
                        <InstagramIcon fontSize="large" sx={{marginRight:'20px'}}/>
                        <YardIcon fontSize="large" sx={{marginRight:'20px'}}/>
                        <YouTubeIcon fontSize="large" sx={{marginRight:'20px'}}/>
                    </div> */}
                </div>
                <div className="Lacation">
                    <div>
                        <h2>CALL US</h2>
                        <p>1 (234) 567-891</p>
                        <p>1 (234) 987-654</p>
                        <h2>LOCATION</h2>
                        <p>Prince Meshaal Abd Al Aziz,<br /> Irpah Riyadh 11564, Saudi Arabia</p>
                        <h2> OUT TOP SERVICES</h2>
                        <p>Local Transfers</p>
                        <p>Airport Transfers</p>
                        <p>  Excursions and Tours</p>
                    </div>
                </div>
                <div className="Massages">
                    <TextField fullWidth sx={{marginBottom:'10px',backgroundColor:'white'}} label="Enter your Name" id="fullWidth" />
                    <TextField fullWidth sx={{marginBottom:'10px',backgroundColor:'white'}} label="Enter valid email address" id="fullWidth" />
                    <TextField fullWidth sx={{marginBottom:'10px',backgroundColor:'white'}} id="outlined-multiline-static" label="Massages" multiline rows={4} />
                    <Button variant="contained" sx={{width:'150px',backgroundColor:'black'}} endIcon={<SendIcon />}> Send </Button>
                </div>
            </div>
            <div className='icon'>
                        <FacebookOutlinedIcon fontSize="large" sx={{marginRight:'20px'}}/>
                        <TwitterIcon fontSize="large" sx={{marginRight:'20px'}}/>
                        <InstagramIcon fontSize="large" sx={{marginRight:'20px'}}/>
                        <YardIcon fontSize="large" sx={{marginRight:'20px'}}/>
                        <YouTubeIcon fontSize="large" sx={{marginRight:'20px'}}/>
                    </div>
            <div className="bg"> I LOVE ALL BEST FRIENDS </div>
        </div>
    );
};

export default Home;