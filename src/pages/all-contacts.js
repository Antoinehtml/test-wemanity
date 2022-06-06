import AllContactsHeader from "../comps/Headers/AllContactsHeader";
import AllContactsContent from "../comps/Content/AllContactsContent";

const AllContacts = ({ contacts }) => (
    <>
      <AllContactsHeader numberContacts={contacts.contacts.length} />

      <AllContactsContent contacts={contacts.contacts} />
    </>
  );

export default AllContacts;

export async function getStaticProps() {
  const contacts = await fetch("http://localhost:3000/api/contacts/").then(
    (res) => res.json()
  );

  return {
    props: { contacts },
    revalidate: 3600,
  };
}
