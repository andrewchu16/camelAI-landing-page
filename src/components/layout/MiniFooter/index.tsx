import PrimaryButton from "@/components/widgets/PrimaryButton";
import SecondaryButton from "@/components/widgets/SecondaryButton";

const MiniFooter = () => {
  return (
    <div className="w-full p-20 bg-dark-background">
      <div className="max-w-[1340px] mx-auto px-5 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-semibold text-white">
            Get started for
          </span>
          <span className="text-3xl font-semibold inline-block bg-[linear-gradient(135deg,theme(--color-gradient3-start),theme(--color-gradient3-middle),theme(--color-gradient3-end))] bg-clip-text text-transparent">
            free.
          </span>
        </div>
        <div className="flex gap-4">
          <PrimaryButton href="https://app.camelai.com/">
            Try Free
          </PrimaryButton>
          <SecondaryButton href="https://cal.com/ipr-camelai/book-a-demo">
            Contact us
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default MiniFooter;
