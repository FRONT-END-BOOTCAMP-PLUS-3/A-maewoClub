import Footer from "@/components/footer/footer";
import { Header } from "@/components/header/header";

const AnonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AnonLayout;