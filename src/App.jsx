import { useState } from 'react';
import './assets/css/style.css';
import Header from './components/Header';
import ServicesList from './components/ServicesList';
import AboutTransport from './components/AboutTransport';
import ContactUs from './components/ContactUs';
import CallbackModal from './components/CallbackModal';
import Footer from './components/Footer';

function App() {
  const [modal, setModal] = useState(null);
  const changeModal = () => {
    console.log("!!!!!!!!!!!!!!!!!!!")
    setModal(<CallbackModal changeModalClose={changeModalClose} />);
  };
  const changeModalClose = () => {
    setModal(null);
  };


  return (
    <>
      <Header changeModal={changeModal}/>
      {modal}
      <ServicesList />
      <AboutTransport />
      <ContactUs />
      <Footer/>
    </>
  );
}

export default App;
