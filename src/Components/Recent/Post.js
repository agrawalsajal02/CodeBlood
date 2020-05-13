import React from 'react'
import {connect} from "react-redux"
import {Link} from "react-router-dom"
 const Post=(props)=> {
   const {posts,indexoflastpost,loading}=props;
    if(loading){
       return <h2>Loading...</h2>
   }
    return (
       <table class="table table-dark">
    <thead>
       <tr>
         <th scope="col">No.</th>
         <th scope="col">status</th>
         <th scope="col">language</th>
         <th scope="col">Details</th>
       </tr>
     </thead>
     <tbody>
{posts.map((post,index)=>(  
        // console.log(post.data)
        <tr>
        <th scope="row">{indexoflastpost+index+1}</th>
        <td>{post.data.Status.slice(0,10)}</td>
        <td>{post.data.lang}</td>
        
        <td><Link onClick={()=>{props.setCurrnetpost(post.data.data)}} to="/show">Details</Link></td>
        
        </tr>
))}
</tbody>
       </table>
    )
}

const mapdispatchtoprops  =dispatch=>{
    return {
        setCurrnetpost:(data)=>dispatch({type:"changepost",payload:data})
    }
    }
    

export default connect(null,mapdispatchtoprops)(Post);