"use client"

import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
        <div className="content-center w-full m-auto bg-white lg:max-w-lg">
          <Card className="px-8 py-16">
            <div className=" flex flex-col items-center">
              <Image
                src="/next.svg"
                alt="Next.js Logo"
                width={200}
                height={200}
              />
            </div>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">
                Bem-vindo ao Projeto
              </CardTitle>
              <CardDescription className="text-center text-md">
                Next.js + TailwindCSS
              </CardDescription>
            </CardHeader>

            <CardContent>
              Para começar, faça login na sua conta ou crie uma nova conta:
            </CardContent>
            <div className="grid grid-cols-2 gap-2 m-2">
              <Button className=" flex-1" onClick={() => router.push('/login')}>
                Entrar
              </Button>
              <Button
                className=" flex-1"
                onClick={() => router.push('/registro')}
              >
                Registrar-se
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}