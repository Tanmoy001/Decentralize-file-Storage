import Upload from './artifacts/contracts/Upload.sol/Upload.json'
import './App.css';
import { useState,useEffect } from 'react';
import { ethers } from 'ethers';
import FileUpload from './components/FileUpload/FileUpload';
import Modal from './components/Modal/Modal';
import Display from './components/display/Display';
import Homescreen from './components/homescreen/Homescreen';
import Info from './components/aboutus/Info';
import Footer from './components/footer/Footer';
import HowtoUpload from './components/upload/HowtoUpload';
function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)

    const loadProvider = async () => {
      if (provider) {
                window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);

        /* cntract address abi and provider or signer are required  */
        
        let contractAddress = "0x02c25b059b6A240D28C7F956C7154Cc58585A981";

        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);
  return (
    <>

    <div className='App'>
      <div className='home'>

      <Homescreen account={account}/>
{/*       <div className='bg'></div>
      <div className='bg bg2'></div>
      <div className='bg bg3'></div> */}
      {/* <p>Account :{account?account:"Not connected with metamsk"}</p> */}
      </div>
    <FileUpload
     account={account}
     provider={provider}
     contract={contract}
     />
     <div className='share_modal'>
        {!modalOpen && (<button className='share' onClick={()=>setModalOpen(true)}>Share</button>)}
   {(modalOpen &&( <Modal setModalOpen={setModalOpen} contact ={contract}/>))}
   </div>
    <Display contract={contract} account={account}></Display>
    </div>
    <Info/>
    <HowtoUpload/>
    <Footer/>
    </>
  );
}

export default App;
