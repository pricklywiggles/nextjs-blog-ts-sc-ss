import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import { TextBox, UnorderedList, ListItem } from "../components/styled";
import { GetStaticProps } from "next";
import { PostMetaData } from "../lib/interfaces";

interface HomeProps {
  allPostsData: Array<PostMetaData>;
}

export const Home: React.FC<HomeProps> = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>…</Head>
      <section>
        <h2>Blog</h2>
        <UnorderedList>
          {allPostsData.map(({ id, date, title }) => (
            <ListItem key={id}>
              <Link href={"/posts/[id]"} as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <TextBox size="sm" color="lightText">
                <Date dateString={date} />
              </TextBox>
            </ListItem>
          ))}
        </UnorderedList>
      </section>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
};
