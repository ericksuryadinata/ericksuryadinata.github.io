import React, { Component } from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import withStyles from "@material-ui/core/styles/withStyles"
import Card from "components/Card/Card.jsx"
import CardBody from "components/Card/CardBody.jsx"
import CardHeader from "components/Card/CardHeader.jsx"
import CardFooter from "components/Card/CardFooter.jsx"
import Button from "components/Custom/Button.jsx"
import { FaChevronRight, FaRegClock, FaTag } from "react-icons/fa"

import blogItemStyle from "assets/jss/material-kit-react/components/blogItemStyle.jsx"

class BlogItem extends Component {
  render() {
    const { classes, data, key } = this.props
    const post = data.frontmatter
    return (
      <div>
        <Card>
          <CardHeader plain className={classes.cardHeader}>
            <img
              src={post.image.childImageSharp.fluid.src}
              alt={post.title}
              className={classNames(
                classes.imgFluid,
                classes.imgCardTop,
                classes.imgRaised
              )}
            />
          </CardHeader>
          <CardBody>
            <h4 className={classes.cardTitle}>{post.title}</h4>
            <small className={classes.smallTitle}>
              Dipublikasikan pada {post.date}
            </small>
            <small
              className={classNames(classes.smallTitle, classes.timeToRead)}
            >
              <FaRegClock className={classes.iconSmall} /> Waktu baca:{" "}
              {data.timeToRead} Menit
            </small>
            <br />
            <small className={classes.smallTitle}>
              Tags:{" "}
              {post.tags.length === 0 ? (
                "-"
              ) : (
                <span>
                  <FaTag className={classes.iconSmall} />{" "}
                  {post.tags.map(tag => tag)}
                </span>
              )}
            </small>
            <p className={classes.description}>{data.excerpt}</p>
          </CardBody>
          <CardFooter>
            <Link key={key} to={post.path + data.fields.slug}>
              <Button color="primary">
                Baca <FaChevronRight className={classes.icons} />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    )
  }
}

export default withStyles(blogItemStyle)(BlogItem)
