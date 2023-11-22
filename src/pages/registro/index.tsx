'use client';

import { CreateAccount } from './components/create-account';

export default function Registro() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div className="w-full m-auto bg-white lg:max-w-lg">
        <CreateAccount />
      </div>
    </div>
  );
}
