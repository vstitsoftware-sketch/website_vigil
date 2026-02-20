import { Cpu, Network } from "lucide-react";

const trustedPartners = [
    {
        name: "Government of Karnataka",
        logo: "/partners/karnataka-govt.jpg",
        description: "Trusted Partner",
    },
    {
        name: "Indian Army",
        logo: "/partners/indian-army.png",
        description: "Trusted Partner",
    },
    {
        name: "Indian Navy",
        logo: "/partners/indian-navy.png",
        description: "Trusted Partner",
    },
    {
        name: "Karnataka State Police",
        logo: "/partners/karnataka-police.jpg",
        description: "Trusted Partner",
    },
    {
        name: "The Times of India",
        logo: "/partners/times-of-india.png",
        description: "Trusted Partner",
    },
    {
        name: "Hospaccx",
        logo: "/partners/hospaccx.png",
        description: "Trusted Partner",
    },
    {
        name: "Shree Renuka Sugars",
        logo: "/partners/shree-renuka-sugars.jpg",
        description: "Trusted Partner",
    },
    {
        name: "Tata Motors",
        logo: "/partners/tata-motors.jpg",
        description: "Trusted Partner",
    },
    {
        name: "OYO",
        logo: "/partners/oyo.png",
        description: "Trusted Partner",
    },
    {
        name: "Aditya Birla Group",
        logo: "/partners/aditya-birla-group.jpg",
        description: "Trusted Partner",
    },
    {
        name: "Aequs",
        logo: "/partners/aequs.png",
        description: "Trusted Partner",
    },
    {
        name: "Aster Aadhar Hospital",
        logo: "/partners/aster-aadhar-hospital.png",
        description: "Trusted Partner",
    },
    {
        name: "Bajaj Electricals Ltd.",
        logo: "/partners/bajaj-electricals.png",
        description: "Trusted Partner",
    },
    {
        name: "Honda",
        logo: "/partners/honda.png",
        description: "Trusted Partner",
    },
    {
        name: "Hyundai",
        logo: "/partners/hyundai.png",
        description: "Trusted Partner",
    },
    {
        name: "Indian Oil Corporation",
        logo: "/partners/indian-oil.png",
        description: "Trusted Partner",
    },
    {
        name: "Olam",
        logo: "/partners/olam.jpg",
        description: "Trusted Partner",
    },
    {
        name: "Toyota",
        logo: "/partners/toyota.jpg",
        description: "Trusted Partner",
    },
    {
        name: "GeM (Govt. e Marketplace)",
        logo: "/partners/gem.webp",
        description: "Trusted Partner",
    },
    {
        name: "Bharat Petroleum",
        logo: "/partners/bharat-petroleum.jpg",
        description: "Trusted Partner",
    },
    {
        name: "Ford",
        logo: "/partners/ford.jpg",
        description: "Trusted Partner",
    },
    {
        name: "Jain Group of Institutions",
        logo: "/partners/jain-group.webp",
        description: "Trusted Partner",
    },
    {
        name: "Parle",
        logo: "/partners/parle.png",
        description: "Trusted Partner",
    },
    {
        name: "Lakeview Hospital",
        logo: "/partners/lakeview-hospital.jpg",
        description: "Trusted Partner",
    },
    {
        name: "Hotel Eefa",
        logo: "/partners/hotel-eefa.png",
        description: "Trusted Partner",
    },
    {
        name: "KLE Society",
        logo: "/partners/kle-society.png",
        description: "Trusted Partner",
    },
    {
        name: "KLES Dr. Prabhakar Kore Hospital",
        logo: "/partners/kles-hospital.jpg",
        description: "Trusted Partner",
    },
    {
        name: "Ashok Iron Works Pvt. Ltd.",
        logo: "/partners/ashok-iron-works.jpg",
        description: "Trusted Partner",
    },
    {
        name: "Menon Alkop Pvt. Ltd.",
        logo: "/partners/menon-alkop.jpg",
        description: "Trusted Partner",
    },
    {
        name: "Noorani Corbel",
        logo: "/partners/noorani-corbel.jpg",
        description: "Trusted Partner",
    },
    {
        name: "Niyaaz",
        logo: "/partners/niyaaz.png",
        description: "Trusted Partner",
    },
    {
        name: "Prince Pipes",
        logo: "/partners/prince-pipes.webp",
        description: "Trusted Partner",
    },
    {
        name: "Shivshakti Sugars",
        logo: "/partners/shivshakti-sugars.png",
        description: "Trusted Partner",
    },
    {
        name: "Venugram Hospital",
        logo: "/partners/venugram-hospital.png",
        description: "Trusted Partner",
    },
    {
        name: "Regenta Hotels & Resorts",
        logo: "/partners/regenta-hotels.png",
        description: "Trusted Partner",
    },
    {
        name: "Anjuman-E-Islamia",
        logo: "/partners/anjuman-e-islamia.jpg",
        description: "Trusted Partner",
    },
    {
        name: "St. Paul's P.U. College",
        logo: "/partners/st-pauls-college.png",
        description: "Trusted Partner",
    },
    {
        name: "Karnataka Law Society",
        logo: "/partners/karnataka-law-society.png",
        description: "Trusted Partner",
    },
    {
        name: "Indus Altum Learning Centre",
        logo: "/partners/indus-altum.webp",
        description: "Trusted Partner",
    },
    {
        name: "Jinabakul Forge",
        logo: "/partners/jinabakul-forge.png",
        description: "Trusted Partner",
    },
];

const collaborations = [
    {
        name: "Future Chip",
        logo: Cpu,
        description: "Hardware Innovation Partner",
    },
    {
        name: "Secure Link",
        logo: Network,
        description: "Cybersecurity Integration",
    },
];

const PartnerCard = ({ partner }: { partner: { name: string; logo: string; description: string } }) => (
    <div
        className="flex flex-col items-center justify-center p-2 transition-all group flex-shrink-0"
        style={{ width: '200px' }}
    >
        <div className="w-24 h-24 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
        </div>
        <h3 className="font-semibold text-foreground text-center text-sm">
            {partner.name}
        </h3>
    </div>
);

const ClientsSection = () => {
    return (
        <section id="clients" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                        Our Ecosystem
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                        Trusted Partners & Collaborations
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        We work with industry leaders to deliver the best solutions for our clients.
                        Together, we build the future of safety and technology.
                    </p>
                </div>

                {/* Trusted Partners Marquee */}
                <div className="mb-20 overflow-hidden">
                    <h3 className="text-2xl font-bold text-center mb-8 text-foreground/80">Trusted Partners</h3>
                    <div
                        className="relative w-full overflow-hidden"
                        style={{
                            maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
                        }}
                    >
                        <div
                            className="flex gap-6 py-4"
                            style={{
                                animation: `scroll ${trustedPartners.length * 3}s linear infinite`,
                                width: 'max-content',
                            }}
                        >
                            {/* First set */}
                            {trustedPartners.map((partner, index) => (
                                <PartnerCard key={`set1-${index}`} partner={partner} />
                            ))}
                            {/* Duplicate set for seamless loop */}
                            {trustedPartners.map((partner, index) => (
                                <PartnerCard key={`set2-${index}`} partner={partner} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Collaborations */}
                <div className="overflow-hidden">
                    <h3 className="text-2xl font-bold text-center mb-8 text-foreground/80">Collaborations</h3>
                    <div
                        className="relative w-full overflow-hidden"
                        style={{
                            maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
                        }}
                    >
                        <div
                            className="flex gap-6 py-4"
                            style={{
                                animation: `scroll-reverse ${collaborations.length * 5}s linear infinite`,
                                width: 'max-content',
                            }}
                        >
                            {[...collaborations, ...collaborations, ...collaborations].map((collab, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center p-6 bg-background rounded-xl shadow-sm border border-border/50 hover:shadow-md hover:border-accent/50 transition-all group flex-shrink-0"
                                    style={{ width: '200px' }}
                                >
                                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <collab.logo className="h-8 w-8 text-accent" />
                                    </div>
                                    <h3 className="font-semibold text-foreground text-center">
                                        {collab.name}
                                    </h3>
                                </div>
                            ))}
                            {[...collaborations, ...collaborations, ...collaborations].map((collab, index) => (
                                <div
                                    key={`dup-${index}`}
                                    className="flex flex-col items-center justify-center p-6 bg-background rounded-xl shadow-sm border border-border/50 hover:shadow-md hover:border-accent/50 transition-all group flex-shrink-0"
                                    style={{ width: '200px' }}
                                >
                                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <collab.logo className="h-8 w-8 text-accent" />
                                    </div>
                                    <h3 className="font-semibold text-foreground text-center">
                                        {collab.name}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* Inline keyframes for the scroll animation */}
            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes scroll-reverse {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
            `}</style>
        </section>
    );
};

export default ClientsSection;
