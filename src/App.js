import './App.css';

import Form from './components/Form';
import Filter from './components/Filter';
import ContactsList from './components/ContactsList';

const App = () => {
  return (
    <div className="App">
      <h1 className="main-title">Phonebook</h1>
      <Form />

      <h2 className="title">Contacts</h2>

      <Filter />
      <ContactsList />
    </div>
  );
};

export default App;
