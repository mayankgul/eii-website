import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    document.title = "EII | IIT Gandhinagar";
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};
