const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-primary mb-8">About Us</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              We are dedicated to connecting students and facilitating knowledge sharing through our innovative book exchange platform. Our mission is to make education more accessible and collaborative.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              We envision a world where every student has access to the resources they need to succeed in their academic journey. Through our platform, we aim to create a community of learners who support and inspire each other.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-primary">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-2">Book Exchange</h3>
                <p className="text-gray-700">Connect with fellow students to exchange academic materials and resources.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-2">Community</h3>
                <p className="text-gray-700">Join a vibrant community of learners from various fields of study.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;