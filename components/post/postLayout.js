import { Header } from "./postHeader";
import { Footer } from "./postFooter";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
