const web3 = new Web3(window.ethereum)

// Now you can use the web3 object in your client-side code

const accountsRequest = await web3.eth.requestAccounts()
const accounts = await web3.eth.getAccounts()
// const upAddress = accounts[0]
const upAddress = '0x3f0350eafc25cc9185a77394b7e2440ec002e466' // = /0
console.log(upAddress)

// 0x3F0350EaFc25Cc9185a77394B7E2440ec002e466

const domain = window.location.host // = /1  ?
const origin = window.location.origin
const LUKSO_L16_CHAIN_ID = '4201'
const nonce = 'm97bdsjo' // a randomized token, at least 8 alphanumeric characters
const date = new Date()
const issuedAt = date.toISOString()

const siweMessage = `${domain} wants you to sign in with your Ethereum account:

${upAddress}

By logging in you agree to the terms and conditions.

URI: ${origin}
Version: 1
Chain ID: ${LUKSO_L16_CHAIN_ID}
Nonce: ${nonce}
Issued At: ${issuedAt}
Resources:
- https://terms.website.com`

const signature = await web3.eth.sign(siweMessage, upAddress)
// 0x38c53...

let UniversalProfileContract

try {
    const response = await fetch('@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json')
    UniversalProfileContract = await response.json()
} catch (error) {
    console.error('Error fetching UniversalProfileContract:', error)
}

// Ensure UniversalProfileContract is defined before using it
if (UniversalProfileContract) {
    // Rest of your code that uses UniversalProfileContract
} else {
    // Handle the case where the JSON fetch failed
    console.error('Failed to fetch UniversalProfileContract')
}

// ...

const myUniversalProfileContract = new web3.eth.Contract(UniversalProfileContract.abi, upAddress)

const hashedMessage = web3.eth.accounts.hashMessage(siweMessage)

const MAGIC_VALUE = '0x1626ba7e' // https://eips.ethereum.org/EIPS/eip-1271

// if the signature is valid it should return the magic value 0x1626ba7e
const isValidSignature = await myUniversalProfileContract.methods.isValidSignature(hashedMessage, signature).call()

if (isValidSignature === MAGIC_VALUE) {
    console.log('🎉 Log In successful!')
} else {
    // The EOA which signed the message has no SIGN permission over this UP.
    console.log('😭 Log In failed')
}
