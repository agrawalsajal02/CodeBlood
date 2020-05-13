import React from 'react'

function Pagination({postperpage,totalposts,paginate}) {
    const pagenumber=[];
    for(let i=1;i<=Math.ceil(totalposts/postperpage);i++){
        pagenumber.push(i);
    }
    return (
        <nav>
        <ul className="pagination">
            {pagenumber.map(number=>(
                <li key={number} className="page-item">
                    <div onClick={()=>paginate(number)} href="!#" className="page-link" style={{"cursor":"pointer"}}>
                        {number}
                    </div>
                </li>
            ))}
        </ul>
        </nav>
    )
}

export default Pagination
