import { languages, namespaces } from 'next-i18next-static-site';

const locales:any = {};

languages.map((language:any) => {
  locales[language] = {};

  namespaces.map((namespace) => {
    locales[language][namespace] = require(`./../locales/${
      language
      }/${
      namespace
      }.json`);
  });
});

export default locales;
