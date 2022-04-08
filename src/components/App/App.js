import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { contacts as contactsSelector } from "../../redux/PhoneBook/selectors";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactsList/ContactList";
import Filter from "../Filter/Filter";
import { PrimaryTitle, SecondaryTitle } from "./App.styled";
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [___contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const contacts = useSelector(contactsSelector);

  const [filter, setFilter] = useState("");

  const notify = (name) => toast(`${name} is already in contacts`);

  const addContact = (name, number) => {
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? notify(newContact.name)
      : setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    return setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const visibleContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "red",
            color: "#000",
          },
        }}
      />
      <PrimaryTitle>Phonebook</PrimaryTitle>
      <ContactForm onSubmit={addContact} />
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter onChange={handleFilter} value={filter} />
      <ContactList contacts={visibleContacts()} deleteId={deleteContact} />
    </>
  );
}

export default App;
