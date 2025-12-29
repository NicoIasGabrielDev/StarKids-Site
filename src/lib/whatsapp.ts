
export type LeadData = {
  reason: string;
  name: string;
  unit: string;
  availability: string;
  age: number;
  phone: string;
  preference: "IA" | "HUMANO";
};

export function buildWhatsappLink(phoneE164: string, data: LeadData) {
  const msg =
    `Olá! Quero agendar uma visita.\n\n` +
    `Motivo: ${data.reason}\n` +
    `Nome: ${data.name}\n` +
    `Unidade: ${data.unit}\n` +
    `Horário: ${data.availability}\n` +
    `Idade do aluno: ${data.age}\n` +
    `Telefone: ${data.phone}\n` +
    `Preferência de atendimento: ${data.preference}\n`;

  const text = encodeURIComponent(msg);
  return `https://wa.me/${phoneE164}?text=${text}`;
}
