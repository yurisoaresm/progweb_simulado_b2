import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>PD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Pedro Deathmetal</p>
          <p className="text-sm text-muted-foreground">
            pedrodeathmetal@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+R$ 19.301,03</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>RS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Richard Stallman</p>
          <p className="text-sm text-muted-foreground">stalman@email.com</p>
        </div>
        <div className="ml-auto font-medium">+R$ 69.198,34</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>IS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Isabela Prado</p>
          <p className="text-sm text-muted-foreground">
            isabela@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+R$ 13.312,32</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>WW</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">William Wall</p>
          <p className="text-sm text-muted-foreground">will@email.com</p>
        </div>
        <div className="ml-auto font-medium">+R$ 300,939.54</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sofia Davis</p>
          <p className="text-sm text-muted-foreground">sofia.davis@email.com</p>
        </div>
        <div className="ml-auto font-medium">+R$ 339.123,87</div>
      </div>
    </div>
  );
}
