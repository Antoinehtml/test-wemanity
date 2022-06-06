import EditContactHeader from "../../comps/Headers/EditContactHeader";
import EditEntryForm from "../../comps/Forms/EditEntryForm";

const EditEntry = ({ contact }) => (
  <>
    <EditContactHeader />

    <EditEntryForm contact={contact} />
  </>
);

export default EditEntry;

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
