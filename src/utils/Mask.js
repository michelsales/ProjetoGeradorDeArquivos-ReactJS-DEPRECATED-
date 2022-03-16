export const MaskCpf = (cpf) => {
  cpf = cpf.replace(/\D/g, "");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return cpf;
};

export const MaskRG = (rg) => {
  rg = rg.replace(/\D/g, "");
  rg = rg.replace(/(\d)(\d{4})$/, "$1.$2");
  rg = rg.replace(/(\d)(\d{4})$/, "$1.$2");
  rg = rg.replace(/(\d)(\d)$/, "$1-$2");
  return rg;
};
