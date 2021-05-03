const prod = {
  url: {
    DELAY: 1000 * 60 * 30
  }
}

const dev = {
  url: {
    DELAY: 10000
  }
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod
