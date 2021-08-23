import React from 'react'
import { connect } from 'react-redux'
import './Header.css'
import SearchBar from '../../atoms/SearchBar/SearchBar'
import Select from '../../atoms/Select/Select'

// Redux
import {
    setToBookList,
    setInput,
    setOrder,
    setCategory,
} from '../../../redux/index'

function Header(props) {
    const orderOptions = ['relevance', 'newest']
    const categoryOptions = [
        'all',
        'art',
        'biography',
        'computers',
        'history',
        'medical',
        'poetry',
    ]
    return (
        <div className="Header">
            <div className="container">
                <div
                    className="Header__title"
                    onClick={() => {
                        props.setInput(' ')
                        props.setToBookList()
                    }}
                >
                    explore books
                </div>
                <div className="Header__search">
                    <SearchBar fetchBooks={props.fetchBooks} />
                    <div className="Header__selectItems">
                        <Select
                            label="Categories"
                            options={categoryOptions}
                            fetchBooks={props.fetchBooks}
                            initialValue={props.category}
                            setFilter={props.setCategory}
                            setBooksData={props.setBooksData}
                            setStartIndex={props.setStartIndex}
                            helper={props.helper}
                            setHelper={props.setHelper}
                        />
                        <Select
                            label="Sorting by"
                            options={orderOptions}
                            fetchBooks={props.fetchBooks}
                            initialValue={props.order}
                            setFilter={props.setOrder}
                            setBooksData={props.setBooksData}
                            setStartIndex={props.setStartIndex}
                            helper={props.helper}
                            setHelper={props.setHelper}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

// Redux
const mapStateToProps = (state) => {
    return {
        input: state.input.input,
        order: state.input.order,
        category: state.input.category,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setToBookList: () => dispatch(setToBookList()),
        setInput: (userInput) => dispatch(setInput(userInput)),
        setOrder: (order) => dispatch(setOrder(order)),
        setCategory: (category) => dispatch(setCategory(category)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
