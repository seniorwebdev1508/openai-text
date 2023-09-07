const axios = require('axios');
require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");
const fs = require('fs');

const gTTS = require('gtts');

const TOKEN = process.env.TOKEN;
const PAGE_ID = process.env.PAGE_ID;

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
//it is working now.

const chatCompletion = async (prompt) => {
    try {
        const about_bizzman_data = await fs.promises.readFile('training_data/about_bizzman.txt', 'utf8');
        const company_information_data = await fs.promises.readFile('training_data/company_information.txt', 'utf8');
      const sales_solutions_data = await fs.promises.readFile('training_data/sales_solutions.txt', 'utf8');
        
        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [
                // company information
                { "role": "system", "content": about_bizzman_data },
                // areas of expertise
                { "role": "system", "content": company_information_data },
                // key benefits
                { "role": "system", "content": sales_solutions_data },
                { "role": "user", "content": prompt }
            ]
        });
        temperature=0.15
        let content = response.data.choices[0].message.content;

        console.log(content);


        ///////////////////////////////   TTS    //////////////////////////////////

        const  gtts = new gTTS(content, 'en');
 
        gtts.save('Voice.mp3', function (err, result) {
            if(err) { throw new Error(err); }
            console.log("Text to speech converted!");
        });

        ///////////////////////////////////////////////////////////////////////////

        return {
            status: 1,
            response: content
        };
    } catch (error) {
        console.log(error)
        return {
            status: 0,
            response: ''
        };
    }
};

//try {
//  const options = {
//    method: 'POST',
//      url: `https://api.openai.com/v1/chat/completions`,
//        headers: {
//          'Content-Type': 'application/json',
//          Authorization: 'Bearer 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',
//        },
//        data: {
//          "model": "gpt-3.5-turbo",
//          "messages": [
//            { "role": "system", "content": "121." },
//            { "role": "system", "content": "qwdqwd" },
//            { "role": "system", "content": "qwdqwd " },
//            { "role": "system", "content": "qwdqwdqwdqwd" },
//            {
//              "role": "user",
//              "content": "tell me about computer"
//            }
//         ]
//       }
//     };

//   const response = await axios.request(options);

//   console.log(response.data.choices[0])

//   if (response.status === 200 && response.statusText === 'OK') {
//     return 1;
//   } else {
//     return 0;
//   }
// } catch (error) {
//   console.error(error);
//   return 0;
// }
module.exports = {
    chatCompletion
};