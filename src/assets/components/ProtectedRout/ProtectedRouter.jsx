import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../DataPrivider/DataProvider";

function ProtectedRouter({ children, msg, redirect }) {
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/auth", { state: { msg, redirect } });
    }
  }, [user]);

  return children;
}

export default ProtectedRouter;
