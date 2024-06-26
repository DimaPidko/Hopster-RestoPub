import Header from '../../ui/header/Header';
import Footer from '../../ui/footer/Footer';
import ContactsBlock from '../../ui/contacts/ContactsBlock';

const Contacts = () => {
    return (
        <>
            <Header />
            <ContactsBlock />
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d764.2856839155713!2d36.06956392716905!3d49.884902130071815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41279dec3bb55b97%3A0x21d16f550f2a0ba7!2sHopster%20Brewery!5e0!3m2!1sru!2sua!4v1713434935185!5m2!1sru!2sua"
                frameBorder="0"
                width="100%"
                height="800px"></iframe>
            <Footer />
        </>
    );
};

export default Contacts;
