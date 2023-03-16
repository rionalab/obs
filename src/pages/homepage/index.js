import Header from "components/Header";
import Sidebar from "components/Sidebar";
import { AuthContext } from "context/AuthContext";
import React from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const { user } = React.useContext(AuthContext);
  const navigate = useNavigate();
  React.useEffect(() => {
    !user && navigate("/");
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="content">
        <h3> Welcome {user}</h3>
      </div>
    </div>
  );
}

export default Homepage;
