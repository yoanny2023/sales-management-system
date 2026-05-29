import { cn } from "@/lib/utils";

type PageContainerProps = React.ComponentProps<"main">;

function PageContainer({
  children,
  className,
  ...props
}: PageContainerProps) {
  return (
    <main
      {...props}
      className={cn(
        "mx-auto w-full max-w-7xl",
        "px-4 py-6 md:px-6 md:py-8",
        className 
      )}
    >
      {children}
    </main>
  );
}

export default PageContainer;