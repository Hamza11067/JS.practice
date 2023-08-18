import Navbar from './components/Navbar';
import Subnav from './components/Subnav';
import Header from './components/Header';
import Properties from './components/Properties';
import Contact from './components/Contact';
import Agencies from './components/Agencies';
import AppSection from './components/AppSection';
import CustomerService from './components/CustomerService';
import Footer from './components/Footer';
import RecentlyViewed from './components/RecentlyViewed';


function App() {
  return (
    <>
    <Navbar/>
    <Subnav/>
    <Header/>
    <Properties/>
    <Contact/>
    <RecentlyViewed/>
    <Agencies/>
    <CustomerService/>
    <AppSection/>
    <Footer/>
    </>
  );
}

export default App;
