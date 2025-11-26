const About = () => {
  return (
    <div className="p-8 w-full mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">About ShopStream</h1>
      <div className="prose prose-lg dark:prose-invert mx-auto">
        <p className=" mb-6">
          ShopStream is your ultimate destination for discovering and purchasing
          amazing products from around the world. We curate a diverse collection
          of items across multiple categories to provide you with the best
          shopping experience.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className=" mb-6">
          To connect consumers with high-quality products through an intuitive,
          fast, and enjoyable online shopping platform.
        </p>
        <h2 className="text-2xl font-semibold mb-4 ">What We Offer</h2>
        <ul className="list-disc list-inside  mb-6">
          <li>Wide variety of products across 25+ categories</li>
          <li>Advanced search and filtering options</li>
          <li>Infinite scroll for seamless browsing</li>
          <li>Responsive design for all devices</li>
          <li>Dark/Light theme toggle</li>
          <li>Secure shopping cart functionality</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="">
          Founded with the vision of simplifying online shopping, ShopStream
          combines cutting-edge technology with user-centric design to deliver
          an unparalleled shopping experience.
        </p>
      </div>
    </div>
  );
};

export default About;
