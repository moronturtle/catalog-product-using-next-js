import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "This is the Dashboard page.",
};

const DashboardPage = () => {
  return (
    <div>
      <main style={{ marginLeft: "250px", padding: "20px" }}>
        <h1>Welcome to the Dashboard</h1>
        <p>This is the dashboard content.</p>
      </main>
    </div>
  );
};

export default DashboardPage;
