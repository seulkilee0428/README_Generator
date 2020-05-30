function generateMarkdown(data) {
  return `
# ${data.title}
* ${data.description}

## __Table of Contents__  
* [Installation](#installation)               
* [Usage](#usage)                    
* [License](#license)                      
* [Contributor](#contributor)                 
* [Test](#test)
* [Question](#question) 
## __Installation__ :               
* ${data.installation}
\`\`\`  
npm i
\`\`\`
## __Usage__ :                   
* ${data.usage}
## __License__ :                    
* ${data.license}
## __Contributor__ :              
* ${data.contributing}
## __Test__ :                      
* ${data.tests}
\`\`\`  
npm run test
\`\`\`

`;
}

module.exports = generateMarkdown;
