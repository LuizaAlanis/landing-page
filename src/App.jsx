import './App.css';
import Art from './images/art.png';
import IconLock from './images/ic_lock.png';
import IconPeople from './images/ic_people.png';
import IconConfig from './images/ic_config.png';
import IconCustomize from './images/ic_customize.png';
import RoundSticker from './images/round_sticker.png';
import Android from './images/half_android.png';
import Hand from './images/hand.png';
import Logo from './images/logo_horizontal.png';
import Arrow from './images/arrow.png';

function App() {

  return (
    <>
    <header>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    </header>
    <nav>
      <img className="logo" src={Logo} alt="Art"/>
      <input type="checkbox" id="check"/>
      <label for="check" class="checkbtn">
        <i className="fa fa-bars"></i>
      </label>
      <ul>
        <li><a>Privacy Policy</a></li>
        <li><a>Terms of service</a></li>
        <li><button className="button">Contact us</button></li>
      </ul>
    </nav>
    
    <div className="primary-landing-container">
          <div className="landing-art">
            <img className="image-max-width image-center" src={Art} alt="Art"/>
          </div>
          <div className="landing-description responsive-text">
            <div className="text-max-width-large">
              <p className="hi">Hi!<img src={Hand} alt="Hand"/></p>
              <h1>Provider of SAAS technology to fintechs, banks and telcos in Emerging Markets</h1>
              <div className="line"></div>
              <p className="text-silver">We are a team of entrepreneurs with deep experience in online credit, tech, finance, operations, marketing and analytics.</p>
            </div>
          </div>
          <div className="link-center">
            <p className="accent">read more</p>
            <img src={Arrow} alt="Art"/>
          </div>
        </div>

        <div className="landing-silver-container">
          <div className="title-main-container">
            <div className="title-sub-container">
              <p className="basic-text subtitle"> Our Remote <b> &nbsp;Smartphone Lock Solution</b></p>
              <h2 className="title-text accent italic">Key Features</h2>
            </div>
          </div>
          <div className="cards-main-container">

            <div className="card-container">
              <div className="card-image">
                <img src={IconLock} alt="Art"/>
              </div>
              <div className="card-text">
                <p>Proprietary patent-pending software solution to
                  <b className="accent"> remotely lock smartphones.*</b>
                </p>
              </div>
            </div>

            <div className="card-container">
              <div className="card-image">
                <img src={IconPeople} alt="Art"/>
              </div>
              <div className="card-text">
                <p>Designed for use by B2B2C Partners to <b className="accent">reduce credit risk</b> and increase approvals. </p>
              </div>
            </div>

            <div className="card-container">
              <div className="card-image">
                <img src={IconConfig} alt="Art"/>
              </div>
              <div className="card-text">
                <p>The customer-facing app is customizable
                  (logo, color, message) and the devices can be managed via
                  a <b className="accent"> dashboard </b>or through an API.
                </p>
              </div>
            </div>

            <div className="card-container">
              <div className="card-image">
                <img src={IconCustomize} alt="Art"/>
              </div>
              <div className="card-text">
                <p>It&apos;s also possible to <b className="accent">customize</b> the lock screen with our Partners&apos; logo and desired color, as well as display a customer service phone number to call to unlock the device.</p>
              </div>
            </div>
          </div>
        </div>



          <div className="mobile-art">
            <div className="pink-rounded-background"></div>
            <p className="text-our-partners">Our  
              <b className="black">Partners</b>
              <div className="line accent-darker"></div>
            </p>
            
          </div>
          
          
          <div className="partner-video">
              <img className="round-sticker" src={RoundSticker} alt="Art"/>
                <div className="monitor">
                  <iframe width="882" height="497" src="https://www.youtube.com/embed/Vy5eidrLIIk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
          </div>

          <div className="partner-video-mobile">
            <iframe className="responsive-iframe"  src="https://www.youtube.com/embed/Vy5eidrLIIk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <div className="form-container">
            <form className="contact-form">
              <legend className="form-title">Contact US</legend>
              <div className="form-body">
                <div>
                  <label className="form-label">Name</label>
                  <input className="form-input" type="text" placeholder="Ex: Maria"/>
                  <label className="form-label">E-mail</label>
                  <input className="form-input" type="text" placeholder="Ex: Maria"/>
                </div>
                <div>
                  <label className="form-label">Message</label>
                  <textarea className="form-input textarea" placeholder="Ex: Maria"/>
                  
                </div>
              </div>
              
              <button className="form-button" type="submit">Submit</button>
            </form>
          </div>
          
          <div className="footer-container">
            <p className="thin-title left">
              Device compatibility <b className="accent">List</b>
              <div className="line"></div>
            </p>
           

           <div className="footer-content">
             <div>
              <p>Supported phone manufactures</p>
              <ul>
                <li>Samsung (most models)</li>
                <li>Xiaomi (most models)</li>
                <li>LG (most models)</li>
                <li>Motorola (most models)</li>
              </ul>
              <p className="accent">[more to come shortly]</p>
             </div>
             <div>
              <p>Operation system versions</p>
              <ul>
                <li>Version between 8 and 12</li>
              </ul>
             </div>
              <img className="android" src={Android} alt="Art"/>
           </div>
            
            <div className="darker-detail">
              <div>
                <p><b className="accent">Privacy Policy</b></p>
                <p><b className="accent">Terms and conditions</b></p>
              </div>

              <p>© Globetek Holdings, LLC | All Rights Reserved.</p>
            </div>
          </div>
    </>
  );
}

export default App;
