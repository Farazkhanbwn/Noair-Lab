interface InstitutionLogoProps {
  logo?: string;
  name: string;
}

export function InstitutionLogo({ logo, name }: InstitutionLogoProps) {
  if (logo) {
    return (
      <div className="">
        <img src={logo || '/placeholder.svg'} alt={name} className="w-6 h-6" />
      </div>
    );
  }

  return (
    <div className="bg-light-grey font-semibold heading-secondary rounded-full w-10 h-10 flex-center">
      {name.charAt(0)}
    </div>
  );
}
