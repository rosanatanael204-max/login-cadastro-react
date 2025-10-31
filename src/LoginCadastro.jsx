import React, { useState } from "react";
import "./LoginCadastro.css";

export default function LoginCadastro() {
  const [modo, setModo] = useState("login");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (modo === "login") {
      setMensagem(
        `Bem-vinda(o), usuário de email ${email}! Você está logada(o).`
      );
    } else {
      setMensagem(`Cadastro concluído! Bem-vinda(o), ${nome}.`);
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h2 className="title">
          {modo === "login" ? "Acesse sua conta" : "Crie sua conta"}
        </h2>
        <p className="subtitle">
          {modo === "login"
            ? "Entre com seu email e senha para continuar."
            : "Preencha seus dados para começar."}
        </p>

        <form onSubmit={handleSubmit} className="form">
          {modo === "cadastro" && (
            <input
              className="input"
              type="text"
              placeholder="Nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          )}

          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="input"
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button className="button" type="submit">
            {modo === "login" ? "Entrar" : "Cadastrar"}
          </button>
        </form>

        <div className="switch">
          {modo === "login" ? (
            <p>
              Não tem conta?{" "}
              <button className="link" onClick={() => setModo("cadastro")}>
                Cadastre-se
              </button>
            </p>
          ) : (
            <p>
              Já tem conta?{" "}
              <button className="link" onClick={() => setModo("login")}>
                Entrar
              </button>
            </p>
          )}
        </div>

        {mensagem && <p className="mensagem">{mensagem}</p>}
      </div>
    </div>
  );
}
