import { useState } from "react";

const FileIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
    </svg>
);

const BulbIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
        <path d="M9 21h6" />
    </svg>
);

const TargetIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
    </svg>
);

const CheckIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
    </svg>
);

interface WorkProcessStepProps {
    icon: React.ElementType;
    title: string;
    description: string;
    isHovered: boolean;
    onHover: (title: string | null) => void;
}

const WorkProcessStep: React.FC<WorkProcessStepProps> = ({ icon: Icon, title, description, isHovered, onHover }) => (
    <div
        className={`relative flex flex-col items-start p-8 bg-black/50 backdrop-blur-md rounded-xl transition-all duration-500 ease-in-out border border-gray-800
        ${isHovered ? "scale-105 shadow-2xl shadow-orange-500/30 -translate-y-2" : "shadow-lg hover:shadow-xl"}
        cursor-pointer`}
        onMouseEnter={() => onHover(title)}
        onMouseLeave={() => onHover(null)}
    >
        {/* Background Hover Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br from-orange-500/20 to-black rounded-xl opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : ""}`} />

        {/* Icon */}
        <div className={`relative w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${isHovered ? "rotate-6 scale-110" : ""}`}>
            <Icon />
        </div>

        {/* Title & Description */}
        <div className="relative z-10">
            <h2 className={`text-2xl font-bold mb-3 transition-all duration-500 ${isHovered ? "text-orange-500 scale-105" : "text-white"}`}>
                {title}
            </h2>
            <p className="text-gray-300 leading-relaxed text-base transition-all duration-500">{description}</p>
        </div>
    </div>
);

// Define type for steps
interface Step {
    icon: React.ElementType;
    title: string;
    description: string;
}

// Main WorkProcess Component
const WorkProcess: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

    const steps: Step[] = [
        { icon: FileIcon, title: "Briefing", description: "Gathering requirements to understand your needs." },
        { icon: BulbIcon, title: "Idea Generating", description: "Brainstorming innovative strategies for your project." },
        { icon: TargetIcon, title: "Processing", description: "Implementing solutions with precision and care." },
        { icon: CheckIcon, title: "Finishing", description: "Final review and delivery of the project." },
    ];

    return (
        <div className="w-auto mx-auto px-6 py-24 bg-black">
            <div className="text-center mb-20">
                <h1 className="text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:scale-105 transition-transform duration-500">
                    Our Work Process
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    Discover a spectrum of cutting-edge digital marketing services tailored to elevate your online presence, drive engagement.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {steps.map((step, index) => (
                    <div key={step.title} className="relative">
                        <WorkProcessStep {...step} isHovered={hoveredIndex === step.title} onHover={setHoveredIndex} />

                        {index < steps.length - 1 && (
                            <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5">
                                <div className={`h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-500 ${hoveredIndex === step.title || hoveredIndex === steps[index + 1].title ? "scale-x-110 opacity-100" : "scale-x-100 opacity-30"}`} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkProcess;
