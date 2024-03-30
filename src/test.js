const { FhenixClient } = require('fhenixjs');
const { JsonRpcProvider } = require('ethers');

// initialize your web3 provider
const provider = new JsonRpcProvider('https://test01.fhenix.zone/evm');

// initialize Fhenix Client
const client = new FhenixClient({provider});

// to encrypt data for a Fhenix contract
// Note: In a Node.js environment, top-level `await` is not allowed. Use an async function instead.
async function encryptData() {
    let encrypted = await client.encrypt(5, 'uint8'); // Assuming 'EncryptionTypes.uint8' is meant to be a string
    console.log(encrypted);
}

encryptData().catch(console.error);
