export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {

    return items.map(user => {
        if (user[objPropName] === itemId) {
            return {...user, ...newObjProps}
        }
        return user;
    })
}

export const updateObjectInPostsArray = (posts, itemId, newObjProps) => {

    return posts.map(post => {
        if (post.id === itemId) {
            return {...post, ...newObjProps}
        }
        return post;
    })
}