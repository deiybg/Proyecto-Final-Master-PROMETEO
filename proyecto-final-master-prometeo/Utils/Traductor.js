const traductorKeyWords = async (keyword)=>{
    try {
        const data = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(keyword)}&langpair=es|en`);
        const dataJSON = await data.json();
        const traslateWord = dataJSON.responseData.translatedText;
        console.log(traslateWord);
        
    } catch (error) {
        console.error('No tenemos datos del ingrediente a consultar', error);
}
};

traductorKeyWords("avena")
