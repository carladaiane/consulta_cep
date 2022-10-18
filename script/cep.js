const showdata = (result) => {
  for (const campo in result) {
    if (document.getElementById(`${campo}`)) {
      document.getElementById(`${campo}`).value = result[campo];
    }
  }
};

cep.addEventListener("blur", (e) => {
  const cep = document.getElementById("cep").value.replace("-", "");
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };
  fetch(`https://viacep.com.br/ws/${cep}/json/`, options)
    .then((response) => {
      response.json().then((data) => showdata(data));
    })
    .catch((error) => {
      console.log(`Deu erro: ${error}`);
    });
});
