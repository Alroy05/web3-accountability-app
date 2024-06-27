import { ConnectEmbed } from "@/app/thirdweb";
import { Accountability } from "../../components/Accoutability";
import { client } from "./client";
import { chain } from "./chain";

export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    }}>
      <h1 style={{ marginBottom: "20px" }}>Accountability App</h1>
      <ConnectEmbed 
        client={client}
        chain={chain}
      />
      <Accountability />
    </div>
  );
}
