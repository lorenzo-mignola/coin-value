export const getCoin = () =>
  fetch(
    'https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false'
  ).then(res => res.json());
