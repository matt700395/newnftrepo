
import erc721Abi from "../erc721Abi";

function Erc721({web3, account,  erc721list }) {
    const [to, setTo] = useState("");
		const sendToken = async (tokenAddr, tokenId) => { }
		return (
		  <div className="erc721list">
		      {erc721list.map((token) => {
		          return (
		              <div className="erc721token">
		                  Name: <span className="name">{token.name}</span>(
		                  <span className="symbol">{token.symbol}</span>)
		                  <div className="nft">id: {token.tokenId}</div>
		                  <img src={token.tokenURI} width={300} />
		                  
                            <div className="tokenTransfer">
		                      To:{" "}
		                      <input
		                          type="text"
		                          value={to}
		                          onChange={(e) => {
		                              setTo(e.target.value);
		                          }}
		                      ></input>
		                      <button
		                          className="sendErc20Btn"
		                          onClick={sendToken.bind(
		                              this,
		                              token.address,
		                              token.tokenId
		                          )}
		                      >
		                          send Token
		                      </button>
		                  </div>
		              </div>
		          );
		      })}
		  </div>
		);


}

export default Erc721;