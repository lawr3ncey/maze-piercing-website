import { Link } from 'react-router-dom'; // Make sure this is imported
import '../../styles/User/Home.css';
import TemporarilyUnavailable from '../../layouts/User/TemporarilyUnavailable';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="home-hero">
        <div className="hero-image">
          <img src="/images/Maze.jpg" alt="Piercing close-up" />
        </div>

        <div className="home-hero-content">
          <p className="welcome-text">WELCOME</p>
          <h1 className="hero-headline">Transforming Bodies with Style & Precision</h1>
          <p className="hero-subtext">
            Excited for something new? Book a consultation today!
          </p>
          <a href="/booking" className="hero-button">
            Book Now
          </a>
        </div>
      </div>

      {/* Meet the Artist Section */}
      <section className="meet-the-artist">
        <div className="artist-container">
          <img
            src="/images/main.jpg"
            alt="The Artist"
            className="artist-photo"
          />
          <h2 className="artist-heading">The Person Behind the Needle</h2>
          <p className="artist-bio">
            Maze Deetz has been a professional body piercer for 12 years, and is fiercely passionate about this career. They are a full service piercer offering all facial, ear, body, and genital piercings, including surface piercing work. Their primary focus as a piercer is on identity affirming services for various communities. Their favorite piercings to do are gender-affirming work for cis and trans clients alike, and they love being able to help people feel at home in their own skin. Lynn is also passionate about the accessibility of body modification for people with disabilities and enjoys working with all bodies, anatomies, medical conditions, and abilities to make clients piercing dreams come true. 
            After receiving their first body piercing, a nostril, at age 14, Lynn was instantly hooked to the art of body piercing. They spend their teen years struggling with body image issues and gender identity, piercing became a way to fall back in love with themselves. Piercing was a celebration of their body, a way to love and embrace their skin. Upon graduating high school, Lynn started working at their first studio before continuing on to work at two well-known and respected shops in the Philadelphia area for several years. There they began learning the basics of the trade as a studio manager before honing their skills as an apprentice and later, a professional body piercer. During this time Lynn also became involved in the Body Suspension community and fell in love with the transformative, intimate experience of hook suspension. The spirituality and intensity of suspension would later deeply inform their mentality as a body piercer. 
            Lynn moved to South Florida in 2015 to continue apprenticing and expand their education. They worked as both a full-time piercer and a studio manager there for 5 years, building connections with clients and within the industry. 
            In 2017 Lynn, motivated to continue their education and keep offering clients the best service possible, went back to school through the Gemological Institute of America (GIA) to get an Applied Jewelers Professional Degree, and later a Graduate Diamonds Degree. With an added education about gemstones, gold, and fine jewelry they are now even more equipped to help clients find the jewelry and designs perfect for them. 
            In 2019 they accepted a position as a Piercer and Studio Manager at Icon in Nashville. Working alongside Ian Bishop, a piercer and instructor with the Fakir Intensives for over 25 years, they were excited to continue honing this craft, while helping create a beautiful, inclusive, safe space in the Nashville Metro Area. During their time at Icon they trained with Ian as a student mentor to learn the skills necessary to educate and teach this career. In 2020, they came out as non-binary and began their transition. At the same time, they began to focus on providing gender-affirming services to the trans and nonbinary community.
            In 2022 they left Icon to transition to traveling full time to pierce. Lynn worked as a guest piercer, piercing all over the United States at a variety of amazing studios. They also used this time traveling to do more educational work for piercers, including teaching on YouTube, patreon, and on their blog. They enjoyed traveling, meeting so many diverse clients, and connecting with piercers around the country.  In the summer of 2023 they accepted a full time piercing position at Laughing Buddha in Seattle. They are excited to serve the greater Seattle community and use their time to do more educational work and outreach.             ​
            Lynn is nonbinary and uses they/them pronouns. Their biggest passion is life is body piercing and body suspension. When they aren't piercing or educating, they spend their time reading (mostly fantasy and Sci Fi), playing dungeons and dragons, and hiking. They love being outside, especially on water, and enjoy kayaking, swimming, and beach trips. Lynn is a huge anime fan, and is always looking for new shows to watch and enjoy. They also love fashion, including makeup and hair, and enjoy expressing themselves outwardly with all of those things in combination with their piercings, tattoos, and modifications. They have one grumpy but adorable cat named Girlfriend who is the light of their life. 
          </p>

          {/* Connect Button */}
          <Link to="/connect" className="artist-connect-button">
            Connect
          </Link>
        </div>
      </section>

      <section className="home-contact">
        <div className="home-contact-container">
        <h2 className="contact-heading">Request a consult</h2>

        <form className="contact-form">
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email*" name="email" required />
          <textarea placeholder="Message*" name="message" required></textarea>
          <button type="submit" className="send-button">SEND</button>
        </form>

        <div className="contact-info">
          <div>
            <p><strong>Blood & Thorn of Maze</strong><br />
            Tattoo and Piercing</p>
            <p>123 V. Francisco St., Sta. Mesa, Manila</p>
            <p>706-945-1810<br />
            <a href="mailto:babelonialawrence@gmail.com">babelonialawrence@gmail.com</a></p>
          </div>

          <div>
            <p><strong>Hours</strong><br />
            Monday–Friday: 12pm–9pm<br/>
            Saturday: 12pm–10pm<br/>
            Sunday: CLOSED<br/>
            </p>
          </div>
        </div>
        </div>
      </section>

    </>
  );
}

export default Home;
