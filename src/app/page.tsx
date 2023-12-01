import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="max-w-[1920px] w-full min-h-[100vh] max_1024:h-full m-auto bg-[#2EFEC8] fixed">

      <Image
        src={'/images/bg-1.svg'}
        width={500}
        height={500}
        alt="background fundo pagina"
        className="absolute opacity-60"
      />

      <Image
        src={'/images/bg-2.svg'}
        width={500}
        height={500}
        alt="background fundo pagina"
        className="absolute top-0 right-0 opacity-60 max_1024:hidden"
      />

      <section className="relative z-10 ml-[224px] max_1024:ml-[10px]">
        <div className="mt-[56px]  max_1024:flex items-center justify-center">
          <Image
            src={'/images/Group 2.svg'}
            width={200}
            height={200}
            alt="Logo Orbit System"
          />
        </div>

        <div className="mt-[170px] max_1024:mt-[100px] max_1024:flex justify-center items-center">
          <Image
            className="w-[800px] max_1024:ml-[100px]"
            src={'/images/Frame 54.svg'}
            width={200}
            height={200}
            alt="Caixa de texto center"
          />
        </div>

        <div className="mt-16 flex gap-3 max_1024:flex-wrap max_1024:justify-center">
          <button className="bg-[#00A58E] p-3 rounded-lg">
            <Link href={'/'} className="text-white">Auto Layout</Link>
          </button>
          <button className="bg-[#00A58E] p-3 rounded-lg">
            <Link href={'/'} className="text-white">Variants</Link>
          </button>
          <button className="bg-[#00A58E] p-3 rounded-lg">
            <Link href={'/'} className="text-white">Interactive components</Link>
          </button>
        </div>
      </section>

      <Image
        src={'/images/IMG_1413 1.svg'}
        width={600}
        height={600}
        alt="Foguete"
        className="absolute right-0 bottom-0 max_1024:w-[400px] max_1024:opacity-70"
      />
    </main>
  )
}
