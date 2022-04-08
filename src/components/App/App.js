import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactsList/ContactList";
import Filter from "../Filter/Filter";
import { PrimaryTitle, SecondaryTitle } from "./App.styled";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [filter, setFilter] = useState("");

  const handleFilter = (e) => {
    setFilter(e.target.value);
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
      <ContactForm />
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter onChange={handleFilter} value={filter} />
      <ContactList />
    </>
  );
}

export default App;
