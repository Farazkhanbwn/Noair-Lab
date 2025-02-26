export interface SuggestedUser {
  name: string;
  title: string;
  location: string;
  institution: string;
  googleScholarCount: number;
  publicationsCount: number;
  citationsCount: number;
  patentsCount: number;
}

export interface SuggestedUserCardProps {
  user: {
    name: string;
    title: string;
    organization: string;
    profileImage: string;
    backgroundImage: string;
    googleCount: number;
    publicationsCount: number;
    citationsCount: number;
    patentsCount: number;
    socialLinks: {
      github?: string;
      website?: string;
      linkedin?: string;
    };
  };
}
