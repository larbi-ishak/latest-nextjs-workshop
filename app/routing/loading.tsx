import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      Loading
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
    </>
  );
}
