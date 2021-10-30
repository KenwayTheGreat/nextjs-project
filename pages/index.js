import { server } from "../config";
import ArticleList from "../Components/ArticleList";

export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const result = await fetch(`${server}/api/articles`);
  const articles = await result.json();

  return {
    props: {
      articles,
    },
  };
};

// export const getStaticProps = async () => {
//   const result = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await result.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };
