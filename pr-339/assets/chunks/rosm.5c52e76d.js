const e="https://rpc.rosm.rollkit.dev",c="https://rpc.rosm.rollkit.dev",s="rosm",n="Rollkit Cosmwasm Testnet",o={coinDenom:"ROSM",coinMinimalDenom:"urosm",coinDecimals:6},r={bech32PrefixAccAddr:"wasm",bech32PrefixAccPub:"wasmpub",bech32PrefixValAddr:"wasmvaloper",bech32PrefixValPub:"wasmvaloperpub",bech32PrefixConsAddr:"wasmvalcons",bech32PrefixConsPub:"wasmvalconspub"},i={coinType:118},a=[{coinDenom:"ROSM",coinMinimalDenom:"urosm",coinDecimals:6}],t=[{coinDenom:"ROSM",coinMinimalDenom:"urosm",coinDecimals:6}],m={low:.05,average:.125,high:.2},l=["stargate","no-legacy-stdTx","ibc-transfer"],u={rpc:e,rest:c,chainId:s,chainName:n,stakeCurrency:o,bech32Config:r,bip44:i,currencies:a,feeCurrencies:t,gasPriceStep:m,features:l};export{r as bech32Config,i as bip44,s as chainId,n as chainName,a as currencies,u as default,l as features,t as feeCurrencies,m as gasPriceStep,c as rest,e as rpc,o as stakeCurrency};
