const testnetTokensList = [
  {
    address: "0x0000000000000000000000000000000000000000",
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
    icon: "https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628",
    disable: false,
  },
  {
    address: "0x4200000000000000000000000000000000000006",
    name: "Wrapped Ether",
    symbol: "WETH",
    decimals: 18,
    icon: "https://assets.coingecko.com/coins/images/2518/standard/weth.png?1696503332",
    disable: false,
  },

  {
    address: "0x6c0D5cA58f98478F9333c20F6AE9a1ce53B9A4F1",
    name: "USDT",
    symbol: "USDT",
    decimals: 6,
    icon: "https://assets.coingecko.com/coins/images/325/standard/Tether.png?1696501661",
    disable: false,
  },
  {
    address: "0x913f555E9F6C7797de1754105CA44E13d1738e85",
    name: "TEST",
    symbol: "TEST",
    decimals: 18,
    icon: "https://athene.network/api/v1.0/icon/tokens/ATH.png",
    disable: false,
  },
];

const mainnetTokensList = [];

const tokensList =
  process.env.NEXT_PUBLIC_NETWORK == "mainnet"
    ? mainnetTokensList
    : testnetTokensList;
