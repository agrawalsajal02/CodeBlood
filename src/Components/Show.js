import React from 'react'
import {connect} from "react-redux" 
import {Link} from "react-router-dom"
import Modal from "react-modal"
import ReactHtmlParser from "react-html-parser"
function Show(props) {
    return (
        <div  className="show"><h2>{console.log("httht",props)}</h2>
            <Modal isOpen={props.data==null?0:1}>
           <div style={{textAlign:"center"}}><h2>Details of submission</h2></div>
           <div style={{margin:"20px"}}>
           <p style={{"white-space":"pre-line"}}>{props.data}</p>
           </div>
            {console.log()}
           <div>
               <Link to="recent" className="btn  btn-lg active   btn-primary ml-5 mb-5" onClick={()=>props.setcurentshow()}>Back</Link>
           </div>
            </Modal>
        </div>

    )
}

const mapprops  =state=>{
    return {
   
   data:state.currentdetails
    }
    }
    const mapsispatch=(dispatch)=>{
        return {
            setcurentshow:()=>dispatch({type:"setcurentshow"})
        }
    }
    

export default connect(mapprops,mapsispatch)(Show)
