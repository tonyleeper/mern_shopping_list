import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import { getItems, deleteItem } from '../actions/itemActions'
import PropTypes from 'prop-types'

import styles from './ShoppingList.module.css'

class ShoppingList extends Component {
    componentDidMount() {
        this.props.getItems()
    }

    deleteItem = id => {
        this.props.deleteItem(id)
    }

    render() {
        const { items } = this.props.item
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className={styles.shoppingList}>
                        {items.map(({ id, name }) => (
                            <CSSTransition
                                key={id}
                                timeout={500}
                                classNames="fade"
                            >
                                <ListGroupItem>
                                    <Button
                                        style={{ marginRight: '0.5rem' }}
                                        color="danger"
                                        size="sm"
                                        onClick={this.deleteItem.bind(this, id)}
                                    >
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    item: state.item,
})

export const ShoppingListContainer = connect(
    mapStateToProps,
    { getItems, deleteItem }
)(ShoppingList)
