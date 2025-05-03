interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader = ({ title, subtitle, className = "" }: SectionHeaderProps) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
      <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
      {subtitle && (
        <p className="text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
