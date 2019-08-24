export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'No es un formato válido' : undefined;

export const required = value => value ? undefined : 'Requerido';

export const minLength = length => value => value.length >= length ? undefined : 'La contraseña debe tener por lo menos 8 caracteres';
