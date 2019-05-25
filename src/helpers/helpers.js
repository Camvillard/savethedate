import contentFr from '../data/contentFr';
import contentEng from '../data/contentEng';

const defineContentLanguage = (language) => {
  const french = ['fr-FR', 'fr']
  if (french.includes(language)) {
    // grab the french data
    return contentFr
  } else {
    // grab english data
    return contentEng
  }
}


export {defineContentLanguage};
