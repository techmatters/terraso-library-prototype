const prod = {
  url: {
    DELAY: 1800 // 60 *30
  },
  i18n: {
    debug: false,
    defaultLanguage: 'en'
  }
};

const dev = {
  url: {
    DELAY: 10 // 60 *30
  },
  i18n: {
    debug: false,
    defaultLanguage: 'en'
  }
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
