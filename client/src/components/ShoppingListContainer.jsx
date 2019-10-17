import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import { getItems, deleteItem } from '../actions/itemActions'
import PropTypes from 'prop-types'

import styles from './ShoppingList.module.css'

class ShoppingList extends Component {
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool,
    }

    componentDidMount() {
        this.props.getItems()
    }

    deleteItem = id => {
        this.props.deleteItem(id)
    }

    render() {
        const { items } = this.props.item
        const { isAuthenticated } = this.props
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className={styles.shoppingList}>
                        {items.map(({ _id, name }) => (
                            <CSSTransition
                                key={_id}
                                timeout={500}
                                classNames="fade"
                            >
                                <ListGroupItem>
                                    {isAuthenticated ? (
                                        <Button
                                            style={{ marginRight: '0.5rem' }}
                                            color="danger"
                                            size="sm"
                                            onClick={this.deleteItem.bind(
                                                this,
                                                _id
                                            )}
                                        >
                                            &times;
                                        </Button>
                                    ) : null}
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

const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated,
})

export const ShoppingListContainer = connect(
    mapStateToProps,
    { getItems, deleteItem }
)(ShoppingList)
