import { Cpu, Network } from "lucide-react";

const trustedPartners = [
    { name: "Government of Karnataka", logo: "/partners/karnataka-govt.jpg", description: "Trusted Partner" },
    { name: "Indian Army", logo: "/partners/indian-army.png", description: "Trusted Partner" },
    { name: "Karnataka State Police", logo: "/partners/karnataka-police.jpg", description: "Trusted Partner" },
    { name: "The Times of India", logo: "/partners/times-of-india.png", description: "Trusted Partner" },
    { name: "Hospaccx", logo: "/partners/hospaccx.png", description: "Trusted Partner" },
    { name: "Tata Motors", logo: "/partners/tata-motors.jpg", description: "Trusted Partner" },
    { name: "OYO", logo: "/partners/oyo.png", description: "Trusted Partner" },
    { name: "Aditya Birla Group", logo: "/partners/aditya-birla-group.jpg", description: "Trusted Partner" },
    { name: "Aequs", logo: "/partners/aequs.png", description: "Trusted Partner" },
    { name: "Aster Aadhar Hospital", logo: "/partners/aster-aadhar-hospital.png", description: "Trusted Partner" },
    { name: "Bajaj Electricals Ltd.", logo: "/partners/bajaj-electricals.png", description: "Trusted Partner" },
    { name: "Indian Oil Corporation", logo: "/partners/indian-oil.png", description: "Trusted Partner" },
    { name: "Olam", logo: "/partners/olam.jpg", description: "Trusted Partner" },
    { name: "Toyota", logo: "/partners/toyota.jpg", description: "Trusted Partner" },
    { name: "GeM (Govt. e Marketplace)", logo: "/partners/gem.webp", description: "Trusted Partner" },
    { name: "Bharat Petroleum", logo: "/partners/bharat-petroleum.jpg", description: "Trusted Partner" },
    { name: "Lakeview Hospital", logo: "/partners/lakeview-hospital.jpg", description: "Trusted Partner" },
    { name: "Hotel Eefa", logo: "/partners/hotel-eefa.png", description: "Trusted Partner" },
    { name: "KLE Society", logo: "/partners/kle-society.png", description: "Trusted Partner" },
    { name: "KLES Dr. Prabhakar Kore Hospital", logo: "/partners/kles-hospital.jpg", description: "Trusted Partner" },
    { name: "Noorani Corbel", logo: "/partners/noorani-corbel.jpg", description: "Trusted Partner" },
    { name: "Niyaaz", logo: "/partners/niyaaz.png", description: "Trusted Partner" },
    { name: "Prince Pipes", logo: "/partners/prince-pipes.webp", description: "Trusted Partner" },
    { name: "Regenta Hotels & Resorts", logo: "/partners/regenta-hotels.png", description: "Trusted Partner" },
    { name: "Anjuman-E-Islamia", logo: "/partners/anjuman-e-islamia.jpg", description: "Trusted Partner" },
    { name: "St. Paul's P.U. College", logo: "/partners/st-pauls-college.png", description: "Trusted Partner" },
    { name: "Karnataka Law Society", logo: "/partners/karnataka-law-society.png", description: "Trusted Partner" },
    { name: "Indus Altum Learning Centre", logo: "/partners/indus-altum.webp", description: "Trusted Partner" },
    { name: "Jinabakul Forge", logo: "/partners/jinabakul-forge.png", description: "Trusted Partner" },
    { name: "Belagavi Smart City", logo: "/partners/smart-city-belagavi.png", description: "Trusted Partner" },
    { name: "Roquette India Pvt. Ltd.", logo: "/partners/roquette.png", description: "Trusted Partner" },
];

const collaborations = [
    { name: "Samsung", logo: "/collaborators/samsung.webp", description: "Trusted Collaborator" },
    { name: "Bosch", logo: "/collaborators/bosch.jpg", description: "Trusted Collaborator" },
    { name: "Honeywell", logo: "/collaborators/honeywell.webp", description: "Trusted Collaborator" },
    { name: "GST", logo: "/collaborators/GST.jpg", description: "Trusted Collaborator" },
    { name: "Johnson Controls", logo: "/collaborators/Johnson.webp", description: "Trusted Collaborator" },
    { name: "HID", logo: "/collaborators/hid.webp", description: "Trusted Collaborator" },
    { name: "Texecom", logo: "/collaborators/Texecom_logo.jpg", description: "Trusted Collaborator" },
    { name: "Agni", logo: "/collaborators/agni.png", description: "Trusted Collaborator" },
    { name: "eSSL", logo: "/collaborators/essl.jpg", description: "Trusted Collaborator" },
    { name: "Matrix", logo: "/collaborators/matrix.png", description: "Trusted Collaborator" },
    { name: "Securus", logo: "/collaborators/securus.png", description: "Trusted Collaborator" },
    { name: "Wisenet", logo: "/collaborators/wisenet.jpg", description: "Trusted Collaborator" },
    { name: "eGlu", logo: "/collaborators/eglu.png", description: "Trusted Collaborator" },
    { name: "LivFuture", logo: "/collaborators/livfuture.webp", description: "Trusted Collaborator" },
    { name: "Godrej", logo: "/collaborators/godrej.jpg", description: "Trusted Collaborator" },
    { name: "Optex", logo: "/collaborators/optex.png", description: "Trusted Collaborator" }
];

const PartnerCard = ({ partner }: { partner: { name: string; logo: string; description: string } }) => (
    <div className="flex flex-col items-center justify-center p-2 transition-all group flex-shrink-0" style={{ width: '200px' }}>
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

                {/* Trusted Partners */}
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
                            {trustedPartners.map((partner, index) => (
                                <PartnerCard key={`set1-${index}`} partner={partner} />
                            ))}
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
                                <div key={index} className="flex flex-col items-center justify-center p-6 bg-background rounded-xl shadow-sm border border-border/50 hover:shadow-md hover:border-accent/50 transition-all group flex-shrink-0" style={{ width: '200px' }}>

                                    {/* ✅ FIXED HERE */}
                                    <div className="w-24 h-24 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform overflow-hidden">
                                        {typeof collab.logo === 'string' ? (
                                            <img src={collab.logo} alt={collab.name} className="w-full h-full object-contain" />
                                        ) : (
                                            <collab.logo className="h-8 w-8 text-accent" />
                                        )}
                                    </div>

                                    <h3 className="font-semibold text-foreground text-center">
                                        {collab.name}
                                    </h3>
                                </div>
                            ))}

                            {[...collaborations, ...collaborations, ...collaborations].map((collab, index) => (
                                <div key={`dup-${index}`} className="flex flex-col items-center justify-center p-6 bg-background rounded-xl shadow-sm border border-border/50 hover:shadow-md hover:border-accent/50 transition-all group flex-shrink-0" style={{ width: '200px' }}>

                                    {/* ✅ FIXED HERE */}
                                    <div className="w-24 h-24 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform overflow-hidden">
                                        {typeof collab.logo === 'string' ? (
                                            <img src={collab.logo} alt={collab.name} className="w-full h-full object-contain" />
                                        ) : (
                                            <collab.logo className="h-8 w-8 text-accent" />
                                        )}
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