
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function HomeCarousel() {
    let settings = {
        dots: true,
        infinite: true,
        autoplay : true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <section className="banner-carousel-section container">
            <Slider {...settings}>
                <div>
                    <h3>Savor Unique Creations</h3>
                </div>
                <div>
                    <h3>Impeccable Service & Ambiance</h3>
                </div>
                <div>
                    <h3>Discover Spice Kraft</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </section>
    );
}