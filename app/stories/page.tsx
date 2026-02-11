import Image from "next/image";

export default function Stories() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="relative overflow-hidden"
        style={{
          width: "1080px",
          height: "1920px",
          backgroundColor: "#1A1A1A",
        }}
      >
        {/* Elementos geométricos decorativos */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #FFEBC3 0%, transparent 70%)",
            transform: "translate(40%, -40%)",
          }}
        />
        <div
          className="absolute bottom-1/4 left-0 w-96 h-96 opacity-5"
          style={{
            background: "linear-gradient(135deg, #CAAA82 0%, transparent 70%)",
            transform: "translate(-30%, 0%) rotate(45deg)",
          }}
        />

        {/* Linhas geométricas */}
        <div
          className="absolute top-1/4 left-0 right-0 h-px opacity-20"
          style={{ backgroundColor: "#CAAA82" }}
        />
        <div
          className="absolute top-1/2 left-0 right-0 h-px opacity-20"
          style={{ backgroundColor: "#FFEBC3" }}
        />
        <div
          className="absolute top-3/4 left-0 right-0 h-px opacity-20"
          style={{ backgroundColor: "#CAAA82" }}
        />

        {/* Container de conteúdo */}
        <div className="relative z-10 flex flex-col h-full px-16 py-24">
          {/* Logo */}
          <div className="mb-20">
            <Image
              src="/logo.png"
              alt="MedGM"
              width={200}
              height={45}
              className="object-contain"
            />
          </div>

          {/* Espaçador para centralizar verticalmente o conteúdo */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Headline */}
            <h1
              className="mb-12 leading-tight"
              style={{
                fontFamily: "Termina, sans-serif",
                fontSize: "56px",
                fontWeight: 400,
                color: "#FFEBC3",
                lineHeight: "1.2",
              }}
            >
              Médico que fatura R$ 200 mil por mês não é melhor que você.
            </h1>

            {/* Corpo do texto */}
            <p
              className="mb-16"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "32px",
                fontWeight: 400,
                color: "#CAAA82",
                lineHeight: "1.5",
              }}
            >
              Ele não estudou mais. Não é mais inteligente. Ele só tem uma
              estrutura que transforma os mesmos pacientes em 3x mais
              faturamento. E não é nada clínico.
            </p>
          </div>

          {/* CTA */}
          <div
            className="px-10 py-8 text-center"
            style={{
              backgroundColor: "#FFEBC3",
              borderRadius: "12px",
            }}
          >
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "28px",
                fontWeight: 500,
                color: "#1A1A1A",
              }}
            >
              Clique em saiba mais e receba um diagnóstico.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
