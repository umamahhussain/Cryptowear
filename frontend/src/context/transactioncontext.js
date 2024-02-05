import React, {useEffect,useState} from 'react';
import {ethers} from 'ethers'
import {ContractABI,contractAddress} from '../utils/constants'

export const TransactionContext=React.createContext();

const {ethereum}=window;

const getEthereumContract=()=>
{
    const provider = new ethers.BrowserProvider(ethereum)
    const signer= provider.getSigner();
    const transactionContract= new ethers.Contract(contractAddress,ContractABI,signer)

}

export const TransactionProvider=({children})=>{
    return(
        <TransactionContext.Provider value={{}}>
            {children}
        </TransactionContext.Provider>
    )
}
