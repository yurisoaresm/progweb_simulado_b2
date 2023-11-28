'use client';

import { CreateAccountForm } from './components/create-account';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Registro() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div className="w-full m-auto bg-white lg:max-w-lg">
        <Card>
          <CardHeader className="text-center justify-center space-y-1">
            <CardTitle className="text-2xl">Criar uma conta</CardTitle>
            <CardDescription>
              Entre com seu email e senha para poder criar uma conta.
            </CardDescription>
          </CardHeader>
          <CreateAccountForm />
        </Card>
      </div>
    </div>
  );
}
