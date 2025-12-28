"use client";

import { useEffect, useMemo, useState } from "react";
import { buildWhatsappLink, LeadData } from "@/lib/whatsapp";

const STORAGE_DONE_KEY = "lead_done";
const STORAGE_DATA_KEY = "lead_data";

// número único por enquanto
const DEFAULT_WPP = "5521982739509";

const reasons = [
  "Desenvolvimento infantil",
  "Lazer",
  "Profissionalização",
  "Socialização",
] as const;

const units = ["Recreio", "Barra"] as const;
const availability = ["Manhã", "Tarde", "Noite"] as const;

export function LeadModal() {
  const [open, setOpen] = useState(false);

  const [reason, setReason] = useState("");
  const [unit, setUnit] = useState("");
  const [slot, setSlot] = useState("");
  const [age, setAge] = useState<number | "">("");

  const canSubmit = useMemo(() => {
    return reason && unit && slot && age !== "" && Number(age) > 0;
  }, [reason, unit, slot, age]);

  // useEffect(() => {
  //   const alreadyDone = localStorage.getItem(STORAGE_DONE_KEY) === "true";
  //   if (!alreadyDone) setOpen(true);
  // }, []);

  function persist(data: LeadData) {
    localStorage.setItem(STORAGE_DONE_KEY, "true");
    localStorage.setItem(STORAGE_DATA_KEY, JSON.stringify(data));
  }

  function goWhatsapp(preference: LeadData["preference"]) {
    if (!canSubmit) return;

    const data: LeadData = {
      reason,
      unit,
      availability: slot,
      age: Number(age),
      preference,
    };

    persist(data);
    setOpen(false);

    const link = buildWhatsappLink(DEFAULT_WPP, data);
    window.location.href = link;
  }

  function closeTemporarily() {
    // Se você NÃO quiser permitir fechar sem enviar, apaga isso e remove o botão "Agora não".
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* overlay premium */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* container */}
      <div className="relative flex min-h-dvh items-center justify-center p-4">
        <div className="w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_rgba(0,0,0,.25)]">
          {/* header */}
          <div className="relative px-7 pt-7 pb-5">
            {/* bolhas suaves */}
            <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-brand-yellowSoft blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-brand-blueSoft blur-2xl" />

            <div className="inline-flex items-center gap-2 rounded-full bg-brand-blueSoft px-3 py-1 text-xs font-bold text-brand-blue">
              🎵 Agendamento rápido
            </div>

            <h2 className="mt-3 text-2xl font-extrabold text-slate-900">
              Vamos entender seu interesse
            </h2>

            <p className="mt-1 text-sm text-slate-600">
              Leva menos de 1 minuto. Depois você já fala com a equipe no WhatsApp.
            </p>
          </div>

          {/* body */}
          <div className="max-h-[70vh] overflow-auto px-7 py-6 text-slate-900">
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                goWhatsapp("HUMANO");
              }}
            >
              <Field label="Você busca a música por qual motivo?">
                <select
                  className="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm outline-none transition focus:border-brand-blue/40 focus:ring-4 focus:ring-brand-blue/10"
                  required
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                >
                  <option value="">Selecione</option>
                  {reasons.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </Field>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Unidade mais perto de você">
                  <select
                    className="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm outline-none transition focus:border-brand-blue/40 focus:ring-4 focus:ring-brand-blue/10"
                    required
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                  >
                    <option value="">Selecione</option>
                    {units.map((u) => (
                      <option key={u}>{u}</option>
                    ))}
                  </select>
                </Field>

                <Field label="Disponibilidade de horário">
                  <select
                    className="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm outline-none transition focus:border-brand-blue/40 focus:ring-4 focus:ring-brand-blue/10"
                    required
                    value={slot}
                    onChange={(e) => setSlot(e.target.value)}
                  >
                    <option value="">Selecione</option>
                    {availability.map((a) => (
                      <option key={a}>{a}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Idade do aluno">
                <input
                  type="number"
                  min={1}
                  className="w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm outline-none transition focus:border-brand-blue/40 focus:ring-4 focus:ring-brand-blue/10"
                  required
                  value={age}
                  onChange={(e) =>
                    setAge(e.target.value ? Number(e.target.value) : "")
                  }
                  placeholder="Ex: 7"
                />
              </Field>

              {/* CTA */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="mb-3 text-sm font-semibold text-slate-800">
                  Como você prefere ser atendido?
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => goWhatsapp("IA")}
                    disabled={!canSubmit}
                    className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-green-600 px-4 py-3 text-sm font-extrabold text-white shadow-sm transition hover:brightness-95 active:scale-[0.99] disabled:opacity-50"
                  >
                    🤖 WhatsApp / IA
                    <span className="opacity-90 transition group-hover:translate-x-0.5">→</span>
                  </button>

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-blue px-4 py-3 text-sm font-extrabold text-white shadow-sm transition hover:brightness-95 active:scale-[0.99] disabled:opacity-50"
                  >
                    👩‍💼 Atendimento humano
                    <span className="opacity-90 transition group-hover:translate-x-0.5">→</span>
                  </button>
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  Ao continuar, você será redirecionado para o WhatsApp com a
                  mensagem pronta.
                </p>
              </div>
            </form>
          </div>

          {/* footer */}
          <div className="flex items-center justify-between gap-3 border-t border-slate-100 px-7 py-4">
            <span className="text-xs text-slate-500">
              Starkids • Atendimento rápido via WhatsApp
            </span>

            <button
              type="button"
              onClick={() => {
                // reset (se quiser testar modal sempre)
                localStorage.removeItem(STORAGE_DONE_KEY);
                localStorage.removeItem(STORAGE_DATA_KEY);
                window.location.reload();
              }}
              className="text-xs font-semibold text-slate-500 transition hover:text-slate-700"
            >
              Reset (dev)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-800">
        {label}
      </label>
      {children}
    </div>
  );
}
