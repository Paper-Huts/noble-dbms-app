import React, { Fragment } from 'react'
import styles from '../../stylesheets/Landing.module.css'
import { Row } from 'react-bootstrap'

import Header from '../CustomComponents/Headers/Header'
import SummaryStatCard from '../CustomComponents/SummaryStats'

const Landing = ({ header, summaryStats }) => (
  <Fragment>
    <Header header={header} />
    <Row className={styles.summaryStatContainer}>
      {summaryStats.map(({ id, value, title }) => (
        <SummaryStatCard key={id} value={value} desc={title} />
      ))}
    </Row>
  </Fragment>
)

export default Landing