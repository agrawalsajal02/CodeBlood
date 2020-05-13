const chats=(state={},action)=>{
    switch(action.type){
        case 'submission':
            console.log("project submission added  ",action.project);
            return state;
        case 'submission_error':
            console.log("sumbission error ",action.err);
            return state;
        default:
            return state;

    }
}

export default chats