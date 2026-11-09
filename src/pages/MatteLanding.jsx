
import React from "react";
import { Helmet } from "react-helmet";

export default function MatteLanding() {
  return (
    <>
      <Helmet>
        <title>BALDSHIELD MATTE | Scalp Shine Control</title>
        <meta
          name="description"
          content="Conheça o BALDSHIELD MATTE, um novo conceito em desenvolvimento para o cuidado do couro cabeludo exposto."
        />
        <meta name="robots" content="noindex, follow" />
        <link
          rel="canonical"
          href="https://www.baldshield.com/matte"
        />
      </Helmet>

      <main
        style={{
          minHeight: "100vh",
          background: "#090909",
          color: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 24px",
          textAlign: "center",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <div style={{ maxWidth: 650 }}>
          <p style={{
            color: "#ff7900",
            letterSpacing: 4,
            fontSize: 12
          }}>
            BALDSHIELD INNOVATION
          </p>

          <h1 style={{
            fontSize: "clamp(48px, 9vw, 88px)",
            margin: "24px 0 8px",
            letterSpacing: -2
          }}>
            MATTE<span style={{ color: "#ff7900" }}>.</span>
          </h1>

          <p style={{
            fontSize: 19,
            letterSpacing: 3,
            color: "#c0c0c0"
          }}>
            SCALP SHINE CONTROL
          </p>

          <div style={{
            width: 60,
            height: 2,
            background: "#ff7900",
            margin: "36px auto"
          }} />

          <h2 style={{
            fontSize: 25,
            fontWeight: 400,
            lineHeight: 1.4
          }}>
            Uma nova experiência está em desenvolvimento.
          </h2>

          <p style={{
            color: "#a8a8a8",
            lineHeight: 1.8,
            marginTop: 20
          }}>
            Estamos explorando novas possibilidades
            para o cuidado do couro cabeludo exposto.
          </p>

          <p style={{
            marginTop: 55,
            fontSize: 12,
            color: "#777"
          }}>
            BALDSHIELD · CONFIDENCE FOR THE BOLD
          </p>
        </div>
      </main>
    </>
  );
}
