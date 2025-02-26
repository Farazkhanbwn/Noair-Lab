interface SuggestedUserStatsProps {
  googleCount: number;
  publicationsCount: number;
  citationsCount: number;
  patentsCount: number;
}

const SuggestedUserStats: React.FC<SuggestedUserStatsProps> = ({
  googleCount,
  publicationsCount,
  citationsCount,
  patentsCount,
}) => {
  const stats = [
    { label: 'Google', count: googleCount },
    { label: 'Publications', count: publicationsCount },
    { label: 'Citations', count: citationsCount },
    { label: 'Patents', count: patentsCount },
  ];

  return (
    <div className="grid !grid-cols-2 md:!grid-cols-4 !gap-2 mt-3 text-center !items-center !justify-center">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`flex flex-col items-center gap-1
          ${index !== 3 ? 'border-r-2 border-stroke-grey' : ''}
          ${index === 1 ? 'md:!border-r-2' : ''}
          ${index === 1 ? '!border-r-0 border-stroke-grey' : ''}
      `}
        >
          <p className="text-blue-600 font-semibold">{stat.count}</p>
          <p className="text-xs text-gray-500">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default SuggestedUserStats;
