import React, { Component } from "react"
import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"

import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Layout from "components/Layout"
import SEO from "components/SEO"
import Parallax from "components/Parallax/Parallax.jsx"

import Header from "components/Resume/Header.jsx"
import Summary from "components/Resume/Summary.jsx"
import Experience from "components/Resume/Experience.jsx"
import Project from "components/Resume/Project.jsx"
import Skill from "components/Resume/Skill.jsx"
import Education from "components/Resume/Education.jsx"
import Footer from "components/Resume/Footer.jsx"

import resumeData from "data/resume.json"

import resumeStyle from "assets/jss/material-kit-react/pages/resumePage/resumeStyle.jsx"

class Resume extends Component {
  render() {
    const { classes } = this.props
    return (
      <Layout>
        <SEO title="Resume" />
        <Parallax small filter image="./img/resume.webp">
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.parallaxTitle}>Resume</h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <Header
              name={resumeData.fullname}
              role={resumeData.role}
              contacts={resumeData.contact}
            />
            <Summary data={resumeData.summary} />
            <section
              className={classNames(
                classes.section,
                classes.border,
                classes.py5
              )}
            >
              <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                  {resumeData.experience && (
                    <Experience data={resumeData.experience} />
                  )}
                  {resumeData.projects && (
                    <Project data={resumeData.projects} />
                  )}
                </GridItem>
                <GridItem
                  xs={12}
                  sm={12}
                  md={4}
                  className={classes.skillEduContainer}
                >
                  {resumeData.skills && <Skill data={resumeData.skills} />}
                  {resumeData.education && (
                    <Education data={resumeData.education} />
                  )}
                </GridItem>
              </GridContainer>
            </section>
            <Footer social={resumeData.social} />
          </div>
        </div>
      </Layout>
    )
  }
}

export default withStyles(resumeStyle)(Resume)
