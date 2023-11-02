import packageJson from "../package.json";

export async function getStaticProps() {
  return {
    props: {
      version: packageJson.dependencies.next,
    },
  };
}

export default function Home({ version }) {
  return (
    <div>
      <h1>Next version: {version}</h1>
    </div>
  );
}
