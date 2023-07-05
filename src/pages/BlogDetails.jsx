import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const BlogDetails = () => {
  const params = useParams();
  console.log(params.id);

  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (loading) {
    return <p>Loading data ...</p>;
  }
  if (error) {
    <p>Error...</p>;
  }

  return (
    <>
      <div className="container">
        <h1>Blog details</h1>
        <h2>
          {data.id}.- {data.title}
        </h2>
        <p>{data.body}</p>
        <Link className="btn btn-outline-primary bg-dark" to="/blog">
          Volver al Blog
        </Link>
      </div>
    </>
  );
};

export default BlogDetails;
