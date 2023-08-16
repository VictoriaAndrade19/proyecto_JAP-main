function validar(event) {
    var usuario = document.getElementById("floatingInput").value;
    var contraseña = document.getElementById("floatingPassword").value;
    var usuarioError = document.getElementById("usuario-error");
    var contraseñaError = document.getElementById("contraseña-error");

    event.preventDefault()
    
    usuarioError.textContent = "";
    contraseñaError.textContent = "";
    document.getElementById("floatingInput").classList.remove("campo-invalido");
    document.getElementById("floatingPassword").classList.remove("campo-invalido");

    if (usuario === "") {
        usuarioError.textContent = "Falta usuario";
        document.getElementById("floatingInput").classList.add("campo-invalido");
        return false;
    }

    if (contraseña === "") {
        contraseñaError.textContent = "Falta contraseña";
        document.getElementById("floatingPassword").classList.add("campo-invalido");
        return false;
    }

    if (usuario !== "" && contraseña !== "") {
        window.location.href = "index.html";
    }

}
