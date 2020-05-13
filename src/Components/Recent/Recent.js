import React, { useState,Component ,useEffect} from 'react'
import {connect} from "react-redux"
import "./recent.css"
import axios from "axios"
import Post from "./Post"
import Pagination from "./Pagination"


 function Recent(props) {
     
const [posts,setPosts]=useState([]);
const [loading,setLoading]=useState(false);
const [currentPage,setCurrentpage]=useState(1);
const [postPerpage,setPostperPAge]=useState(10);

useEffect(()=>{
    setCurrentpage(props.page)
    props.setcurentshow(props.page);
    const fetch=async()=>{
        setLoading(true);
        const res=await axios.get("https://codeblood-ac5c2.firebaseio.com/order.json")
      // console.log(res.data);
      //  const val=res.data.map()
      var arr=[]
    
Object.keys(res.data).map((key) => {
   // console.log(res.data[key])
  arr.push({"key":key,"data":res.data[key]});
});
    //  console.log("outsie ",arr);
      setPosts(arr);
      //  console.log(posts);
        setLoading(false);    
       
    }
    fetch();

},[]);

const indexoflastpost=currentPage*postPerpage;
const indexoffirstPost=indexoflastpost-postPerpage;
const currentPosts=posts.slice(indexoffirstPost,indexoflastpost);
const paginate=(number)=>{setCurrentpage(number);
props.setcurentshow(number);
}
//console.log(posts);
        return (
            <div className="recent_main container mt-5">
               <h2 className="text-primary mb-3"> ALl recent submissions</h2>
                
                 <Post posts={currentPosts} indexoflastpost={indexoflastpost-postPerpage} loading={loading}/>
                 <Pagination postperpage={postPerpage} paginate={paginate} totalposts={posts.length}/>

            </div>
        )
    }



//currentPage
const mapsispatch=(dispatch)=>{
    return {
        setcurentshow:(no)=>dispatch({type:"setcurentpaheno",payload:no})
    }
}

const mapa=(state)=>{
    return {
    page:state.cuurentpageno
    }
}
export default connect(mapa,mapsispatch)(Recent)


