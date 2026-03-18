import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BackpackIcon, MegaphoneIcon, PlusIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full space-y-6 p-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Cursos</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">DSM</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Matérias</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Matérias</h1>
        <Button size="lg">
          <PlusIcon /> Nova Matéria
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-6 my-6">
        <Card className="border-b-4 border-b-primary">
          <CardHeader>
            <CardTitle>Álgebra Linear</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row gap-4">
            <Button size="icon" variant="outline">
              <BackpackIcon />
              <span className="sr-only">Assingments</span>
            </Button>
            <Button size="icon" variant="outline">
              <MegaphoneIcon />
              <span className="sr-only">Announcements</span>
            </Button>
          </CardContent>
        </Card>
        <Card className="border-b-4 border-b-primary">
          <CardHeader>
            <CardTitle>Desenvolvimento Web III</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row gap-4">
            <Button size="icon" variant="outline">
              <BackpackIcon />
              <span className="sr-only">Assingments</span>
            </Button>
            <Button size="icon" variant="outline">
              <MegaphoneIcon />
              <span className="sr-only">Announcements</span>
            </Button>
          </CardContent>
        </Card>
        <Card className="border-b-4 border-b-primary">
          <CardHeader>
            <CardTitle>Banco de Dados Relacionais</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row gap-4">
            <Button size="icon" variant="outline">
              <BackpackIcon />
              <span className="sr-only">Assingments</span>
            </Button>
            <Button size="icon" variant="outline">
              <MegaphoneIcon />
              <span className="sr-only">Announcements</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
