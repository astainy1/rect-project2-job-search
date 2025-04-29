const Footer = () => {
  return (
    <>
      <section className="footer-container">
        <footer className="bg-teal-900 mx-auto max-w-9xl px-2 py-6 sm:px-6 lg:px-8 text-center mb-0 text-white">
          <p>
            System Developed by:
            <a
              href="mailto:astainyharris1@gmail.com"
              className="hover:text-teal-200 hover:leading-0.5"
            >
              {" Astainy "}
            </a>
          </p>
        </footer>
      </section>
    </>
  );
};

export default Footer;
