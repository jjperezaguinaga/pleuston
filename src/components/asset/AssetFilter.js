import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

import './AssetFilter.scss'

const AssetFilter = ({
    activeFilter,
    handlePublisherChange,
    publishers
}) => (
    <div className="asset-filter">
        <Select
            isMulti
            className="basic-multi-select"
            classNamePrefix="select"
            name="colors"
            onChange={value => handlePublisherChange(value)}
            options={publishers}
            value={activeFilter} />
    </div>
)

AssetFilter.propTypes = {
    activeFilter: PropTypes.object,
    handlePublisherChange: PropTypes.func,
    publishers: PropTypes.array
}

AssetFilter.defaultProps = {
    publishers: [],
    activeFilter: null,
    handlePublisherChange: null
}

export default AssetFilter
