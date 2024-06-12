import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Raji",
    lastName: "DevMind",
    email: "iopeyemi621@gmail.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions effeiciently"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.43}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <div>
        <RightSideBar
          user={loggedIn}
          transactions={[]}
          banks={[{ currentBalance: 213.21 }, { currentBalance: 545.1 }]}
        />
      </div>
    </section>
  );
};

export default Home;
