import React from 'react';

const Book = (props) =>{
    const {img, title, author} = props;
    const eventHandler = (author) => {
      console.log(author);
    }
    return (
      <article className='book'>
      <img src={img} alt=''/>
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button type="button" onClick={()=>eventHandler(author)}> click here</button>
      </article>
    )
  }

  export default Book