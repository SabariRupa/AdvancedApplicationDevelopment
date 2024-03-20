import React from 'react';
import './Home.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
    <div className="home-container">
       <div className="home-page">
        <h1 id="wel">"Growing your farm, nurturing your future – with our agricultural loans"</h1>
         <div className="ball">

         <div class="text-over-img">
         <div id="text-container">
        Welcome to  agrolend
      <div id="flip">
      <div><div>Secure</div></div>
      <div><div>Grow</div></div>
      <div><div>Thrive</div></div>
    </div>
    Your Farming Ventures!
  </div>
</div>
        <Link to="/register"><button class="latest-btn">Get Started!!</button></Link>
        </div>

        <div className="box-container">
          <div className="box box1">
            <div className="box-content">
              <img src="https://5.imimg.com/data5/SELLER/Default/2021/8/UU/AL/EG/100972675/agricultural-loan-provider-farming-dairy-poultry-fisheries-loans-500x500.jpg" alt="Image 1" />
              <div className="text-content">
                <h2 id="cat">Crop Loan</h2><br/><br/>
                <p>Secure your harvest with our tailored crop loans. Our crop loans are designed to meet the specific needs of farmers, providing financing for seeds, fertilizers, pesticides, irrigation, and labor costs. With flexible terms, competitive rates, and quick approval, our crop loans ensure that you can cultivate your crops with confidence and maximize your yields.</p>
              </div>
            </div>
          </div>
          <div className="box box2">
            <div className="box-content">
              <img src="https://m.economictimes.com/thumb/msid-84168616,width-1200,height-900,resizemode-4,imgsize-248670/land-loan-vs-home-loan.jpg" alt="Image 2" />
              <div className="text-content">
                <h2 id="cat">Land Loan</h2><br/><br/>
                <p>Realize your dream of owning agricultural land with our land loans. Whether you're purchasing land for farming, expansion, or investment, our land loans provide the necessary financing to make it happen. With competitive rates, flexible repayment options, and personalized service, our land loans empower you to acquire the land you need to grow your farm and secure your future.</p>
              </div>
            </div>
          </div>
          <div className="box box3">
            <div className="box-content">
              <img src="https://www.idbibank.in/assets/images/Agri-Loan.png" alt="Image 3" />
              <div className="text-content">
                <h2 id="cat">Farm Machinery Loan</h2><br/><br/>
                <p>Upgrade your farming equipment and boost your productivity with our farm machinery loans. From tractors and harvesters to irrigation systems and processing equipment, our farm machinery loans provide the financing you need to modernize your farm operations. With quick approvals, competitive rates, and flexible repayment terms, our farm machinery loans help you stay ahead in the ever-evolving agricultural industry.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        <Footer/>
    </div>
    
    
  );
}

export default Home;
