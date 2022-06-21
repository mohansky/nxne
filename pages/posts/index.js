import { Container } from "react-bootstrap";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import PostItem from "../../components/posts/post-item";

export default function PostIndex({ allPosts }) {
  // const morePosts = allPosts.slice(1)
  return (
    <>
      <Head>
        <title>Posts | {CMS_NAME}</title>
      </Head>
      <Container>
        <PostItem posts={allPosts} />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
