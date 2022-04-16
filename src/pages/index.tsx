import type { NextPage } from 'next';
import Head from 'next/head';
import About from 'components/About';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import { loadProjects } from 'lib/utils/fetch-projects';

const Home: NextPage = ({ PROJECTS }: any) => {
  return (
    <>
      <Head>
        <title>Sharif Hayudini | Homepage</title>
        <meta
          name="description"
          content="Sharif Hayudini's porfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header PROJECTS={PROJECTS} />
      <About />
      <Footer />
    </>
  );
};
export async function getServerSideProps() {
  const data = await loadProjects();

  const PROJECTS = data.projects;

  return {
    props: {
      PROJECTS,
    },
  };
}
export default Home;
