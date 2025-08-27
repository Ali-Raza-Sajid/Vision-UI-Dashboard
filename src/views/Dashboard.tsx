import { Fragment } from "react";
import DailyActivity from "../component/DailyActivity";
import WelcomeRow from "../component/WelcomeRow";
import OrdersOverview from "../component/OrdersOverview";
import Chart from "../component/Chart";

const Dashboard = () => {
  return (
    <Fragment>

      <DailyActivity/>
      <WelcomeRow />
      <Chart/>
      <OrdersOverview/>
    </Fragment>
  );
};

export default Dashboard;
