require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kitten bone tooth finger deliver remind mixture harvest crime outer timber'; 
let testAccounts = [
"0x45bdf21787c6eeb051d5fcf5256edf01c09b00cc1657dce4a2dd4c700980c910",
"0x1edea50055c6d4a9c1c81b04c28a3a4638b83323b6e10c36fbdffa53351ea66f",
"0xe2d1eb61973a453ec7e3d94c8bbcb1612e601a7f34a3e8ed80b11788aa918811",
"0x58af0d87d18848adc08c3c804b5948784a52617ae8740b4de8a35596bc21d479",
"0x04bf92ea745472831222393cdd1a9c23faf2a919e0bf86016f6c1ed2afcf3597",
"0x6917183ae7769026e81920b7bf047719156abe73eb44fd58013a4a89d597ed62",
"0x58edaa35c7527316e4d67a6754f3c431238d72f29dfe1d52cd3a3ee90662934b",
"0xeee3f5effdf2561340efb6466d185299f923fcc78edf2a4412350502a6a2feb2",
"0x38849967689078e96b4b8d94f65987fa1ceed3a2af2f648e5fac9c2b185790c6",
"0xb2d3a0436478c34a7df18ac1ca07a05f88579d26254cc8d419ea53a6715462b1"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

