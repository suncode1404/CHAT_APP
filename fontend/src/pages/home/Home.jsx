import React from "react";
import Slidebar from "../../components/slidebar/Slidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Slidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
