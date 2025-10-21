export default function TestPage() {
  return (
    <main className='relative w-full pt-24'>
      {/* Header Section */}
      <div className='flex flex-col md:gap-5 mb-16 bg-green-500'>
        <p className='text-6xl font-[900] md:text-8xl '>
          My <span className='text-primary'>Best</span> Creations
        </p>
        <p
          className='
          bg-orange-500
          w-[50%]
          md:w-[500px]
            mt-7
            text-secondary100
              text-lg
              md:text-3xl
          '
        >
          Designing and Developing Robust and Stylish Web Applications for a
          Decade and Counting
        </p>
      </div>

      <section className='sticky top-0 w-full h-max md:h-screen p-20 bg-red-500'>
        <span className='text-5xl'>Hello 1</span>
        <span className='text-5xl'>Hello 1</span>
        <span className='text-5xl'>Hello 1</span>
        <span className='text-5xl'>Hello 1</span>
        <span className='text-5xl'>Hello 1</span>
        <span className='text-5xl'>Hello 1</span>
        <span className='text-5xl'>Hello 1</span>
      </section>

      <section className='sticky top-0 w-full h-max md:h-screen p-20 bg-blue-500'>
        <span className='text-5xl'>Hello 1</span>
        <span className='text-5xl'>Hello 1</span>
        <span className='text-5xl'>Hello 1</span>
        <span className='text-5xl'>Hello 1</span>
        <span className='text-5xl'>Hello 1</span>
        <span className='text-5xl'>Hello 1</span>
        <span className='text-5xl'>Hello 1</span>
      </section>

      <section className='sticky top-0 w-full h-max md:h-screen p-20 bg-green-500'>
        <span className='text-5xl'>Hello 1</span>
        <span className='text-5xl'>Hello 1</span>
        <span className='text-5xl'>Hello 1</span>
        <span className='text-5xl'>Hello 1</span>
        <span className='text-5xl'>Hello 1</span>
        <span className='text-5xl'>Hello 1</span>
        <span className='text-5xl'>Hello 1</span>
      </section>
    </main>
  );
}
