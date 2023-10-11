import React from "react";

function CategoryFilter( {chosenId, handleSelect, categories}) {
  let data = categories || []

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {data.map((item, i)=>{
        return <button 
        key={i} 
        onClick={()=> handleSelect(item)} 
        className={item === chosenId ? "selected" : null}>{item}</button>
      })}
    </div>
  );
}

export default CategoryFilter;

