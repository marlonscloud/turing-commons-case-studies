window.onload = function() {
  async function fetchAsync (url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }
  
var caseStudy1 = 'https://turing-case-studies-api.azurewebsites.net/api/cases/casestudy/peer-to-peer-support';
fetchAsync(caseStudy1)
    .then(data => {
      console.log(data);
      $('#case-study').html(`${data[0].heading}`);
    })
    .catch(reason => console.log(reason.message))
}