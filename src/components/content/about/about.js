import React from "react";
import img1 from "./../../../assets/images/img1.png";
import img2 from "./../../../assets/images/img2.png";
import img3 from "./../../../assets/images/img3.png";
import "./about.scss";

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="about__title">About the event</div>

                <div className="about__articles">
                    <div className="about__article">
                        <div className="about__subtitle">Rebuilding the society</div>
                        <div className="about__text">
                            Burning Man is a network of people inspired by the values reflected in the Ten
                            Principles and united in the pursuit of a more creative and connected
                            existence in the world. Throughout the year we work to build Black Rock
                            City, home of the largest annual Burning Man gathering, and nurture the
                            distinctive culture emerging from that experience.
                        </div>
                    </div>
                    <div className="about__article">
                        <div className="about__subtitle">This drives us</div>
                        <div className="about__text">
                            Burning Man Project will bring experiences to people in grand,
                            awe-inspiring and joyful ways that lift the human spirit, address social
                            problems, and inspire a sense of culture, community, and civic
                            engagement. Burning Man provides infrastructural tools and frameworks
                            to support local communities in applying the Ten Principles through six
                            interconnected program areas, including Arts, Civic Involvement, Culture,
                            Education, Philosophical Center, and Social Enterprise.
                        </div>
                    </div>
                </div>

                <div className="about__images">
                    <div className="about__img"><img src={img1} alt="img1"/></div>
                    <div className="about__img"><img src={img2} alt="img2"/></div>
                    <div className="about__img"><img src={img3} alt="img3"/></div>
                </div>

            </div>
        </div>
    )
}

export default About;