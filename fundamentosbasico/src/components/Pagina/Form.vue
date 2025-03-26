<template>
                <div class="col-md-12 mt-3">
                <div class="card text-center">
                    <div class="card-header">
                        <h3>Formulario</h3>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
                                <label for="nombre" class="form-label">
                                    <i class="bi bi-person-fill"></i> Nombre:</label>
                                <input type="text" class="form-control" id="nombre" placeholder="Tu nombre">
                            </div>

                            <div class="mb-3">
                                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
                                <label for="email" class="form-label">
                                    <i class="bi bi-envelope-fill"></i> Correo Electrónico:
                                </label>
                                <input type="email" class="form-control" id="email" placeholder="Tu correo">
                            </div>

                           <div class="mb-3">
                             <label for="mensaje" class="form-label">
                                <i class="bi bi-motorcycle"></i> Detalles sobre otras motos:</label>
                                <textarea class="form-control" id="mensaje" rows="3" placeholder="Escribe aquí..."></textarea>
                            </div>

                            <button type="submit" class="btn btn-primary"><i class="bi bi-send"></i> Enviar
                              </button>
                        </form>
                    </div>
                </div>
            </div>
</template>