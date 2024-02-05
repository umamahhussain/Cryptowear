// https://eth-sepolia.g.alchemy.com/v2/9dI-XuR5qeX3ewAxaIT_X7tvG_qwfvuB

require('@nomiclabs/hardhat-waffle')

module.exports=
{
  solidity:'0.8.4',
  networks:{
    sepolia:{
      url:'https://eth-sepolia.g.alchemy.com/v2/9dI-XuR5qeX3ewAxaIT_X7tvG_qwfvuB',
      accounts:['73bfd7b378874040d6e95693c3f35c5f776791492b3008abd00db59ea6c47c17']
    }
  }
}