import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  BackpackIcon,
  BellIcon,
  GraduationCapIcon,
  LogOutIcon,
  MessageCircleIcon,
  SettingsIcon,
  VideoIcon,
} from "lucide-react";
import Link from "next/link";

export function MenuBar() {
  return (
    <Card className="max-w-17 w-full h-screen flex flex-col items-center justify-between">
      <div className="flex flex-col items-center gap-6">
        <Tooltip>
          <TooltipTrigger>
            <Popover>
              <PopoverTrigger asChild>
                <Button size="icon" variant="ghost" asChild>
                  <Link href="/">
                    <BellIcon />
                    <span className="sr-only">Notifications</span>
                  </Link>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="mx-6">
                <PopoverHeader>
                  <PopoverTitle className="mb-4">Notificações</PopoverTitle>
                  <PopoverDescription className="space-y-3">
                    <div>
                      <strong>João Ferreria</strong> entregou a lição Exercício
                      4
                    </div>
                  </PopoverDescription>
                </PopoverHeader>
              </PopoverContent>
            </Popover>
          </TooltipTrigger>
          <TooltipContent>
            <p>Notificações</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <Button size="icon" variant="ghost" asChild>
              <Link href="/">
                <MessageCircleIcon />
                <span className="sr-only">Chat</span>
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Conversas</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <Button size="icon" variant="outline" asChild>
              <Link href="/">
                <GraduationCapIcon />
                <span className="sr-only">Matérias</span>
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Matérias</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Button size="icon" variant="ghost" asChild>
              <Link href="/">
                <BackpackIcon />
                <span className="sr-only">Assignments</span>
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Tarefas</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <Button size="icon" variant="ghost" asChild>
              <Link href="/">
                <VideoIcon />
                <span className="sr-only">Meeting</span>
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Video Chamada</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <Avatar>
            {/* <AvatarImage src="" /> */}
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <a href="/api/auth/sign-out" className="text-xs">
              <SettingsIcon className="mr-2 size-4" /> Configurações
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="/api/auth/sign-out" className="text-destructive text-xs">
              <LogOutIcon className="mr-2 size-4" /> Sair da conta
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Card>
  );
}
