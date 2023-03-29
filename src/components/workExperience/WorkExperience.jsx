import React from "react"
import "./workExperience.css"

const WorkExperience = () => {
  return (
    <section id="workexperience">
      <h2>Work Experience</h2>
      <div className="container workexperience__container">
        {/* Lucy */}
        <div className="workexperience__content">
          <article className="workexperience__details">
            <div>
              <h4>
                LUCY (<em> 2 Years </em>)
              </h4>
              <h5>E-learning Front-End Web Developer</h5>

              <small className="text-light">
                I take care of the client-requested modifications to the
                E-learning template, such as adding additional language or
                creating a new template for a different subject.
              </small>
            </div>
          </article>
        </div>
        {/* Lucy */}

        {/* Flying */}
        <div className="workexperience__content">
          <article className="workexperience__details">
            <div>
              <h4>
                Flying Dragon Network Philippines Inc. (<em> 1 Year </em>)
              </h4>

              <h5>Full Stack Web Developer</h5>

              <small className="text-light">
                I'm in charge of purchasing and deploying websites as well as
                adding and maintaining all of the rummy websites, including the
                PBN and the main ones. I also manage the server hosting in all
                of the websites, the technical SEO, daily updates to the
                sitemaps, indexing page, and the Graphics for the Rummy Website.
              </small>
            </div>
          </article>
        </div>
        {/* Flying */}
      </div>
      <div className="container workexperience__container w-cont2">
        {/* Solaire */}
        <div className="workexperience__content">
          <article className="workexperience__details">
            <div>
              <h4>
                Solaire (<em> 2023 - Present </em>)
              </h4>

              <h5>Frond-End Web Developer</h5>

              <small className="text-light">
                I'm responsible for designing the client-requested website,
                which must be responsive in both mobile and desktop views.
              </small>
            </div>
          </article>
        </div>
        {/* Solaire */}
      </div>
      <h5>
        Note: I did not include my past work that not related to Web developing
      </h5>
    </section>
  )
}

export default WorkExperience
