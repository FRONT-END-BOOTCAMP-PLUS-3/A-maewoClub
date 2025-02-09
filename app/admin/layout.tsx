"use client";

import AdminFooter from "@/components/footer/adminFooter/adminFooter";
import AdminHeader from "@/components/header/adminHeader/adminHeader";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AdminHeader />
      {children}
      <AdminFooter />
    </>
  );
};

export default AdminLayout;
