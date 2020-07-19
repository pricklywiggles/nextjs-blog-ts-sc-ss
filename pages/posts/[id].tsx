import Layout from "../../components/layout";
import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import { H1, TextBox } from "../../components/styled";
import { GetStaticProps, GetStaticPaths } from "next";

interface PostProps {
  postData: {
    date: string;
    title: string;
    contentHtml: string;
  };
}

export const Post: React.FC<PostProps> = ({ postData }) => (
  <Layout home={false}>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <article>
      <H1 size="xl">{postData.title}</H1>
      <TextBox size="sm" color="lightText">
        <Date dateString={postData.date} />
      </TextBox>
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  </Layout>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) throw new Error("Params expected");
  const postData = await getPostData(params.id as string);
  return { props: { postData } };
};

export default Post;
