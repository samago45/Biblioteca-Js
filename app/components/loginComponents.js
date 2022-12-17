const loginComponent =()=>{
    return`
    <div class="container">
    <div class="row  justify-content-center align-items-center py-5 row-cols-lg-3 row-cols-1 ">
        <div class="col-auto d-flex justify-content-center align-items-center ">
            <div class="car">
                <img id="img-login" src="../app/img/login-img.svg" height="20rem" width="auto" class="img-fluid" />
            </div>
        </div>
        <div class=" col ">
            <div class="car  ">
                <h1 class=" text-login mb-2">
                    <p>Inicio de sesion</p>
                </h1>
                <form id="forms">
                    <div class="form-outline mb-1">
                        <input type="text" id="username" class="form-control form-control-lg" />
                        <label class="form-label">Username</label>
                    </div>

                    <div class="form-outline mb-1">
                        <input type="password" id="password" class="form-control form-control-lg" />
                        <label class="form-label">Password</label>
                    </div>
                    <button id="login-btn" type="button" class="btn btn-primary btn-lg btn-block" onclick = "iniciarSesion()">
                        Iniciar sesion
                    </button>
                </form>
            </div>
        </div>
    </div>

    `

}