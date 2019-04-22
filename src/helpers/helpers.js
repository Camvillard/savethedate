const defineContentLanguage = (language, content) => {
  const french = ['fr-FR', 'fr']
  if (french.includes(language)) {
    // grab the french data
    return content.fr
  } else {
    // grab english data
    return content.eng
  }
}


export {defineContentLanguage};
