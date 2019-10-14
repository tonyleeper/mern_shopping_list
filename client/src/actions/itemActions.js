import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types'

export const getItems = () => {
    return {
        type: GET_ITEMS,
    }
}

export const addItem = () => {
    return {
        type: ADD_ITEM,
    }
}

export const deleteItem = () => {
    return {
        type: DELETE_ITEM,
    }
}
