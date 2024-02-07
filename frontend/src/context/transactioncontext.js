import React, {useEffect,useState} from 'react';
import {ethers} from 'ethers'
import {ContractABI,contractAddress} from '../utils/constants'

export const TransactionContext=React.createContext();

const {ethereum}=window;

const getEthereumContract = async () => {
    if (ethereum) {
        const provider = new ethers.BrowserProvider(ethereum)
        const signer = await provider.getSigner()
        const transactionContract = new ethers.Contract(contractAddress, ContractABI, signer)
        console.log({
            provider,
            signer,
            transactionContract,
        });
        return transactionContract
    }
    return null
}

export const TransactionProvider=({children})=>{

    const[currentAccount,setCurrentAccount]=useState('')
    const[formData,setformData]=useState({addressTo:'',amount:'',keyword:'',message:''});
    const [isLoading,setisLoading]=useState(false);
    const [transactionCount,settransactionCount]=useState(localStorage.getItem( "transactionCount"));

    const handleChange = (e, name) => {   
        setformData(prevState => ({
            ...prevState,
            [name]: e.target.value
        }));
    }
    

    const CheckWalletConnection=async()=>
    {
        try{
            if(!ethereum)
            return alert("Please install metamask");
            const accounts=await ethereum.request({method:'eth_accounts'});
            
            if(accounts.length)
            {
                setCurrentAccount(accounts[0]);
    
                // getAllTransactions();
            }
            else{
                console.log("No accounts found");
            }
        }
        catch(error)
        {
            console.log(error);
            throw new Error("No Eth Object");
        }
       
    }

    const ConnectWallet=async()=>{
        try{
            if(!ethereum)
            return alert("Please install metamask");

            const accounts=await ethereum.request({method:'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);
        }
        catch(error)
        {
            console.log(error);
            throw new Error("No Eth Object");
        }
    }

    const sendTransaction=async  () =>{
        try {
            if(!ethereum)
            return alert("Please install metamask");

            //get the data from the forms in payment
            const{addressTo,amount,keyword,message}=formData; 
            console.log(formData);
            const transactionContract=getEthereumContract()
            const parsedAmount=ethers.parseEther(amount)

            await ethereum.request({
                method:'eth_sendTransaction',
                params:[{
                    from:currentAccount,
                    to:addressTo,
                    gas:'0x5208',
                    value:parsedAmount._hex

                }]
            })
            const transactionHash=await transactionContract.addToBlockchain(addressTo,parsedAmount,message,keyword);

            setisLoading(true);
            console.log(`Loading-${transactionHash.hash}`);
            await transactionHash.wait();
            setisLoading(false);
            console.log(`Success-${transactionHash.hash}`);

            const transactionCount=await transactionContract.getTransactionCount();

            settransactionCount(transactionCount.toNumber());

        } 
        catch (error) {
            console.log(error);
            throw new Error("No Eth Object");   
        }
    
    }

    useEffect(()=>
    {
        CheckWalletConnection();
    },[])

    return(
        <TransactionContext.Provider value={{ConnectWallet,currentAccount,setformData,formData,handleChange,sendTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}
