'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as React from 'react';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { CardContent, CardFooter } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface RecoverFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginForm({ className, ...props }: RecoverFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    router.push('/dashboard');
  }

  return (
    <form onSubmit={onSubmit}>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <div className="flex items-center justify-between ">
          <div className='flex items-center space-x-2"'>
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 px-2"
            >
              Lembrar os dados
            </label>
          </div>
          <Link
            href="/recover"
            className="text-sm font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-blue-900 hover:underline "
          >
            Esqueci minha senha
          </Link>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Button className="w-full" disabled={isLoading}>
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Entrar
        </Button>
      </CardFooter>
    </form>
  );
}
