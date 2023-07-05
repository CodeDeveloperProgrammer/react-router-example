import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
/* 
  useEffect(() => {
    console.log(searchParams.get);
    setSearchParams({filter: "ramon"})
  }, [searchParams]); */

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) {
    return <p>Loading data ...</p>;
  }
  if (error) {
    <p>Error...</p>;
  }

  const handleChange = (e) => {
    //console.log("e.target.value");
    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter: filter });
    } else {
      setSearchParams({});
    }
  };

  return (
    <>
      <h1>Pagina de Blog</h1>
      <input
        className="form-control my-3"
        type="text"
        name=""
        value={searchParams.get("filter") || ""}
        onChange={handleChange}
      />
      <ul className="list-group">
        {
          data
          .filter((item) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = item.title.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
        .map((item) => (
          <Link
            to={`/blog/${item.id}`}
            key={item.id}
            className="list-group-item"
          >
            {item.id}.- {item.title}
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Blog;
