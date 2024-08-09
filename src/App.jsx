import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import GrowTogether from "./Components/GrowTogether";
import FlowingConversations from "./Components/FlowingConversations";
import YourUser from "./Components/YourUser";

export default function App() {
  return (
    <div className="w-full h-full felx flex-col items-center justify-center">
      <Nav />
      <Header />
      <GrowTogether />
      <FlowingConversations />
      <YourUser />
    </div>
  );
}
