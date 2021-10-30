import { server } from "../../../config";
import { useRouter } from "next/router";
import Link from "next/link";
import Meta from "../../../Components/meta";

function article({ article }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
}

export const getStaticProps = async (context) => {
  const result = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await result.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const result = await fetch(`${server}/api/articles`);
  const articles = await result.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps = async (context) => {
//   const result = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await result.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const result = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
//   const articles = await result.json();
//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

export default article;
