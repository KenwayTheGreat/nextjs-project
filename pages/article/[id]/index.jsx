import { useRouter } from "next/router";
import Link from "next/link";

function article({ article }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await result.json();

  return {
    props: {
      article,
    },
  };
};

export default article;
