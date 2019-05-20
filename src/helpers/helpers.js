import contentFr from '../data/contentFr';
import contentEng from '../data/contentEng';

const defineContentLanguage = (language) => {
  const french = ['fr-FR', 'fr']
  if (french.includes(language)) {
    // grab the french data
    console.log('prout fr')
    return contentFr
  } else {
    // grab english data
    console.log('prout eng')
    return contentEng
  }
}


export {defineContentLanguage};
