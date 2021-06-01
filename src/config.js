// defined production and development variables for re-checking the documents page. These can be customized as needed.
const prod = {
  url: {
    DELAY: 60 * 30
  },
  i18n: {
    debug: false
  }
};

const dev = {
  url: {
    DELAY: 60 * 30
  },
  i18n: {
    debug: false
  }
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
