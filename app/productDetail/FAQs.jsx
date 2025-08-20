"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FAQs() {
  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day hassle-free return policy. Items must be unused, in their original packaging, and accompanied by the receipt.",
    },
    {
      question: "Do you provide international shipping?",
      answer:
        "Yes, we ship worldwide! Shipping costs are calculated at checkout based on your location.",
    },
    {
      question: "How long will delivery take?",
      answer:
        "Orders are typically processed within 24 hours and delivered in 5–7 business days, depending on your location.",
    },
    {
      question: "Can I track my order?",
      answer:
        "Absolutely. Once your order is shipped, you’ll receive a tracking number via email or SMS.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes, our support team is available 24/7 via live chat, email, or phone to help with any questions or concerns.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>

      <Slider {...settings}>
        {faqs.map((faq, index) => (
          <div key={index} className="px-4">
            <div className="border rounded-xl shadow-lg bg-gray-200 p-6 h-60 flex flex-col justify-center items-center text-center">
              <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
