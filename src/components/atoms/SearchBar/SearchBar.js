import React from 'react'
import { connect } from 'react-redux'
import './SearchBar.css'
import { BsSearch } from 'react-icons/bs'

// Redux
import { setToLoading, setInput } from '../../../redux/index'

function SearchBar(props) {
    return (
        <form
            className="SearchBar"
            onSubmit={(e) => {
                e.preventDefault()
                props.setToLoading()
                props.fetchBooks()
            }}
        >
            <input
                type="text"
                value={props.input}
                className="SearchBar__input"
                onChange={(e) => props.setInput(e.target.value)}
            />
            <button className="SearchBar__button" type="submit">
                <BsSearch fill="#4A596C" size="1.3rem" />
            </button>
        </form>
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
        setInput: (userInput) => dispatch(setInput(userInput)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
