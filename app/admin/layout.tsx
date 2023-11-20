export const metadata = {
  title: "E-Shop Admin",
  description: "E-Shop Admin Dashboard",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>Nav</div>
      {children}
    </div>
  );
};

export default AdminLayout;
