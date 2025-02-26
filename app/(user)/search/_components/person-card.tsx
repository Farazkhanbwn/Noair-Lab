import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Person } from '@/types';

interface PersonCardProps {
  person: Person;
}

export const FollowButton = () => {
  return (
    <Button
      variant="outline"
      className="text-primary border-primary hover:text-primary text-base font-semibold"
    >
      Follow
    </Button>
  );
};

export function PersonCard({ person }: PersonCardProps) {
  return (
    <div className="flex flex-col md:flex md:flex-row md:items-center items-start justify-between gap-2">
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={person.avatar} alt={person.name} />
          <AvatarFallback>{person.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-medium text-sm">{person.name}</h3>
          <p className="text-sm text-gray-600">
            {person.title} at {person.organization}
          </p>
        </div>
      </div>
      <FollowButton />
      {/* <Button
        variant="outline"
        className="text-primary border-primary hover:text-primary text-base font-semibold"
      >
        Follow
      </Button> */}
    </div>
  );
}
