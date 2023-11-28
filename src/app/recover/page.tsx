import { Card } from '@/components/ui/card';
import { RecoverForm } from './components/recover-form';

export const metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.',
};

export default function AuthenticationPage() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div className="w-full m-auto bg-white lg:max-w-lg">
        <Card>
          <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Recuperar conta
                </h1>
                <p className="text-sm text-muted-foreground">
                  Entre com seu email para recuperar sua conta.
                </p>
              </div>
              <RecoverForm />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
