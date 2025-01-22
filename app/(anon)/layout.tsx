import { Header } from "@/components/header/header";

const AnonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}

    </>
  );
};

export default AnonLayout;