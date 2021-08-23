import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import './Select.css'

// Redux
import { setToLoading } from '../../../redux/index'

function Select(props) {
    useEffect(() => {
        props.helper !== 0 && props.fetchBooks()
    })
    return (
        <div className="Select">
            <div className="Select__label">{props.label}</div>
            <select
                className="Select__select"
                value={props.initialValue}
                onChange={(e) => {
                    props.setFilter(e.target.value)
                    props.setBooksData([])
                    if (props.input) {
                        props.setToLoading()
                        props.setStartIndex(0)
                        props.setHelper(1)
                    }
                }}
            >
                {props.options.map((option, i) => (
                    <option className="Select__option" value={option} key={i}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

// Redux
const mapStateToProps = (state) => {
    return {
        input: state.input.input,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setToLoading: () => dispatch(setToLoading()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Select)
