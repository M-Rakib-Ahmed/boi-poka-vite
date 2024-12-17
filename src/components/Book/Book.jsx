

const Book = ({book}) => {
    const {image, bookName, author, tags} = book
    return (
        <div className="card bg-base-100 w-96 shadow-xl p-6">
  <figure className="bg-[#F3F3F3] py-8 rounded-xl">
    <img className="h-[166px]"
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className="flex justify-center gap-5">
        {
        tags.map(tag => <button className="btn btn-xs bg-error text-white">{tag}</button>)
    }
    </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>By:{author}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    );
};

export default Book;