const prod = {
  url: {
    API_URL: 'https://xiklt43x4fd7nmrzo5w4ox4xym.appsync-api.us-west-1.amazonaws.com/graphql',
    API_KEY: 'da2-s5726bhsfjfqvn37x33zwyju7q'
  }
}

const dev = {
  url: {
    API_URL: 'http://localhost:4000/'
  }
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod
