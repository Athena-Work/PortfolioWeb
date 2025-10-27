import EmailIcon from "@/public/icons/email";
import PhoneIcon from "@/public/icons/phone";
import Image from "next/image";

export default function ContactPage() {
  return (
    <section className='w-full min-h-[70vh] flex flex-col md:flex-row items-center justify-between gap-15 md:gap-0 py-[30px] md:py-[50px] '>
      {/* Title */}
      <div className='max-w-[650px] flex flex-col'>
        <div className='flex items-baseline gap-[2px] mb-2'>
          <h2 className='text-4xl md:text-[56px] font-[800] text-secondary200'>
            Get In Touch
          </h2>
          <div className='w-[10px] h-[10px] rounded-full bg-primary' />
        </div>

        <span className='text-2xl text-secondary100 font-[400] mb-10'>
          Looking to partner or work together? Reach out through the form and
          I&apos;ll get back to you in the next 48 hours.
        </span>

        <div className='flex flex-col gap-3'>
          <div className='flex items-center gap-10'>
            <div className='w-[50px] h-[50px] flex justify-center items-center rounded-full border border-secondary100'>
              <EmailIcon color='#4e525a' size={40} />
            </div>
            <span>info@purplefolio.com</span>
          </div>
          <div className='flex items-center gap-10'>
            <div className='w-[50px] h-[50px] flex justify-center items-center rounded-full border border-secondary100'>
              <PhoneIcon color='#4e525a' size={40} />
            </div>
            <span>+1 123 123 1234</span>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className='grow flex justify-center md:justify-end'>
        <div className='w-[300px] h-[300px] md:w-[380px] md:h-[380px] p-7 border border-primary rounded-full'>
          <Image
            src='/images/hero-section.jpg'
            alt='iamge'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-full rounded-full'
          />
        </div>
      </div>
    </section>
  );
}
