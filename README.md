# With Express  |  simplest server!

This is meant for connecting a browser page with the UP browser extension.

As of 9/17/2023 documentation on Lukso developement is hard to come by an transitional (testnetL16 ->>  Testnet). Therefore I have paused developement on this for now.

```const accountsRequest = await web3.eth.requestAccounts()
const accounts = await web3.eth.getAccounts()
const upAddress = accounts[0]```   Currently does NOT get the right account for interaction/ validation of the UP.

Hardcoding the Address also does not seem to work. This uses SIWE (singn in with ethereum).
See cient.js for logic code.  Latest error I'm stuck on:
"Uncaught o: Web3 validator found 1 error[s]:
value "localhost:3000 wants you to sign in with your Ethereum account:

0x3f0350eafc25cc9185a77394b7e2440ec002e466

By logging in you agree to the terms and conditions.

URI: http://localhost:3000
Version: 1
Chain ID: 4201
Nonce: m97bdsjo
Issued At: 2023-09-17T07:23:43.632Z
Resources:
- https://terms.website.com" at "/1" must pass "hex" validation"

# connecting with Metamask DOES work, so maybe conflicts***






