import Head from 'next/head';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import { ProjectItem } from 'components/Porjects';
import { loadProjects } from 'lib/utils/fetch-projects';

const Portfolio = ({ PROJECTS, PROJECT }: any) => {
  return (
    <>
      <Head>
        <title>Sharif Hayudini | Portfolio</title>
        <meta
          name="description"
          content="Sharif Hayudini's porfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header PROJECT={PROJECT} />
      <main className="container">
        <section className="pt-8 md:px-16">
          <div className=" prose-base prose-stone dark:prose-invert w-full">
            <h2 className="text-2xl font-bold">
              Portfolio
            </h2>
            <hr className="border-1 my-6 w-full border-stone-300 dark:border-stone-700" />
            <p className="text-md my-4 font-semibold text-stone-500 dark:text-stone-400">
              {'//'} These are my favorite projects I&#39;ve
              worked on. Have a look around!
            </p>
            <hr className="border-1 my-6 w-full border-stone-300 dark:border-stone-700" />
          </div>
        </section>
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map(
            (project: { _id: any }, index: any) => {
              return (
                <ProjectItem
                  key={project._id}
                  project={project}
                  index={index}
                />
              );
            }
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  const data = await loadProjects();

  const PROJECTS = data.projects;
  const PROJECT = data.project;

  return {
    props: {
      PROJECTS,
      PROJECT,
    },
  };
}

export default Portfolio;
