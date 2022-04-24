import "./App.css";
import Layout from "./layouts";
import { Routes, Route } from "react-router-dom";
import { TestContainer } from "./containers";
import { routes } from "./constants";
import { Absence } from "./components";
import { LeaveRequest, AddRequest } from "./components";
import { LeaveRequestContainer } from "./containers";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="leave-request" element={<LeaveRequestContainer />}>
          <Route index element={<LeaveRequest />} />
          <Route path="add-request" element={<AddRequest />} />
        </Route>
        <Route path="" element={<TestContainer />}>
          <Route index element={<Absence />} />
          {routes.map(({ path, Component }) => (
            <Route path={path} element={<Component />} />
          ))}
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
