'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Login() {
  const router = useRouter();

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div className="w-full m-auto bg-white lg:max-w-lg">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Login</CardTitle>
            <CardDescription className="text-center">
              Entre com seu email e senha para logar no sistema
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Lembrar os dados
              </label>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full" onClick={() => router.push('/')}>
              Entrar
            </Button>
          </CardFooter>
          <div className="relative mb-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Ou continue com
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 m-2">
            <Button variant="outline">
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline">
              {' '}
              <Icons.twitter className="mr-2 h-4 w-4" />
              Twitter
            </Button>
          </div>

          <p className="mt-2 text-xs text-center text-gray-700 mb-2">
            Não tem uma conta?{' '}
            <Link href="/registro" className=" text-blue-600 hover:underline">
              Criar conta
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
