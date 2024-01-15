import React from 'react'
import PropTypes from 'prop-types'

import './JobListing.scss'

const JobListing = ({ title, description, department, location }) => {
  return (
    <div className="job-listing">
      <h2>{title}</h2>
      {
        description && <p>{description}</p>
      }
      <p className={"job-listing__subline"}>{`${department} | ${location}`}</p>
    </div>  
  )
}

JobListing.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  department: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}

export default JobListing