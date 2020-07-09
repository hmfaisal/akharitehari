import React from "react";
import Slider from "react-slick";
import { FaUsers, FaFacebookF } from "react-icons/fa";
import Lottie from 'react-lottie';
import animationData1 from '../assets/lottie/cooking.json';

function Home() {
    const sliderSettings = {
        dots: true,
        arrows: false,
        autoplay: true
    }

    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: animationData1,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid meet'
        }
      };

    return (
        <section className="section section-hero section-hero-1 display-fit-screen" style={{overflow:'hidden'}}>
            <div className="hero-content">
                <Slider className="el-slider" {...sliderSettings}>
                    <div className="slide">
                        <div className="image overlay-image" >
                            <Lottie options={defaultOptions1}/>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className="hero-sidebar overlay-color">
                <span className="bg-color bg-primary"></span>
                <div className="display-center">
                    <div className="content">
                        <div className="image" style={{ backgroundImage: `url(/assets/images/logo.png)`, backgroundSize:'cover', height:'124px', width:'217px', margin:'0 auto'}}></div>
                        <h4 style={{display:'block',margin:'auto',padding:'30px 20px', maxWidth:'480px',textAlign:'center'}}>শীঘ্রই নতুন কিছু নিয়ে আমরা আসছি আপনাদের মাঝে। এই সময়ের জন্য অর্ডার করুন আমাদের ফেসবুক পেজে</h4>
                        <a href="https://www.facebook.com/akharitehari" target="_blank">
                            <button className="button button-md button-light text-primary" style={{display:'block',margin:'auto'}}>
                                <span className="wave"></span>
                                <span className="text" >অর্ডার করুন</span>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="hero-sidebar-links">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/akharitehari" target="_blank">
                                <FaFacebookF />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/groups/568873090456384" target="_blank">
                                <FaUsers />
                            </a>
                        </li>
                    </ul>
                    <p style={{fontSize:'0.8em'}}>Powered By <a href="http://www.alphabetdev.com/#/" target="_blank"><span style={{color:'#9fa1bd'}}>alphabetDEV</span></a></p>
                </div>
            </div>
        </section>
    );
}

export default Home;
