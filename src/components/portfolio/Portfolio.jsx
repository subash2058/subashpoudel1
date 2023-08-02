import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio/1.png'
import IMG2 from '../../assets/portfolio/2.png'
import IMG3 from '../../assets/portfolio/3.png'
import IMG4 from '../../assets/portfolio/4.png'
import IMG5 from '../../assets/portfolio/5.png'
import IMG6 from '../../assets/portfolio/6.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
            <h3>Bawarchi Teku</h3>
            <div className="portfolio_item-cta">
            <a href="http://bawarchiteku.com/" className="btn btn-primary" target='jsx-no-target-blank'>Live Demo</a></div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
            <h3>E-auto Nepal</h3>
            <div className="portfolio_item-cta">
            <a href="https://eautonepal.com/" className="btn btn-primary" target='jsx-no-target-blank'>Live Demo</a></div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
            <h3>Adhyaaya</h3>
            <div className="portfolio_item-cta">
            <a href="https://adhyaaya.com/" className="btn btn-primary" target='jsx-no-target-blank'>Live Demo</a></div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
            <h3>Tourism LMC</h3>
            <div className="portfolio_item-cta">
            <a href="http://tourism.lmc.gov.np/tourism/" className="btn btn-primary" target='jsx-no-target-blank'>Live Demo</a></div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
          </div>
            <h3>Aveda Wellness</h3>
            <div className="portfolio_item-cta">
            <a href="https://avedawellness.com/" className="btn btn-primary" target='jsx-no-target-blank'>Live Demo</a></div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" />
          </div>
            <h3>Kanomama</h3>
            <div className="portfolio_item-cta">
            <a href="https://kanomama.com/" className="btn btn-primary" target='jsx-no-target-blank'>Live Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
