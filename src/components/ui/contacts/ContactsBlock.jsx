const Contacts = () => {
    return (
        <section className="contacts">
            <h2 className="contacts-title">Наші контакти</h2>
            <address className="contacts__address">
                Харківська область, м. Південне <br />
                вул. Українська 50
            </address>
            <div className="contacts__phone">
                <a
                    className="contacts__phone-num"
                    href="tel:+380503000719">
                    +38-(050)-300-07-19
                </a>
            </div>
        </section>
    );
};

export default Contacts;
