import Head from "next/head";
import ArticleList from "../Components/ArticleList";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Web Dev Newz</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await result.json();

  return {
    props: {
      articles,
    },
  };
};
