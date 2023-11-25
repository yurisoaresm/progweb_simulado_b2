'use client';

import Link from 'next/link';
import React from 'react';

import { LoginForm } from './components/login-form';
import { ThirdPartiesLogin } from './components/third-parties-login';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Login() {
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
          <LoginForm />
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
          <ThirdPartiesLogin />
          <p className="mt-2 text-xs text-center text-gray-700 mb-2">
            Não tem uma conta?{' '}
            <Link href="/registro" className="text-blue-600 hover:underline">
              Criar conta
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
