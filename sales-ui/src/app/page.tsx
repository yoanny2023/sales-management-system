import PageContainer from "@/components/layout/PageContainer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";

export default function Home() {
  return (
    <PageContainer>
      <div className="space-y-6">
        <h1 className="text-3xl font-semibold text-zinc-100">
          Finance Dashboard
        </h1>

        <Card>
          <div className="space-y-4">
            <h2 className="text-xl font-medium">
              Welcome Back
            </h2>

            <Input
              placeholder="Enter your email"
            />

            <Button>
              Login
            </Button>
          </div>
        </Card>
      </div>
    </PageContainer> 
  );
}
