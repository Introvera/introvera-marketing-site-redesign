// components/ServicesGrid.tsx

const services = [
  {
    title: "WEB & MOBILE APP DEVELOPMENT",
    description:
      "Fast, modern, and user-centric applications built for performance and scale, delivering seamless native and cross-platform experiences with clean UIs and robust backends.",
    image: "/Web&MobileApp.png",
    span: "lg:col-span-2 lg:row-span-2",
    height: "h-[500px] sm:h-[550px]",
    textPosition: "justify-end", // bottom text
  },
  {
    title: "UI/UX DESIGN",
    description: "Human-centered design that turns ideas into intuitive experiences.",
    image: "/UIUX.png",
    span: "lg:col-span-2",
    height: "h-[260px] sm:h-[300px]",
    textPosition: "justify-center", // center text
  },
  {
    title: "BACKEND/API DEVELOPMENT",
    description: "Secure, scalable APIs and systems using modern backend frameworks.",
    image: "/Backend.png",
    span: "",
    height: "h-[280px]",
    textPosition: "justify-end", // bottom text
  },
  {
    title: "CONSULTING & STRATEGY",
    description: "Technical expertise to turn your product vision into a growth engine.",
    image: "/Consulting.png",
    span: "",
    height: "h-[280px]",
    textPosition: "justify-center", // middle text
  },
  {
    title: "QUALITY ASSURANCE",
    description:
      "Ensuring flawless performance through rigorous testing and quality-driven processes.",
    image: "/QA.png",
    span: "",
    height: "h-[260px]",
    textPosition: "justify-start", // top text
  },
  {
    title: "DEVOPS & CLOUD SERVICES",
    description:
      "Deployment, monitoring, and automation with cloud-native solutions.",
    image: "/DevOps.png",
    span: "lg:col-span-3",
    height: "h-[320px]",
    textPosition: "justify-end", // bottom text
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-28 px-4 md:px-16 bg-black text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        WHAT WE <span className="text-purple-500">PROVIDE</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`
              relative overflow-hidden rounded-2xl flex flex-col ${service.textPosition}
              ${service.height} ${service.span}
              p-6 bg-gradient-to-tr from-gray-900/90 via-purple-900/80 to-purple-800/70
              hover:scale-[1.02] transition-transform duration-300
            `}
            style={{
              backgroundImage: `linear-gradient(to top right, rgba(0,0,0,0.75), rgba(40,0,70,0.3)), url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative z-10 max-w-md">
              <h3 className="font-bold text-lg md:text-xl mb-2">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-gray-200 leading-snug">
                {service.description}
              </p>
            </div>

            {/* Overlay to improve contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent rounded-2xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
