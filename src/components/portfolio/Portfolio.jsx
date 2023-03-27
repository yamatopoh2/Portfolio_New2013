import React from "react"
import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"

const data = [
  {
    Pid: 1,
    image: IMG1,
    title: "Portfolio 1",
    demo: "https://dribbble.com",
  },
  {
    Pid: 2,
    image: IMG2,
    title: "Portfolio 2",
    demo: "https://dribbble.com",
  },
  {
    Pid: 3,
    image: IMG3,
    title: "Portfolio 3",
    demo: "https://dribbble.com",
  },
  {
    Pid: 4,
    image: IMG4,
    title: "Portfolio 4",
    demo: "https://dribbble.com",
  },
  {
    Pid: 5,
    image: IMG5,
    title: "Portfolio 5",
    demo: "https://dribbble.com",
  },
  {
    Pid: 6,
    image: IMG6,
    title: "Portfolio 6",
    demo: "https://dribbble.com",
  },
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ Pid, image, title, demo }) => {
          return (
            <article key={Pid.toString()} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
