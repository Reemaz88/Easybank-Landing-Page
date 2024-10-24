import imageCurrency from '../images/image-currency.jpg';
import imageRestaurant from '../images/image-restaurant.jpg';
import imagePlane from '../images/image-plane.jpg';
import imageConfetti from '../images/image-confetti.jpg';

const blog = [
  {
    author: 'By Claire Robinson',
    title: 'Receive money in any currency with no fees',
    description:
      'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
    imgPath: imageCurrency,
    imgAlt: 'multiple bills with different values and currencies',
  },
  {
    author: 'By Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    description:
      'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
    imgPath: imageRestaurant,
    imgAlt: 'someone eating a hamburguer in a restaurant',
  },
  {
    author: 'By Wilson Hutton',
    title: 'Take your Easybank card wherever you go',
    description:
      'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
    imgPath: imagePlane,
    imgAlt: 'A plane in the sky',
  },
  {
    author: 'By Claire Robinson',
    title: 'Our invite-only Beta accounts are now live!',
    description:
      'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
    imgPath: imageConfetti,
    imgAlt: 'Falling confetti',
  },
];


function Blog() {
  return (
    <section className="py-14 lg:py-24 pr-2 pl-2 lg:pr-7 lg:pl-7">
      <div className="container">
        <h2 className="text-center text-3xl lg:text-4xl text-primary-dark-blue mb-5 lg:text-left lg:mb-10">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 gap-5 lg:gap-7 lg:grid-cols-4">
          {blog.map((blog) => (
            <article key={blog.title} className="bg-white">
              <div className="aspect-w-16 aspect-h-10 lg:aspect-w-4 lg:aspect-h-3">
                <img
                  className="object-cover"
                  src={blog.imgPath}
                  alt={blog.imgAlt}
                />
              </div>

              <div className="px-7 pt-5 pb-10 lg:p-6">
                <span className="text-neutral-grayish-blue text-xs">
                  {blog.author}
                </span>
                <h4 className="text-primary-dark-blue text-sm py-2 hover:text-green-400">
                  <a href="#">{blog.title}</a>
                </h4>
                <p className="text-neutral-grayish-blue text-xs">
                  {blog.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
