"use client";

import { useState } from "react";

type TrustState = "trusted" | "unsafe" | null;
type IncidentState =
  | "account"
  | "impersonation"
  | "activity"
  | "unknown"
  | null;
export default function Home() {
  const [trust, setTrust] = useState<TrustState>(null);
const [incident, setIncident] = useState<IncidentState>(null);
const [planGenerated, setPlanGenerated] = useState(false);
const [securityScan, setSecurityScan] = useState(false);
const [llmAnalysis, setLlmAnalysis] = useState(false);
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold text-blue-950">
              FirstHour MX
            </h1>
            <p className="text-sm text-slate-600">
              Tu primera hora después de una posible toma de cuenta
            </p>
          </div>

          <span className="rounded-full border border-slate-200 px-4 py-2 text-sm">
            ES
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* PROGRESS */}
        <div className="mb-8 flex items-center gap-3 text-sm">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
            1
          </span>
          <span className="font-semibold text-blue-950">Primeros pasos</span>

          <div className="h-px w-12 bg-slate-300" />

          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200">
            2
          </span>
          <span className="text-slate-500">Triage</span>

          <div className="h-px w-12 bg-slate-300" />

          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200">
            3
          </span>
          <span className="text-slate-500">Plan de acciones</span>

          <div className="h-px w-12 bg-slate-300" />

          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200">
            4
          </span>
          <span className="text-slate-500">Paquete de evidencia</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          {/* LEFT */}
          <section>
            <h2 className="text-4xl font-bold tracking-tight text-blue-950">
              Primeros pasos
            </h2>

            <p className="mt-2 text-lg text-slate-600">
              Estás en la primera hora. Respondamos algunas preguntas para
              darte un plan claro y seguro.
            </p>

            {/* TRUST DEVICE */}
            <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50 p-7">
              <h3 className="text-2xl font-bold text-blue-950">
                ¿Confías en este dispositivo?
              </h3>

              <p className="mt-2 max-w-2xl text-slate-600">
                Si crees que puede estar comprometido, elige “No / No estoy
                segura” para continuar con una alternativa más segura.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <button
                  onClick={() => setTrust("trusted")}
                  className={`rounded-xl border px-6 py-4 font-semibold transition ${
                    trust === "trusted"
                      ? "border-blue-700 bg-blue-700 text-white"
                      : "border-blue-300 bg-white text-blue-900 hover:bg-blue-100"
                  }`}
                >
                  Sí, confío
                </button>

                <button
                  onClick={() => setTrust("unsafe")}
                  className={`rounded-xl border px-6 py-4 font-semibold transition ${
                    trust === "unsafe"
                      ? "border-blue-700 bg-blue-700 text-white"
                      : "border-blue-300 bg-white text-blue-900 hover:bg-blue-100"
                  }`}
                >
                  No / No estoy segura
                </button>
              </div>

              {trust === "unsafe" && (
                <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4">
                  <p className="font-semibold text-amber-900">
                    Usa otro dispositivo que consideres confiable antes de
                    realizar acciones sensibles.
                  </p>
                  <p className="mt-1 text-sm text-amber-800">
                    FirstHour MX no puede verificar que este dispositivo esté
                    libre de compromiso.
                  </p>
                </div>
              )}

              <div className="mt-5 rounded-xl bg-white p-4 text-sm text-slate-700">
                🔒 Nunca te pediremos contraseñas, códigos de verificación,
                identificaciones ni mensajes privados.
              </div>
              {trust && (
  <div className="mt-7 border-t border-blue-200 pt-6">
    <p className="mb-2 text-xs font-bold uppercase tracking-wide text-amber-700">
      REPORTADO POR TI
    </p>

    <h3 className="text-2xl font-bold text-blue-950">
      ¿Qué notaste?
    </h3>

    <p className="mt-2 text-slate-600">
      Elige la opción que mejor describa lo ocurrido. No incluyas
      contraseñas, códigos, identificaciones ni mensajes privados.
    </p>

    <div className="mt-5 grid gap-3">
      <button
        onClick={() => setIncident("account")}
        className={`rounded-xl border p-4 text-left font-semibold transition ${
          incident === "account"
            ? "border-blue-700 bg-blue-700 text-white"
            : "border-blue-200 bg-white text-blue-950 hover:bg-blue-100"
        }`}
      >
        Alguien entró o intentó entrar a mi cuenta
      </button>

      <button
        onClick={() => setIncident("impersonation")}
        className={`rounded-xl border p-4 text-left font-semibold transition ${
          incident === "impersonation"
            ? "border-blue-700 bg-blue-700 text-white"
            : "border-blue-200 bg-white text-blue-950 hover:bg-blue-100"
        }`}
      >
        Alguien se está haciendo pasar por mí
      </button>

      <button
        onClick={() => setIncident("activity")}
        className={`rounded-xl border p-4 text-left font-semibold transition ${
          incident === "activity"
            ? "border-blue-700 bg-blue-700 text-white"
            : "border-blue-200 bg-white text-blue-950 hover:bg-blue-100"
        }`}
      >
        Veo actividad o movimientos que no reconozco
      </button>

      <button
        onClick={() => setIncident("unknown")}
        className={`rounded-xl border p-4 text-left font-semibold transition ${
          incident === "unknown"
            ? "border-blue-700 bg-blue-700 text-white"
            : "border-blue-200 bg-white text-blue-950 hover:bg-blue-100"
        }`}
      >
        No estoy segura de qué ocurrió
      </button>
    </div>

    {incident && (
      <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
        <p className="text-sm text-amber-900">
          Esta información queda marcada como{" "}
          <strong>REPORTADO POR TI</strong>. FirstHour MX no la presenta
          como evidencia confirmada.
        </p>
      </div>
    )}
  </div>
)}
            </div>

            {/* NEXT STEPS */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-blue-950">
                Tus siguientes pasos
              </h3>

              <p className="mt-1 text-slate-600">
                Vista previa de las acciones que FirstHour MX puede organizar.
              </p>

              <div className="mt-4 space-y-3">
                <Action
                  number="1"
                  title="Asegura tu cuenta en la plataforma afectada"
                  text="Revisa actividad reciente y utiliza el proceso oficial de recuperación."
                  actor="Plataforma afectada"
                />

                <Action
                  number="2"
                  title="Revisa tus otras cuentas importantes"
                  text="Busca señales similares en correo, redes sociales o servicios importantes."
                  actor="Tú"
                />

                <Action
                  number="3"
                  title="Contacta a tu banco si observaste movimientos sospechosos"
                  text="Reporta la situación mediante los canales oficiales de tu institución."
                  actor="Tu banco"
                />
              </div>

              <button 
          onClick={() => {
  setPlanGenerated(true);
  setSecurityScan(true);
  setLlmAnalysis(true);
}}
              className="mt-6 w-full rounded-xl bg-blue-700 px-6 py-4 text-lg font-bold text-white transition hover:bg-blue-800">
                Generar mi plan de primera hora
              </button>
              {planGenerated && (
  <div className="mt-6 rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
    <p className="text-sm font-bold text-blue-700">
      PLAN DE PRIMERA HORA
    </p>

    <h3 className="mt-2 text-2xl font-bold text-blue-950">
      Tu plan está listo
    </h3>
    {securityScan && (
  <div className="mt-4 rounded-xl border border-emerald-300 bg-emerald-50 p-4">
    <p className="text-sm font-bold text-emerald-800">
      🛡️ ANÁLISIS DE SEGURIDAD — SIMULADO
    </p>

    <p className="mt-2 text-sm text-emerald-900">
      Security tooling simulado: se revisaron señales estructuradas del
      incidente para organizar una respuesta inicial.
    </p>

    <p className="mt-2 text-xs text-emerald-700">
      Resultado: posible riesgo detectado según la información reportada por
      el usuario. Este resultado no proviene de un escaneo real del dispositivo.
    </p>
  </div>
)}
{llmAnalysis && (
  <div className="mt-4 rounded-xl border border-violet-300 bg-violet-50 p-4">
    <p className="text-sm font-bold text-violet-800">
      🤖 ORIENTACIÓN CON LLM — SIMULADA
    </p>

    <p className="mt-2 text-sm text-violet-900">
      El modelo organiza la información reportada para priorizar acciones
      seguras durante la primera hora.
    </p>

    <p className="mt-2 text-xs text-violet-700">
      Salida simulada para este prototipo. No diagnostica el incidente,
      no confirma un ataque y no ejecuta acciones automáticamente.
    </p>
  </div>
)}
{incident && (
  <p className="mt-2 text-sm font-semibold text-blue-700">
    Caso seleccionado:{" "}
    {incident === "account"
      ? "Alguien entró o intentó entrar a mi cuenta"
      : incident === "impersonation"
      ? "Alguien se está haciendo pasar por mí"
      : incident === "activity"
      ? "Veo actividad o movimientos que no reconozco"
      : "No estoy segura de qué ocurrió"}
  </p>
)}
    <p className="mt-2 text-slate-600">
      Este plan organiza tus siguientes acciones con base en lo que
      reportaste. No confirma que tu dispositivo sea seguro ni garantiza
      la recuperación.
    </p>

    {trust === "unsafe" && (
      <div className="mt-4 rounded-xl border border-amber-300 bg-amber-50 p-4">
        <p className="font-bold text-amber-900">
          Primera acción: cambia a un dispositivo que consideres confiable.
        </p>
        <p className="mt-1 text-sm text-amber-800">
          FirstHour MX no puede verificar que este dispositivo esté libre de compromiso.
        </p>
      </div>
    )}

    <div className="mt-5 space-y-3">
      <div className="rounded-xl bg-slate-50 p-4">
        <p className="font-bold">1. Protege la cuenta afectada</p>
        <p className="text-sm text-slate-600">
          Usa únicamente el proceso oficial de recuperación de la plataforma.
        </p>
        <p className="mt-1 text-sm font-semibold text-blue-700">
          Lo realiza: la plataforma afectada
        </p>
      </div>

      <div className="rounded-xl bg-slate-50 p-4">
        <p className="font-bold">2. Revisa otras cuentas importantes</p>
        <p className="text-sm text-slate-600">
          Busca actividad que no reconozcas sin compartir contraseñas ni códigos.
        </p>
        <p className="mt-1 text-sm font-semibold text-blue-700">
          Lo realizas: tú
        </p>
      </div>

      <div className="rounded-xl bg-slate-50 p-4">
        <p className="font-bold">3. Conserva evidencia básica</p>
        <p className="text-sm text-slate-600">
          Registra qué ocurrió, cuándo lo notaste y qué acciones realizaste.
        </p>
        <p className="mt-1 text-sm font-semibold text-amber-700">
          Evidencia: REPORTADO POR TI
        </p>
      </div>
    </div>

    <div className="mt-5 rounded-xl bg-slate-100 p-4 text-sm text-slate-600">
      Ninguna acción se envía automáticamente. Tú revisas y apruebas cualquier acción consecuencial.
    </div>
  </div>
)}
            </div>
          </section>

          {/* RIGHT */}
          <aside className="space-y-5">
            {/* EVIDENCE */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-950">
                Estado de la evidencia
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Toda la información se etiqueta para mostrar qué sabemos y qué
                todavía no podemos verificar.
              </p>

              <div className="mt-5 space-y-3">
                <Evidence
                  label="CONFIRMADO"
                  description="Respaldado por una fuente estructurada o verificable."
                  className="bg-emerald-50 text-emerald-800"
                />

                <Evidence
                  label="REPORTADO POR TI"
                  description="Información que nos compartes y que no verificamos independientemente."
                  className="bg-amber-50 text-amber-800"
                />

                <Evidence
                  label="DESCONOCIDO"
                  description="Aún no existe evidencia suficiente para establecerlo."
                  className="bg-slate-100 text-slate-700"
                />
              </div>
            </div>

            {/* PRIVACY */}
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <h3 className="font-bold text-blue-950">
                🔒 Tu privacidad es primero
              </h3>

              <p className="mt-2 text-sm text-slate-700">
                No ingreses contraseñas, códigos, identificaciones ni mensajes
                privados.
              </p>
            </div>

            {/* DISCLAIMER */}
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
              <h3 className="font-bold text-red-800">Importante</h3>

              <p className="mt-2 text-sm text-red-700">
                FirstHour MX ofrece orientación inicial. No confirma que tu
                dispositivo sea seguro ni garantiza la recuperación.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function Action({
  number,
  title,
  text,
  actor,
}: {
  number: string;
  title: string;
  text: string;
  actor: string;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
        {number}
      </div>

      <div className="flex-1">
        <h4 className="font-bold text-slate-900">{title}</h4>
        <p className="mt-1 text-sm text-slate-600">{text}</p>
        <p className="mt-2 text-xs font-semibold text-blue-700">
          Lo realiza: {actor}
        </p>
      </div>
    </div>
  );
}

function Evidence({
  label,
  description,
  className,
}: {
  label: string;
  description: string;
  className: string;
}) {
  return (
    <div className={`rounded-xl p-4 ${className}`}>
      <p className="text-sm font-bold">{label}</p>
      <p className="mt-1 text-xs">{description}</p>
    </div>
  );
}