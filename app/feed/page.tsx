import Image from "next/image";

export default function Feed() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div
        className="relative overflow-hidden"
        style={{
          width: "1080px",
          height: "1080px",
          backgroundColor: "#1A1A1A",
        }}
      >
        {/* Elementos geométricos decorativos */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, #FFEBC3 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] opacity-5"
          style={{
            background: "linear-gradient(135deg, #CAAA82 0%, transparent 70%)",
            transform: "rotate(45deg)",
          }}
        />

        {/* Linhas geométricas sutis */}
        <div
          className="absolute top-1/4 left-0 right-0 h-[1px] opacity-10"
          style={{ backgroundColor: "#CAAA82" }}
        />
        <div
          className="absolute bottom-1/4 left-0 right-0 h-[1px] opacity-10"
          style={{ backgroundColor: "#FFEBC3" }}
        />

        {/* Container de conteúdo */}
        <div className="relative z-10 flex flex-col h-full px-20 py-16">
          {/* Logo */}
          <div className="mb-16">
            <Image
              src="/logo.png"
              alt="MedGM"
              width={200}
              height={45}
              className="object-contain"
              style={{ height: 'auto' }}
            />
          </div>

          {/* Headline */}
          <h1
            className="mb-10 leading-[1.15]"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "56px",
              fontWeight: 700,
              color: "#FFEBC3",
              letterSpacing: "-0.02em",
            }}
          >
            Médico que fatura R$ 200 mil por mês não é melhor que você.
          </h1>

          {/* Corpo do texto */}
          <p
            className="mb-auto leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "26px",
              fontWeight: 400,
              color: "#CAAA82",
              lineHeight: "1.6",
            }}
          >
            Ele não estudou mais. Não é mais inteligente. Ele só tem uma
            estrutura que transforma os mesmos pacientes em 3x mais faturamento.
            E não é nada clínico.
          </p>

          {/* CTA */}
          <div
            className="mt-12 px-10 py-7 text-center"
            style={{
              backgroundColor: "#FFEBC3",
              borderRadius: "12px",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "22px",
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
