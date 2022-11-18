import Airtable from "airtable";

Airtable.configure({
                     endpointUrl: process.env.REACT_APP_AIRTABLE_ENDPOINT,
                     apiKey: process.env.REACT_APP_AIRTABLE_API_KEY
                   });
const DataBase = Airtable.base(process.env.REACT_APP_AIRTABLE_DATABASE_ID);

export const getMembers = (setBase, setCurrent, setLoading) => {
  const members = [];
  DataBase('Organisations 🏢')
    .select({ maxRecords: 200, view: "Website Filtering View" })
    .eachPage((records, fetchNext) => {
      records.forEach((record) => {
        members.push(formatMember(record));
      });
      fetchNext();
    })
    .then(() => {
      setBase(members);
      setCurrent(members);
      setLoading(false);
    })
    .catch((error) => {
      console.error(error)
    });
}

const formatMember = (record) => {
  return {
    name: record.fields["Org Name"],
    website: record.fields["Website"],
    logo: record.fields["Logo"],
    topics: ( !!record.fields["Topics they work on"] ? record.fields["Topics they work on"] : [] ),
    approach: ( !!record.fields["Topics - how they engage"] ? record.fields["Topics - how they engage"] : [] ),
    diversity: ( !!record.fields["Diversity"] ? record.fields["Diversity"] : [] )
  }
}