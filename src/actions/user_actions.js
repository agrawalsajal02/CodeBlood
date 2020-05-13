
const submission=(dataTosubmit)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        //make async call here
        const firestore=getFirestore();
        firestore.collection('projects').add({
            dataTosubmit,
            createdAt:new Date()
        }).then(()=>{
            dispatch({type:'submission',dataTosubmit});
   
        }).catch((err)=>{
            dispatch({type:'submission_error',err});
   
        })
        
        
    }
}

export default submission