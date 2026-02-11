import Image from "next/image";

export default function Stories() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
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
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, #FFEBC3 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 -left-40 w-[450px] h-[450px] opacity-5"
          style={{
            background: "linear-gradient(135deg, #CAAA82 0%, transparent 70%)",
            transform: "rotate(45deg)",
          }}
        />

        {/* Linhas geométricas sutis */}
        <div
          className="absolute top-1/3 left-0 right-0 h-[1px] opacity-10"
          style={{ backgroundColor: "#CAAA82" }}
        />
        <div
          className="absolute top-2/3 left-0 right-0 h-[1px] opacity-10"
          style={{ backgroundColor: "#FFEBC3" }}
        />

        {/* Container de conteúdo */}
        <div className="relative z-10 flex flex-col h-full px-16 py-24">
          {/* Logo */}
          <div className="mb-20">
            <Image
              src="/logo.png"
              alt="MedGM"
              width={220}
              height={50}
              className="object-contain"
              style={{ height: 'auto' }}
            />
          </div>

          {/* Espaçador para centralizar verticalmente */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Headline */}
            <h1
              className="mb-14 leading-[1.15]"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "64px",
                fontWeight: 700,
                color: "#FFEBC3",
                letterSpacing: "-0.02em",
              }}
            >
              Médico que fatura R$ 200 mil por mês não é melhor que você.
            </h1>

            {/* Corpo do texto */}
            <p
              className="mb-20 leading-relaxed"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "32px",
                fontWeight: 400,
                color: "#CAAA82",
                lineHeight: "1.6",
              }}
            >
              Ele não estudou mais. Não é mais inteligente. Ele só tem uma
              estrutura que transforma os mesmos pacientes em 3x mais
              faturamento. E não é nada clínico.
            </p>
          </div>

          {/* CTA */}
          <div
            className="px-12 py-9 text-center"
            style={{
              backgroundColor: "#FFEBC3",
              borderRadius: "16px",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "26px",
                fontWeight: 600,
                color: "#1A1A1A",
                letterSpacing: "-0.01em",
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
