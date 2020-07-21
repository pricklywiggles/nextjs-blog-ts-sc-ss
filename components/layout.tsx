import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import { Img, H1, H2, A } from "./styled";

const name = "Filiberto Mascarpone";
export const siteTitle = "Next.js Sample Website";

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, home }) => (
  <Container>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Learn how to build a personal website using Next.js"
      />
      <meta
        property="og:image"
        content={`https://og-image.now.sh/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <Header>
      {home ? (
        <>
          <HeaderHomeImage src="/images/profile.jpg" shape="circle" alt={name} />
          <H1 size="xxl">{name}</H1>
        </>
      ) : (
        <>
          <Link href="/">
            <a>
              <HeaderImage src="/images/profile.jpg" shape="circle" alt={name} />
            </a>
          </Link>
          <H2 size="lg">
            <Link href="/">
              <A color="inherit">{name}</A>
            </Link>
          </H2>
        </>
      )}
    </Header>
    <main>{children}</main>
    {!home && (
      <BackHome>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </BackHome>
    )}
  </Container>
);

const Container = styled.div`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderHomeImage = styled(Img)`
  width: 8rem;
  height: 8rem;
`;

const HeaderImage = styled(Img)`
  width: 6rem;
  height: 6rem;
`;

const BackHome = styled.div`
  margin: 3rem 0 0;
`;

export default Layout;
