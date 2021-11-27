require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan rival maze hospital include arch metal gas'; 
let testAccounts = [
"0xffffd9870dbb9c8593d1ed4caa88620252477a51675fd02efe233a03b78b5024",
"0x1fede577aec3c21c5d3574c34e6aa68507d85717909aa40f17934778b7b8c6cc",
"0x018d0f3a9b43a65885edecd9294200d83bddab793c41419b5728014db129ab66",
"0x729a84965ece0f160287ead52ee05c6e7eb02bd3e53d18a75fdaba04602e694f",
"0x2140016f09b451f5746b59262ea615f7097f66d9c7c9d9e3ec9e0873f5d85620",
"0xe520d9796bff89bfa0ee0df5a6039a24ed5b14cfce2641b7094807c54942d33c",
"0x40ed2e8ce28aa1eed2a3f4a08269eb9b92c1bc16bd549951dac7d587c61d2607",
"0x0349a74c89feba3a38d24b813216eb59364293ea77c448a42edeaba9873cfe59",
"0xdc4854f129eac7a71e37a40db2f76fecf0863bffc578cf903711ed2dc4bceae6",
"0x714def2d4bfa61c45a8b632c5d89b22cbb38683f4297ac5effaf59978b767d8e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

