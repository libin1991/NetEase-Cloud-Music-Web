export const SELECT_ITEM = 'SELECT_ITEM'
export const LIST_REQUEST_POSTS = 'LIST_REQUEST_POSTS'
export const LIST_RECEIVE_POSTS = 'LIST_RECEIVE_POSTS'

export const selectItem = (listIndex, itemIndex) => ({
    type: SELECT_ITEM,
    listIndex,
    itemIndex
})

export const requestPosts = () => ({
    type: LIST_REQUEST_POSTS
})

export const receivePosts = (json) => ({
    type: LIST_RECEIVE_POSTS,
    posts: json
})

export const listFetchPosts = (userId) => dispatch => {
    dispatch(requestPosts())
    return fetch(`http://www.salibs.cn:3000/user/playlist?uid=${userId}`)
        .then(response => response.json())
        .then(json => {
            dispatch(receivePosts(json))
        })
}