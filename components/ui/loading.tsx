import { cn } from "@/lib/utils";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  variant?: "spinner" | "dots" | "pulse" | "skeleton";
  text?: string;
  className?: string;
  fullScreen?: boolean;
}

export function Loading({
  size = "md",
  variant = "spinner",
  text,
  className,
  fullScreen = false,
}: LoadingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const containerClasses = cn(
    "flex flex-col items-center justify-center gap-3",
    fullScreen && "min-h-screen",
    !fullScreen && "py-8",
    className,
  );

  const renderSpinner = () => (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 dark:border-gray-600 dark:border-t-blue-400",
        sizeClasses[size],
      )}
    />
  );

  const renderDots = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={cn(
            "animate-pulse rounded-full bg-blue-600 dark:bg-blue-400",
            size === "sm" && "h-2 w-2",
            size === "md" && "h-3 w-3",
            size === "lg" && "h-4 w-4",
          )}
          style={{
            animationDelay: `${i * 0.2}s`,
            animationDuration: "1.4s",
          }}
        />
      ))}
    </div>
  );

  const renderPulse = () => (
    <div
      className={cn(
        "animate-pulse rounded-full bg-blue-600 dark:bg-blue-400",
        sizeClasses[size],
      )}
    />
  );

  const renderSkeleton = () => (
    <div className="w-full max-w-sm space-y-3">
      <div className="h-4 animate-pulse rounded bg-gray-300 dark:bg-gray-600" />
      <div className="h-4 w-3/4 animate-pulse rounded bg-gray-300 dark:bg-gray-600" />
      <div className="h-4 w-1/2 animate-pulse rounded bg-gray-300 dark:bg-gray-600" />
    </div>
  );

  const renderVariant = () => {
    switch (variant) {
      case "dots":
        return renderDots();
      case "pulse":
        return renderPulse();
      case "skeleton":
        return renderSkeleton();
      default:
        return renderSpinner();
    }
  };

  return (
    <div className={containerClasses}>
      {renderVariant()}
      {text && (
        <p className="animate-pulse text-sm text-gray-600 dark:text-gray-400">
          {text}
        </p>
      )}
    </div>
  );
}

// Preset loading components for common use cases
export function PageLoading({ text = "Loading..." }: { text?: string }) {
  return <Loading variant="spinner" size="lg" text={text} fullScreen />;
}

export function ComponentLoading({ text }: { text?: string }) {
  return <Loading variant="spinner" size="md" text={text} />;
}

export function ButtonLoading() {
  return <Loading variant="spinner" size="sm" />;
}

export function SkeletonLoading() {
  return <Loading variant="skeleton" />;
}
