import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import List from "../components/List";
import Spinner from "../components/Spinner";

export default function Posts({ url }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  let { userId } = useParams();

  useEffect(
    function () {
      async function fetchPosts() {
        try {
          setIsLoading(true);
          const res = await fetch(`${url}/users/${userId}/posts`);
          const data = await res.json();
          setPosts(data);
        } catch {
          console.log("Some error...");
        } finally {
          setIsLoading(false);
        }
      }

      fetchPosts();
    },
    [url, userId]
  );

  if (isLoading) return <Spinner />;

  return (
    <main>
      <section>
        <button className="btn back" onClick={() => navigate(-1)}>
          &larr; Back
        </button>
        <List type="posts" items={posts} />
      </section>
    </main>
  );
}
