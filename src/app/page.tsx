import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="font-nunito text-4xl font-bold text-blue-600">HelloWorld with Nunito!</h1>
        <p className="font-nunito-sans text-lg text-gray-700">This paragraph uses Nunito Sans font.</p>
        <div className="flex flex-col gap-4 mt-8">
          <h2 className="font-nunito text-2xl font-semibold">Nunito Heading</h2>
          <p className="font-nunito-sans text-base">Some content in Nunito Sans for better readability in paragraphs.</p>
          <span className="font-nunito text-sm text-green-600">Italic Nunito text</span>
        </div>
      </main>
    </div>
  );
}
