function Hero() {
  return (
    <section id='hero' className='relative overflow-hidden lg:p-12'>
      <div className='bg-header-mobile bg-custom-mobile-header-size absolute w-full h-full bg-no-repeat lg:hidden'></div>
      <div
        className='bg-header-desktop absolute w-full h-full bg-no-repeat hidden lg:block'
        style={{ right: '-600px', top: '0', backgroundPosition: 'right' }}
      ></div>
      <div
        className='bg-image-mockupss absolute z-20 w-full h-full bg-no-repeat lg:bg-right lg:top-0 lg:left-0 lg:transform-none hidden lg:block' // Hide on small screens, show on large
        style={{
          right: '-300px',
          top: '0',
          backgroundPosition: 'right top',
        }}
      ></div>
      <div className='container h-screen relative z-20'>
        <div className='h-full flex flex-col justify-end pb-4 lg:pb-0 lg:w-96 lg:justify-center'>
          <div className='h-1/2 flex flex-col justify-center items-center text-center lg:items-start lg:text-left'>
            <h1 className='text-4xl lg:text-5xl text-primary-dark-blue pb-5'>
              Next generation digital banking
            </h1>
            <p className='text-neutral-grayish-blue text-xs lg:text-base leading-5 mb-7'>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <button className='bg-primary-lime-green px-7 py-3 rounded-full text-neutral-white text-xs bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan hover:button-brightness mb-7 focus:outline-none focus:ring ring-green-400'>
              Request Invite
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
