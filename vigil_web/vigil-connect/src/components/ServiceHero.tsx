import React from "react";

type Props = {
  title: string;
  description?: string;
  image?: string;
  menu?: React.ReactNode;
};

const ServiceHero: React.FC<Props> = ({ title, description, image, menu }) => {
  const bgStyle: React.CSSProperties | undefined = image
    ? { backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center center" }
    : undefined;

  return (
    <header className="w-full relative">
      <div className="w-full text-white">
        <div
          className="w-full h-[420px] sm:h-[500px] lg:h-[600px] relative bg-cover bg-center"
          style={bgStyle}
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,16,40,0.65)_0%,rgba(5,16,40,0.22)_40%,rgba(5,16,40,0)_100%)]" />

          <div className="relative z-10 h-full">
            {menu && (
              <div className="absolute inset-x-0 top-0 px-4 pt-6 sm:px-6">
                {menu}
              </div>
            )}

            <div className="h-full flex items-center px-4 sm:px-6">
              <div className="max-w-[550px] text-left">
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  {title}
                </h1>
                {description && (
                  <p className="text-white" style={{ opacity: 0.85 }}>
                    {description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ServiceHero;
