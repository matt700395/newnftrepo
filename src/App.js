import "./App.css";
import { useState, useEffect } from "react";
import Web3 from "web3";

function App() {
  const [account, setAccount] = useState("");
  const [web3, setWeb3] = useState();

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {// window.ethereum이 있다면
      try {
        const web = new Web3(window.ethereum); // 새로운 web3 객체를 만든다
        setWeb3(web);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  const connectWallet = async () => {
    // 메타마스크 지갑과 연결된 계정 정보를 받는 JSON-RPC Call API
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setAccount(accounts[0]);
  };

  return (
    <div className="App">
      <button
        className="metaConnect"
        onClick={() => {
          connectWallet();
        }}>
        connect to MetaMask
      </button>
      {/* // 연결된 계정 주소를 화면에 출력합니다 */}
      <div className="userInfo">주소: {account}</div>
    </div>
  );
}

export default App;
