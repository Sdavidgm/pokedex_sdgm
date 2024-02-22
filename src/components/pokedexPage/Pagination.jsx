import React from 'react';
import './styles/pagination.css';

const Pagination = ({totalPosts, postsPerPage, setCurrentPage, currentPage, maxPageNumberLimit, minPageNumberLimit, setMaxPageNumberLimit, setMinPageNumberLimit,  pagesNumberLimit, setPagesNumberLimit}) => {
    let pages = [];
        for (let i = 1; i<= Math.ceil(totalPosts/postsPerPage); i++){
            pages.push(i)
        }
        
        
        const renderPageNumber = pages.map((page, index)=>{
           if (page < maxPageNumberLimit+1 && page > minPageNumberLimit){
            return(
                <li key={index}  onClick={()=>setCurrentPage(page)} className={page == currentPage ?'active':''}> 
                    {page}
                </li>
            )

           }else{
            return null;
           }
        });

        const handleNext =()=>{
            setCurrentPage(currentPage+1);
            if (currentPage+1>maxPageNumberLimit){
                setMaxPageNumberLimit(maxPageNumberLimit + pagesNumberLimit);
                setMinPageNumberLimit(minPageNumberLimit+pagesNumberLimit);
            }
        }
        const handlePrev =()=>{
            setCurrentPage(currentPage-1);
            if ((currentPage-1)%pagesNumberLimit==0){
                setMaxPageNumberLimit(maxPageNumberLimit - pagesNumberLimit);
                setMinPageNumberLimit(minPageNumberLimit-pagesNumberLimit);
            }
        }
        let pageIncrement = null;
        if(pages.length>maxPageNumberLimit){
            pageIncrement =<li onClick={handleNext}>&hellip;</li>
        }
        let pageDecrement = null;
        if(minPageNumberLimit>=1){
            pageDecrement =<li onClick={handlePrev}>&hellip;</li>
        }

  return (
    <div className='pagination'>
    
        <button onClick={handlePrev} disabled={currentPage==pages[0] ? true : false }><ion-icon name="play-back-outline"></ion-icon></button>
        {pageDecrement}
        {renderPageNumber} 
        {pageIncrement}
        <button onClick={handleNext} disabled={currentPage==pages[pages.length - 1] ? true : false }><ion-icon name="play-forward-outline"></ion-icon></button>     
    </div>
    )

  }

export default Pagination;