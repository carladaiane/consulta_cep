const showdata = (result) => {
  for (const campo in result) {
    if (document.getElementById(`${campo}`)) {
      document.getElementById(`${campo}`).hidden = false;
      document.getElementById(`${campo}`).value = result[campo];
    }
  }
  document.getElementById("uf").disabled = true;
};

document.getElementById("consultar").addEventListener("click", (e) => {
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
      if (error === "TypeError: Failed to fetch") {
        document.getElementById("alert").innerHTML = "Digite um CEP válido";
      }
    });
});
