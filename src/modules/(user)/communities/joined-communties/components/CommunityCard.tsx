'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import Image from 'next/image';
import { ICommunityCard } from '../types/joined-community.type';
import ConfirmationModal from '@/components/common/signup-login-success-modal';
import { useState } from 'react';
import CreatedAtIcon from '@/assets/icons/icon-created-at.svg';
import PublicIcon from '@/assets/icons/icon-public.svg';
import PrivateLockIcon from '@/assets/icons/icon-lock-private.svg';
import ForumIcon from '@/assets/icons/icon-formus.svg';
import GroupChatIcon from '@/assets/icons/icon-chat.svg';
import CommunityIcon from '@/assets/icons/icon-community.svg';
import SeeMoreText from '@/modules/(user)/search/components/SeeMoreText';
interface CommunityCardProps {
  community: ICommunityCard;
}

export function CommunityCard({ community }: CommunityCardProps) {
  const [isConfimrationModal, setIsConfimrationModal] = useState(false);

  const getActionButton = (status: ICommunityCard['status']) => {
    switch (status) {
      case 'joined':
        return (
          <Button className="px-16 w-full md:w-auto bg-primary hover:bg-primary text-white font-semibold">
            Joined
          </Button>
        );
      case 'private':
        return (
          <Button
            variant="outline"
            onClick={() => setIsConfimrationModal(true)}
            className="font-semibold  w-full md:w-auto px-16 justify-center items-center  border-primary text-primary hover:bg-primary hover:text-white"
          >
            Request to Join
          </Button>
        );
      default:
        return (
          <Button
            variant="outline"
            className="justify-center w-full md:w-auto px-16 items-center font-semibold border-primary text-primary hover:bg-primary hover:text-white"
            onClick={() => setIsConfimrationModal(true)}
          >
            Join
          </Button>
        );
    }
  };

  return (
    <>
      <Card className="overflow-hidden bg-white flex flex-col justify-between border-none  rounded-md shadow-none">
        <div>
          <CardHeader className="p-0">
            <div className="relative h-32 w-full">
              <Image
                src={'/community-banner.png'}
                alt={`${community.name} cover`}
                fill
                className="object-cover"
              />
              <div className="absolute -bottom-6 left-4">
                <div className="relative h-14 w-14 rounded-full overflow-hidden">
                  <Image
                    src={community.avatarImage || '/placeholder.svg'}
                    alt={`${community.name} avatar`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-8 ">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 md:gap-3">
                <h3 className="font-medium text-sm">{community.name}</h3>
                <span className="text-xs text-primary-grey">
                  ({community.memberCount})
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CreatedAtIcon className="h-4 w-4" />
                <span className="text-xs">Created {community.createdAt}</span>
              </div>
              <div className="flex items-center gap-2">
                {community.isPublic ? (
                  <div className="flex items-center gap-3 text-xs">
                    <PublicIcon className="h-4 w-4" />
                    <span>Public</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 text-xs">
                    <PrivateLockIcon className="h-4 w-4" />
                    <span>Private</span>
                  </div>
                )}
              </div>
              {community.isPublic ? (
                <>
                  {community.hasGroupChat ? (
                    <div className="flex items-center justify-between">
                      <div className="flex w-full justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <GroupChatIcon className="h-4 w-4" />
                          <span className="text-xs">Group Chat</span>
                        </div>

                        {community.groupChatStatus === 'On' && (
                          <span className="bg-light-green rounded-[4px] py-[2px] px-2 font-medium text-sm text-lime-green">
                            On
                          </span>
                        )}
                      </div>
                    </div>
                  ) : null}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ForumIcon className="h-5 w-4" />
                      <span className="font-normal text-xs ml-[3px]">
                        Forums
                      </span>
                    </div>
                    {/* <span className="text-xs  text-blue-600">
              • {community.forumCount}
            </span> */}
                    <span className="bg-light-blue rounded-[4px] py-[2px] px-2 font-medium text-sm text-primary">
                      • {community.forumCount}
                    </span>
                  </div>
                </>
              ) : null}

              {community?.mutualConnection ? (
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-3 text-xs">
                    <CommunityIcon className="w-4" />
                    <span className="font-normal text-xs">
                      {community.mutualConnection} Mutual Connections
                    </span>
                  </div>
                </div>
              ) : null}

              {community?.tags ? (
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="flex gap-2">
                      {community?.tags?.split(',').map((tag, index) => (
                        <span
                          key={index}
                          className="bg-light-blue rounded-[4px] py-[2px] px-2 font-normal text-xs"
                        >
                          # {tag.trim()}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
              ) : null}
              {community?.description ? (
                <div className="flex items-center gap-2">
                  <SeeMoreText text={community.description} />
                </div>
              ) : null}
            </div>
          </CardContent>
        </div>
        <CardFooter className="w-full justify-center pt-4 py-0 mb-5">
          {getActionButton(community.status)}
        </CardFooter>
      </Card>
      <ConfirmationModal
        open={isConfimrationModal}
        onCloseModal={() => setIsConfimrationModal(false)}
        title="Request Sent Successfully!"
        description="You'll be notified once Health Ideas approves your request."
        btnText="Explore more"
        onSubmit={() => {
          setIsConfimrationModal(false);
        }}
      />
    </>
  );
}
