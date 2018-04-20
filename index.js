const app = "I don't do much.";
const token = '16c637c301a6a0051de76d53325f8f0070c2c13b'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
