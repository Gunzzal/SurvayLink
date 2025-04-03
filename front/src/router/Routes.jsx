import { Routes, Route } from "react-router-dom";
import RouterList from "./RouterList";

function AppRoutes() {
  return (
    <Routes>
      {RouterList.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
    </Routes>
  );
}

export default AppRoutes;