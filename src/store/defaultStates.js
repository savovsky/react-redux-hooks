export const posts = {
    fetching: false,
    fetchedFulfilled: false,
    fetchedRejected: false,
    errorMsg: '',
    posts: []
}

export const users = {
    fetching: false,
    fetchedFulfilled: false,
    fetchedRejected: false,
    errorMsg: '',
    users: []
};

export const dndBoards = [
    {id: 'b1', name: 'board 1', items: []},
    {id: 'b2', name: 'board 2', items: []},
    {id: 'b3', name: 'board 3', items: []}
];

export const dndItem = {
    dragging: false,
    dragItemId: null,
    sourceContainerId: null,
    overItemId: null,
    overContainerId: null
};
