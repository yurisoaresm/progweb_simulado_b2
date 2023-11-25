'use client';

import { useRouter } from 'next/router';
import * as React from 'react';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

interface RecoverFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ThirdPartiesLogin({ className, ...props }: RecoverFormProps) {
  const router = useRouter();
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false);
  const [isTwitterLoading, setIsTwitterLoading] =
    React.useState<boolean>(false);

  async function handleGitHubSubmit() {
    setIsGitHubLoading(true);

    setTimeout(() => {
      setIsGitHubLoading(false);
    }, 3000);

    router.push('/dashboard');
  }

  async function handleTwitterSubmit() {
    setIsTwitterLoading(true);

    setTimeout(() => {
      setIsTwitterLoading(false);
    }, 3000);

    router.push('/dashboard');
  }

  return (
    <div className="grid grid-cols-2 gap-6 m-2">
      <Button
        onClick={handleGitHubSubmit}
        disabled={isGitHubLoading}
        variant="outline"
      >
        {isGitHubLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}
        Github
      </Button>

      <Button
        onClick={handleTwitterSubmit}
        disabled={isTwitterLoading}
        variant="outline"
      >
        {isTwitterLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.twitter className="mr-2 h-4 w-4" />
        )}
        Twitter
      </Button>
    </div>
  );
}
