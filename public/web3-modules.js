let web3

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    // Use MetaMask's provider
    web3 = new Web3(window.ethereum)
} else {
    // Fallback to a different provider (e.g., for server-side or non-MetaMask use)
    web3 = new Web3(new Web3.providers.HttpProvider('https://rpc.testnet.lukso.network'))
}

export default web3
