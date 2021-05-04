const prod = {
  url: {
    DELAY: 60 * 30
  }
}

const dev = {
  url: {
    DELAY: 5
  }
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod
