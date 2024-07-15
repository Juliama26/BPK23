import Footer from "./Footer";
import Header from "./Header";

export default function Informasi(props) {
  const {children, title, clasName} = props;

  return (
    <>
      <Header />
      <section
        className={`${clasName} text-center text-2xl md:text-3xl py-14 md:py-28 mb-5 md:mb-10 bg-gradient-to-tr from-50 to-200`}>
        {title}
      </section>
      <main>{children}</main>
      <Footer />
    </>
  );
}
