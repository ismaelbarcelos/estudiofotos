
"use client"
import { useState } from "react";

export default function Orcamento() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    servico: "",
    data: "",
    local: "",
    mensagem: "",
  });

  function handleChange(e:any) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function enviarWhatsApp() {
    const texto = `
*Novo Pedido de Orçamento*

Nome: ${form.nome}
Telefone: ${form.telefone}
Serviço: ${form.servico}
Data: ${form.data}
Local: ${form.local}

Mensagem:
${form.mensagem}
`;

    const numero = "5588999541010";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  }

  return (
    <div  id="orcamento" >
      <section className="back_orcamento max-w-xl mx-auto p-6 mt-60 rounded-2xl"> 
      <h2  className="text-3xl font-bold mb-6 items-center">
        Solicite seu orçamento
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="telefone"
          placeholder="WhatsApp"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <select
          name="servico"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        >
          <option>Selecione um serviço</option>
          <option>Ensaio Fotográfico</option>
          <option>Casamento</option>
          <option>Formatura</option>
          <option>Outro Evento</option>
        </select>

        <input
          type="date"
          name="data"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="local"
          placeholder="Local do evento"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <textarea
          name="mensagem"
          placeholder="Conte um pouco sobre o evento"
          rows={5}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <button
          onClick={enviarWhatsApp}
          className="w-full  hover:bg-black text-white p-3 rounded cursor-pointer bg-cyan-950"
        >
          Solicitar Orçamento
        </button>
      </div>
      </section>
    </div>
  );
}