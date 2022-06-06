import SingleContactHeader from "../../comps/Headers/SingleContactHeader";
import SingleContactInfos from "../../comps/Content/SingleContactInfos";

const Contact = ({ contact }) => (
    <>
      <SingleContactHeader />

      <SingleContactInfos contact={contact} />
    </>
  );

export default Contact;

export async function getStaticProps({ params }) {
  // ? fetch one result based on id
  const contact = await fetch(
    `http://localhost:3000/api/contacts/${params.id}`
  ).then((res) => res.json());

  return {
    props: { contact },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
