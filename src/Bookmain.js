const Book = ({ author, title, img, number }) => {
  const displayTitle = () => {
    console.log(title);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayTitle}>Display Title On Console</button>
      <span className="number">{`#${number + 1}`}</span>
      <h4>{author} </h4>
    </article>
  );
};
export default Book;
