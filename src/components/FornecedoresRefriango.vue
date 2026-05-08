<template>
  <div class="card fornecedor-card border-0 shadow-sm h-100">
    <div class="card-body text-start">
      <div class="d-flex justify-content-between align-items-start mb-3">
        <div>
          <h5><slot name="titulo"> </slot></h5>

          <small> <slot name="subtitulo"></slot></small>
        </div>

        <div class="d-flex gap-2">
          <slot name="acoes"></slot>
        </div>
      </div>

      <div class="mb-4">
        <div class="d-flex align-items-center mb-3 text-secondary">
          <i class="bi bi-telephone me-3"></i>

          <slot name="telefone"></slot>
        </div>

        <div class="d-flex align-items-center mb-3 text-secondary">
          <i class="bi bi-envelope me-3"></i>

          <slot name="email"></slot>
        </div>

        <div class="d-flex align-items-center text-secondary">
          <i class="bi bi-geo-alt me-3"></i>

          <slot name="localizacao"></slot>
        </div>
      </div>

      <hr class="border-secondary" />

      <slot name="rodape"></slot>
    </div>
  </div>
</template>