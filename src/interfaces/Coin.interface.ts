// Generated by https://quicktype.io

export interface Coin {
  id: string;
  symbol: string;
  name: string;
  block_time_in_minutes: number;
  hashing_algorithm: string;
  categories: string[];
  additional_notices: any[];
  description: Description;
  links: Links;
  image: Image;
  country_origin: string;
  genesis_date: string;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  market_cap_rank: number;
  coingecko_rank: number;
  coingecko_score: number;
  developer_score: number;
  community_score: number;
  liquidity_score: number;
  public_interest_score: number;
  market_data: MarketData;
  public_interest_stats: PublicInterestStats;
  status_updates: any[];
  last_updated: string;
}

export interface Description {
  en: string;
}

export interface Image {
  thumb: string;
  small: string;
  large: string;
}

export interface Links {
  homepage: string[];
  blockchain_site: string[];
  official_forum_url: string[];
  chat_url: string[];
  announcement_url: string[];
  twitter_screen_name: string;
  facebook_username: string;
  bitcointalk_thread_identifier: null;
  telegram_channel_identifier: string;
  subreddit_url: string;
  repos_url: ReposURL;
}

export interface ReposURL {
  github: string[];
  bitbucket: any[];
}

export interface MarketData {
  current_price: { [key: string]: number };
  ath: { [key: string]: number };
  ath_change_percentage: { [key: string]: number };
  ath_date: { [key: string]: string };
  atl: { [key: string]: number };
  atl_change_percentage: { [key: string]: number };
  atl_date: { [key: string]: string };
  market_cap: { [key: string]: number };
  market_cap_rank: number;
  fully_diluted_valuation: { [key: string]: number };
  total_volume: { [key: string]: number };
  high_24h: { [key: string]: number };
  low_24h: { [key: string]: number };
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
  price_change_percentage_14d: number;
  price_change_percentage_30d: number;
  price_change_percentage_60d: number;
  price_change_percentage_200d: number;
  price_change_percentage_1y: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  price_change_24h_in_currency: { [key: string]: number };
  price_change_percentage_1h_in_currency: { [key: string]: number };
  price_change_percentage_24h_in_currency: { [key: string]: number };
  price_change_percentage_7d_in_currency: { [key: string]: number };
  price_change_percentage_14d_in_currency: { [key: string]: number };
  price_change_percentage_30d_in_currency: { [key: string]: number };
  price_change_percentage_60d_in_currency: { [key: string]: number };
  price_change_percentage_200d_in_currency: { [key: string]: number };
  price_change_percentage_1y_in_currency: { [key: string]: number };
  market_cap_change_24h_in_currency: { [key: string]: number };
  market_cap_change_percentage_24h_in_currency: { [key: string]: number };
  total_supply: number;
  max_supply: number;
  circulating_supply: number;
  last_updated: string;
}
export interface PublicInterestStats {
  alexa_rank: number;
  bing_matches: null;
}
