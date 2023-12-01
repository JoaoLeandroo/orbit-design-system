import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="max-w-[1920px] w-full min-h-[100vh] m-auto bg-[#2EFEC8] fixed">

      <Image
        src={'/images/bg-1.svg'}
        width={500}
        height={500}
        alt="background fundo pagina"
        className="absolute"
      />

      <Image
        src={'/images/bg-2.svg'}
        width={500}
        height={500}
        alt="background fundo pagina"
        className="absolute top-0 right-0"
      />

      <section className="relative z-10 ml-[224px]">
        <div className="mt-[56px]">
          <Image
            src={'/images/Group 2.svg'}
            width={200}
            height={200}
            alt="Logo Orbit System"
          />
        </div>

        <div className="mt-[170px]">
          <Image
            className="w-[800px]"
            src={'/images/Frame 54.svg'}
            width={200}
            height={200}
            alt="Caixa de texto center"
          />
        </div>

        <div className="mt-16 flex gap-3">
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
        className="absolute right-0 bottom-0"
      />
    </main>
  )
}
