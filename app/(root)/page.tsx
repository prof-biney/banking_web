import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { LogIn } from "lucide-react";
import React from "react";

export default function Home() {
  const loggedIn = {
    firstName: "Andrew",
    lastName: "Biney",
    email: "abiney1321@gmail.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome,"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={234250.55}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 5000.43 }, { currentBalance: 84724.23 }]}
      />
    </section>
  );
}
